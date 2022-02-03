jQuery(function($) {
  var fbTemplate = document.getElementById("fb-editor");
  $(fbTemplate).formBuilder();
  var controls = document.getElementById("frmb-0-cb-wrap");
  document.getElementById("fb-controls").appendChild(controls);
});
