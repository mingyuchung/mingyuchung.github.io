let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cc-vs-ls.png') {
      myImage.setAttribute('src','images/in-vivo-rp.png');
    } else {
      myImage.setAttribute('src','images/cc-vs-ls.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = "You're wasting your time, " + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = "You're wasting your time, " + storedName;
}

myButton.onclick = function() {
  setUserName();
}