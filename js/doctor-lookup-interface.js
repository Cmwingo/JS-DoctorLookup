var Doctors = require('./../js/doctor-lookup.js').getDoctors;

$(document).ready(function() {
  $('#medicalIssue').click(function() {
    var medicalIssue = $('#issue').val();
    var doctors = new Array(Doctors(medicalIssue));
  });
});
