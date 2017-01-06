var Doctors = require('./../js/doctor-lookup.js').getDoctors;

function displayDoctors(doctors) {
  $('.showDoctors').text(function() {
    doctors.forEach(function(doctor) {
      $('.showDoctors').append(doctor.name + "<br>");
    });
  });
}

$(document).ready(function() {
  $('#medicalIssue').click(function() {
    var medicalIssue = $('#issue').val();
    var doctors = new Array(Doctors(medicalIssue, displayDoctors));
    console.log("Front end:" + doctors);
  });
});
