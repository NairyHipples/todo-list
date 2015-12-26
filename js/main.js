/************************
  ADD TO LIST FUNCTION
************************/
//Find and Bind the button
$('.addItemButton').click(function(){
  //Grab value from the input field
  var value = $('input').val();
  //Add it to the list
  $('.toDoList').append("<li>" + value + "</li>" + "<button>" + "</button>");

});

/************************
REMOVE FROM LIST FUNCTION
************************/
//Find and Bind the button
$('.deleteItemButton').click(function(){
  $(this).parent().detach();
});
