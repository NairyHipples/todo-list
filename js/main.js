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
  var test = "<li>" + value + "<br>" + doneButtonCode + editButtonCode + deleteButtonCode + "</li>";
  var test2 = "";
  //Add it to the list
  $('.toDoList').prepend(test);

  //Done Button
  $('.doneButton').click(function(){
    $(this).parent().prependTo('.doneList').addClass('doneTask');
    // $(this).replaceWith(test2);
    //Provade med replaceWith, fick bra resultat förutom att
    //.editButton följde med. Raderade det.


    // if ($(this).parent('.doneTask')){
    //    $('.doneButton').detach();
    //    $('.editButton').detach();
    // }
    // if (".doneTask"){
    //   (this).('.doneButton').detach();
    //   $('.editButton').detach();
    //   console.log("hej");
  });
  //Edit Button
  $('.editButton').click(function(){

  });
  //Delete Button
  $('.deleteButton').click(function(){
    $(this).parent().detach();
  });
});

  // $('.doneButton').detach();
  // $('.editButton').detach();
/************************
         LOOPS
************************/


















// $('.toDoLoad').click(function(){
//   $('main').load('todo.html');
// });
// Bad try for a good thing
