const Airtable = require('airtable')

exports.handler = function(event, context, callback) {
  Airtable.configure({
    endpointUrl: 'https://d2j5hchu5g3uxq.cloudfront.net',
    apiKey: process.env.AIRTABLE_KEY
    // allowUnauthorizedSsl: true
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
          const response = {
            statusCode: 200,
            body: body,
            headers: {
              'content-type': 'application/json',
              'cache-control': 'Cache-Control: max-age=300, public'
            }
          }
          callback(null, response)
        }
      }
    )
}
