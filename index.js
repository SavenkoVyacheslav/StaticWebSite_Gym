/*Counts the characters in the textarea*/
function charcountupdate(str) {
  var text = str.length;
  document.getElementById("charcount").innerHTML = text + ' out of ' + (100 - text) + ' characters remaining';
if (str.length <= 100){}
else {
  {alert("You have typed more than 100 characters Please keep it short:)")}
};
}

/*Changes colour of the text*/
function changeColor(obj) {
  if (obj.style.color == 'red') {
    obj.style.color = 'white';
  } else {
    obj.style.color = 'red';
  }
}
