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
  const notificationURL = `${process.env.backendURL}/messages/activateSubstitute`
  axios
    .post(notificationURL, data, config)
    .then((result) => {
      console.log(result.data)
      callback(null, {
        dutyCrewSnapshotId: event.dutyCrewSnapshotId,
        apiKey: event.apiKey,
        acknowledgementStatus: result.data.acknowledgementStatus,
      })
    })
    .catch((err) => {
      console.log('Error is:️', err)
      callback(err)
    })
}