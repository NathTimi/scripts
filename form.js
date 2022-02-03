jQuery(function($) {
  var fbTemplate = document.getElementById('fb-editor');
  var options = {
    disableFields: [
      'autocomplete',
      'file',
      'date',
      'paragraph'
    ]
  };
  $(fbTemplate).formBuilder(options);
});
