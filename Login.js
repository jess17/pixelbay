// function Loc(class1, index){
//   this.class1 = class1;
//   this.index=index;
// }

function getElByClass(className, index) {
  return document.getElementsByClassName(className)[index];
}

function userError() {
  getElByClass('error', 0).innerHTML = "Please enter your username";
  getElByClass('error', 0).classList.add('show');
  getElByClass('fa-exclamation-circle', 0).style.display = 'block';
}

function passError() {
  getElByClass('error', 1).innerHTML = "Please enter your password";
  getElByClass('error', 1).classList.add('show');
  getElByClass('fa-exclamation-circle', 1).style.display = 'block';
}

checkEmptyUsername = function () {
  let user = getElByClass('username', 0).value;
  let length = user.length;
  if (length != 0) {
    getElByClass('error', 0).classList.remove('show');
    getElByClass('fa-exclamation-circle', 0).style.display = 'none';
  }
}

getElByClass('username', 0).onblur = checkEmptyUsername;

checkEmptyPass = function () {
  let pass = getElByClass('password', 0).value;
  let length = pass.length;
  if (length != 0) {
    getElByClass('error', 1).classList.remove('show');
    getElByClass('fa-exclamation-circle', 1).style.display = 'none';
  }
}

getElByClass('password', 0).onblur = checkEmptyPass;

checkUserPass = function () {
  let user = getElByClass('username', 0).value;
  let userLength = user.length;
  let pass = getElByClass('password', 0).value;
  let passLength = pass.length;
  if(userLength == 0 && passLength == 0){
    userError();
    passError();
  }
  else if (userLength == 0) {
    userError();
  }
  else if (passLength == 0) {
    passError();
  }
  else {
    document.location.href = 'index.html';
  }
}
getElByClass('checkEmpty', 0).onclick = checkUserPass;


// function writeCookie(){
//   cookieVal = encodeURI(document.LoginForm.usernameBox.username.value);
//   document.cookie = 'username='+cookieVal;
//   var now = new Date();
//   now.setMonth(now.getMonth()-1);
//   document.cookie += ';expires=' + now.toUTCString();

//   alert("Welcome back"+ cookieVal);
// }

// document.getElementsByClassName("button")[0].onclick=writeCookie;

















// checkEmptyText = function (class1, i){
//   // let loc = new Loc('username', 0);
//   let text = getElByClass(class1, i).value;
//   let length = text.length;
//   if (length != 0) {
//     getElByClass('error', i).classList.remove('show');
//     getElByClass('fa-exclamation-circle', i).style.display = 'none';
//   }
// }

// function checkEmptyText(class1, i) {
//   let text = getElByClass(class1, i).value;
//   let length = text.length;
//   if (length != 0) {
//     getElByClass('error', i).classList.remove('show');
//     getElByClass('fa-exclamation-circle', i).style.display = 'none';
//   }
// }
// getElByClass('username', 0).addEventListener('blur', checkEmptyText('username', 0));

// getElByClass('username', 0).onblur = checkEmptyText('username', 0);

