
/************************
   BUTTON DECLARATION
************************/
var doneButtonCode = "<button class='doneButton btn btn-success'><span class='glyphicon glyphicon-ok'></span></button>";
var editButtonCode = "<button class='editButton btn btn-warning'>Press on your task to edit it.<span class='glyphicon glyphicon-pencil'></span></button>";
var deleteButtonCode = "<button class='deleteButton btn btn-danger'><span class='glyphicon glyphicon-trash'></span></button>";
/************************
  ADD TO LIST FUNCTION
   (delete included)
************************/
//Find and Bind the button
$('.addItemButton').click(function(){
  var value = $('#innput').val();

  //Grab value from the input field

  //Add it to the list
  if (value===''){
  //Don't allow to add to the page
  }else {
    $('.toDoList').prepend("<li>" + "<p  class='editInput'>" + value + "</p>" + "<br>" + doneButtonCode + editButtonCode + deleteButtonCode + "</li>");
  }
  //Done Button
  $('.doneButton').click(function(){
    $('p').removeClass('editInput');
    $(this).parent().prependTo('.doneList').addClass('doneTask');
    $('.doneTask').find('.editButton').detach();
    $('.doneTask').find('.doneButton').detach();
  });

  //Edit Button
  $('.editInput').click(function(){
    var newText = prompt("Change task to:");
    if (!newText || newText == "" || newText == " ") {
      return false;
    }
    this.innerText = newText;
    //document.querySelector(".editInput").val() = newText;
    //$('.toDoList').append("<li>" +  doneButtonCode + editButtonCode + deleteButtonCode + "</li>");


  });

  //Delete Button
  $('.deleteButton').click(function(){
    $(this).parent().detach();
  });

});
//   if ($('#checkbox').prop('checked')){
//     $('.editInput').prop("disabled", false);
//   }else{
//     $('.editInput').prop("disabled", true);
//   }

// $('.editInput').show(400);
// $(this).parent().addClass('editTask');
//
// if ($(this).parent().hasClass('editTask')) {
//   $('.editTask').prop("disabled", false);
//   $(this).parent().removeClass('editTask');
// }else if (!$(this).parent().hasClass('editTask')) {
//   $('.editTask').prop("disabled", true);
//   $('.editInput').hide(400);


//})
// $('.editInput').toggle(400);
//
// $('.editInput').prop("disabled", true);
// //$(this).parent().addClass('editTask');
// //Gör icke editable
// //Gör editable
// $('input').prop("disabled", false);


  // $('.editButton').click(function(){
  //   var parent = $(this).parent();
  //
  //   if (!parent.hasClass('editTask')) {
  //     parent.addClass('editTask');
  //   }else if (parent.hasClass('editTask')) {
  //       $('.editTask').prop("disabled", false);
  //   }
  //
  // });

  // $('.editButton').click(function editFunction(){
  //   var x = $("#myText").value;
  //   $("#demo").innerHTML = x;
  //   $('#myText').toggle();
  //
  // });

  // function editFunction() {
  //   var x = $("#myText").value;
  //   $("#demo").innerHTML = x;
  //   $('#myText').toggle();
  // }




/************************
         LOOPS
************************/

















/******************************
         DELETED CODE
(to remind me of my progress)
******************************/

// $('.doneButton').detach();
// $('.editButton').detach();

    //test === test2 ? $('.editButton').detach() : $('.doneButton').detach();
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

// $('.toDoLoad').click(function(){
//   $('main').load('todo.html');
// });
// Bad try for a good thing
