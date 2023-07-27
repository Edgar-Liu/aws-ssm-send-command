const axios = require('axios')
exports.handler = (event, context, callback) => {
  console.log(event)
  const data = {
    dutyCrewSnapshotId: event.dutyCrewSnapshotId,
  }
  const config = {
    headers: {
      apiKey: process.env.apiKey,
      'content-type': 'application/x-www-form-urlencoded',
    },
  }
}
