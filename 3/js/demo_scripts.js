/*
  NAME
  COURSE_NAME

  9/30/2016
  showFieldsOnClick() adds event listener, and executes the main script.
  Other functions are called therefrom, and are documented.
*/
function getFieldValues(form){
  // Pack field values as object literal
  var ret = {};
  // A variable for the return value

  var elements = form.elements;
  for(var i = 0; i < elements.length - 1; i++){
    // Iterate the elements, except the last one (whcih is why elements.lenght - 1),
    // because last element is "GO" button.
    var e = $(elements[i]);
    // use JQuery here and below

    ret[e.attr('id')] = e.val();
    // add each element to the return object
  }
  return ret;
}

function displayFieldsAsList(fields, target){
  // Display fields as unordered list in dom element target

  var html = '';
  // delcare an element for storing values

  for(var key in fields){
    html += "<li>" + fields[key] + "</li>";

    // Loop through each key in object literal
    // var item = document.createElement('li');
    // item.innerText = fields[key];
    // list.appendChild(item);
  }

  target.empty();
  target.append("<ul>" + html + "</ul>");
}

function showFieldsOnClick(){
  // var button = document.getElementById('submit_contact_form');
  // button.addEventListener('click', function(){
  $('#submit_contact_form').click(function(e){
    // Replace 2 lines above with this one with JQuery

    // Listen for "click" event, and invoke anonymous functions that was
    // provided as second parameter.

    e.preventDefault();
    // Prevent form from submitting

    var form = this.form;
    // "this" is very important in JS, and in the context of the
    // 'addEventListener()' function, refers to the element upon which
    // the event listener is being added. So here, the button. From the button,
    // we get the form (this.form);

    var fields = getFieldValues(form);
    // get fields

    var target = $('#form_fields_target');
    // get target element

    displayFieldsAsList(fields, target);

    // Fade out Form
    jQuery('#contact_form').fadeOut('slow');
  });
}

showFieldsOnClick();
