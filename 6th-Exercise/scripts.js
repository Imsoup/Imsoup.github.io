function addToList(){
  var x=document.getElementById('todoText').value;
  if(x!==''){
  $('ul').append('<li>'+ x +'</li>');
  }
};
//get the value from input text, if it is not empty

$('button').click(addToList);
//add input value to <li>


$("#todoList").on("click", "li", (event) => {
  $(event.target).toggleClass('checked')
  }); 
//toggle 'checked' class to <li> element on click on/off and adding line-through







