$('button').click(function(){
  $('main').load($(this).val());
});


/************************
   BUTTON DECLARATION
************************/
var doneButtonCode = "<button class='doneButton btn btn-success'><span class='glyphicon glyphicon-ok'></span></button>";
var editButtonCode = "<button class='editButton btn btn-warning'><span class='glyphicon glyphicon-pencil'></span></button>";
var deleteButtonCode = "<button class='deleteButton btn btn-danger'><span class='glyphicon glyphicon-trash'></span></button>";
/************************
  ADD TO LIST FUNCTION
   (delete included)
************************/
//Find and Bind the button
$('.addItemButton').click(function(){

  //Grab value from the input field
  var value = $('input').val();

  //Add it to the list
  $('.toDoList').prepend("<li>" + value + "<br>" + doneButtonCode + editButtonCode + deleteButtonCode + "</li>");


  //Done Button
  $('.doneButton').click(function(){

    //$(this).parent().detach();
  });
  //Edit Button
  $('.editButton').click(function(){

  });
  //Delete Button
  $('.deleteButton').click(function(){
    $(this).parent().detach();
  });

});
/************************
         LOOPS
************************/
