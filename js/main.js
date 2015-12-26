/************************
   BUTTON DECLARATION
************************/
var doneButton = "<button class='btn btn-success'><span class='glyphicon glyphicon-ok'></span></button>";
var editButton = "<button class='btn btn-warning'><span class='glyphicon glyphicon-pencil'></span></button>";
var deleteButton = "<button class='btn btn-danger'><span class='glyphicon glyphicon-trash'></span></button>";
/************************
  ADD TO LIST FUNCTION
************************/
//Find and Bind the button
$('.addItemButton').click(function(){
  //Grab value from the input field
  var value = $('input').val();
  //Add it to the list
  $('.toDoList').append("<li>" + value + "</li>" + doneButton + editButton + deleteButton);

});


/************************
REMOVE FROM LIST FUNCTION
************************/
//Find and Bind the button
$(deleteButton).click(function(){
  $(this).parent().detach();
});
