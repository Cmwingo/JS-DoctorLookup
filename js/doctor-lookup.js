var apiKey = require('./../.env').apiKey;

function Doctor(name) {
  this.name = name;
}

exports.getDoctors = function(medicalIssue, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
      var doctors = new Array();
      result.data.forEach(function(dataObject, i) {
        doctors[i] = new Doctor(dataObject.practices[0].name);
      });
      displayFunction(doctors);
      return result;
    })
   .fail(function(error){
      $('.showDoctors').text("We're sorry, but no doctors were found relating to that medical issue")
      return error;
    });
};
