
//Koppling till vår databas
var myFireBaseRef = new Firebase("https://nairyhipplestodo.firebaseio.com/");


//Kopplar .addItemButton
document.querySelector(".addItemButton").addEventListener("click",function(){
  var task;
  //Tar värdet från inputfältet
  task = document.querySelector(".writeTaskHere").value;

  //Kallar på funktionen addTask
  //som i sin tur pushar task till databasen
  //(se nedan)
  addTask(task);
});

// document.querySelector(".editButton").addEventListener("click", function(){
//   var edit;
//
//   edit = document.querySelector(".editTask").value;
//   editTask(edit);
// });

//När något barn har lagts till ska man visa det i toDoList.
myFireBaseRef.child('toDo').on('child_added', function(snapshot){
  document.querySelector('.toDoList').innerHTML += ("<li>" + '<input type="text" value="" class="editTask">' + snapshot.val().task + "<br>" + doneButtonCode + editButtonCode + deleteButtonCode + "</li>");
});



// //När något barn har lagts till ska man visa det i toDoList.
// myFireBaseRef.child('toDo').on('child_added', function(snapshot){
//   document.querySelector('.toDoList').innerHTML += ("<li>" + "<p id='demo'>" + snapshot.val().task + "<br>" + "</p>" + doneButtonCode + editButtonCode + '<input type="text" id="myText">'+ deleteButtonCode + "</li>");
// });

//Funktion för att lägga till task
//Tar emot task som parameter ifrån den där uppe
//och pushar in i databasen.
function addTask(task){
  myFireBaseRef.child('toDo').push({task: task})
}
// function editTask(edit){
//   myFireBaseRef.child('toDo').push({task: edit})
// }

// document.querySelector(".deleteButton").addEventListener("click",function(){
//
//   //Tar värdet från inputfältet
//   myFireBaseRef.child(task).remove();
// });

  //Kallar på funktionen addTask
  //som i sin tur pushar task till databasen
  //(se nedan)

// document.querySelector(".deleteButton").addEventListener("click",function(){
//
//   task = document.querySelector("li").value;
//   deleteTask(task);
// });


//Funktion för att ta bort en task
//från databasen.
//Skall vara kopplad till .deleteButton.
function deleteTask(task){
  myFireBaseRef.child('toDo').remove({task: task})
}


// document.querySelector(".deleteButton").addEventListener("click", function(){
//   deleteTask(task);
// });
