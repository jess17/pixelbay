function getElByClass(className, index) {
  return document.getElementsByClassName(className)[index];
}

function passErr() {
  getElByClass('error', 0).classList.add('show');
  getElByClass('fa-exclamation-circle', 0).style.display = 'block';
}
function confPassErr() {
  getElByClass('error', 1).classList.add('show');
  getElByClass('fa-exclamation-circle', 1).style.display = 'block';
}

checkPass = function () {
  let pass=getElByClass('password2', 0).value;
  let passRegExp = /\d/;
  let length = pass.length;
  if(!(pass.length>=8 && pass.match(passRegExp)) && length>0){
    getElByClass('error', 0).innerHTML = "Make sure the password is at least 8 character with number included";
    passErr();
  }
  else{
    getElByClass('error', 0).classList.remove('show');
    getElByClass('fa-exclamation-circle', 0).style.display='none';
  }
  // \:next char is special and not to be interpreted ,?: Matches the prev char 0/1 time, *:Matches the prev char 0/more time, \w{2,3}: matches 2/3 char, +:the above exp shall occur 1/more times, 
}
getElByClass('password2', 0).onblur=checkPass;


confirmPass = function(){
  let pass = getElByClass('password2',0).value;
  let confPass = getElByClass('password2',1).value;
  let length = confPass.length;
  if(confPass != pass && length>0){
    getElByClass('error', 1).innerHTML = "The password you've just entered doesn't match";
    confPassErr();
  }else{
    getElByClass('error', 1).classList.remove('show');
    getElByClass('fa-exclamation-circle', 1).style.display='none';
  }
}

getElByClass('password2', 1).onblur=confirmPass;

checkEmpty = function () {
  let pass = getElByClass('password2', 0).value;
  let passLength = pass.length;
  let confPass = getElByClass('password2',1).value;
  let confLength = confPass.length;
  if(confLength == 0 && passLength == 0){
    getElByClass('error', 0).innerHTML = "Please fill out this field";
    passErr();
    getElByClass('error', 1).innerHTML = "Please fill out this field";
    confPassErr();
  }
  else if (confLength == 0) {
    getElByClass('error', 1).innerHTML = "Please fill out this field";
    confPassErr();
  }
  else if (passLength == 0) {
    getElByClass('error', 0).innerHTML = "Please fill out this field";
    passError();
  }
  else {
    document.location.href = 'Login.html';
  }
}
getElByClass('forgotButton', 0).onclick = checkEmpty;

