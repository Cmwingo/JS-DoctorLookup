var Doctors = require('./../js/doctor-lookup.js').getDoctors;

function displayDoctors(doctors) {
  $('.showDoctors').text(function() {
    $('.showDoctors').html('');
    $('.showDoctors').append("<h3>These doctors might be able to help you with your issue</h3><br>");
    doctors.forEach(function(doctor) {
      $('.showDoctors').append(doctor.name + "<br>");
    });
  });
}

$(document).ready(function() {
  $('#medicalIssue').click(function() {
    var medicalIssue = $('#issue').val();
    var doctors = new Array(Doctors(medicalIssue, displayDoctors));
  });
});
