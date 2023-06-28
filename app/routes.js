//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Logs saved data in the terminal
router.use((req, res, next) => {
    const log = {
      method: req.method,
      url: req.originalUrl,
      data: req.session.data
    }
    console.log(JSON.stringify(log, null, 2))
  next()
})


// Run this code when a form is submitted to '/version1/confirmation' on check.html
router.post('/version1/confirmation', function (req, res) {

  // Make a variable and give it the value from 'check' radios
  var check = req.session.data['check']

  // Check whether the variable matches a condition.
  if (check == "yes"){
    // Send user to confirmation screen
    res.redirect('/version1/confirmation')
  } else {
    // Send user to upload screen
    res.redirect('/version1/upload-report')
  }

})