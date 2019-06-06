const zlib = require('zlib')
const Airtable = require('airtable')

exports.handler = function(event, context, callback) {
  // const acceptsGzip = event.headers['Accept-Encoding']
  //   ? event.headers['Accept-Encoding'].contains('gzip')
  //   : false
  const acceptsGzip = false

  Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: process.env.AIRTABLE_KEY
  })
  const base = Airtable.base('appNtnZ99fkL1cByn')

  const allRecords = []
  base('entries')
    .select({
      maxRecords: 100,
      view: 'all'
    })
    .eachPage(
      function page(records, fetchNextPage) {
        records.forEach(function(record) {
          allRecords.push(record)
        })
        fetchNextPage()
      },
      function done(err) {
        if (err) {
          callback(err)
        } else {
          const body = JSON.stringify({ records: allRecords })
          if (!acceptsGzip) {
            // Send string response
            sendResponse(callback, body, false)
          } else {
            // Send gzipped response
            zlib.gzip(body, function(gzipErr, gzippedBody) {
              if (gzipErr) {
                callback(gzipErr)
              } else {
                sendResponse(callback, gzippedBody, true)
              }
            })
          }
        }
      }
    )
}

function sendResponse(callback, body, gzip) {
  const response = {
    statusCode: 200,
    body: body,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'Cache-Control: max-age=300, public',
      'content-length': Buffer.from(body).length
    }
  }
  if (gzip) {
    response.isBase64Encoded = true
    response.headers['content-encoding'] = 'gzip'
  }
  callback(null, response)
}
