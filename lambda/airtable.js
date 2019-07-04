const Airtable = require('airtable')

Airtable.configure({
  // AIRTABLE_API_URL="https://d2j5hchu5g3uxq.cloudfront.net"
  endpointUrl: process.env.AIRTABLE_API_URL,
  apiKey: process.env.AIRTABLE_API_KEY
})
const base = Airtable.base('appNtnZ99fkL1cByn')

exports.handler = function(event, context, callback) {
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
