var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
  } 
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/programming-languages.jpg') {
      myImage.setAttribute ('src','img/prog600.jpg');
    } else {
      myImage.setAttribute ('src','img/programming-languages.jpg');
    }
}