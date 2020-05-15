function getElByClass(className, index) {
  return document.getElementsByClassName(className)[index];
}

function userErr() {
  getElByClass('error', 0).classList.add('show');
  getElByClass('fa-exclamation-circle', 0).style.display = 'block';
}
function emailErr() {
  getElByClass('error', 1).classList.add('show');
  getElByClass('fa-exclamation-circle', 1).style.display = 'block';
}
function passErr() {
  getElByClass('error', 2).classList.add('show');
  getElByClass('fa-exclamation-circle', 2).style.display = 'block';
}
function confPassErr() {
  getElByClass('error', 3).classList.add('show');
  getElByClass('fa-exclamation-circle', 3).style.display = 'block';
}

nonEmptyUser = function () {
  let user = getElByClass('username', 0).value;
  let userLength = user.length;
  if (userLength!=0){
    getElByClass('error', 0).classList.remove('show');
    getElByClass('fa-exclamation-circle', 0).style.display = 'none';
  }
}

getElByClass('username', 0).onblur = nonEmptyUser;

checkEmail = function () {
  let emailVal = getElByClass('email', 0).value;
  let emailRegEXp = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;
  // \:next char is special and not to be interpreted ,?: Matches the prev char 0/1 time, *:Matches the prev char 0/more time, \w{2,3}: matches 2/3 char, +:the above exp shall occur 1/more times, 
  let length = emailVal.length;
  if (!emailVal.match(emailRegEXp) && length > 0) {
    getElByClass('error', 1).innerHTML = 'Email is invalid';
    emailErr();
  } else {
    getElByClass('error', 1).classList.remove('show');
    getElByClass('fa-exclamation-circle', 1).style.display = 'none';
  }
}

getElByClass('email', 0).onblur = checkEmail;

confirmPass = function () {
  let pass = getElByClass('password', 0).value;
  let confPass = getElByClass('confPassword', 0).value;
  let length = confPass.length;
  if (confPass != pass && length > 0) {
    getElByClass('error', 3).innerHTML = "The password you've just entered doesn't match";
    confPassErr();
  } else {
    getElByClass('error', 3).classList.remove('show');
    getElByClass('fa-exclamation-circle', 3).style.display = 'none';
  }
}

getElByClass('confPassword', 0).onblur = confirmPass;

checkPass = function () {
  let pass = getElByClass('password', 0).value;
  let passRegExp = /\d/;
  let length = pass.length;
  if (!(length >= 8 && pass.match(passRegExp)) && length > 0) {
    getElByClass('error', 2).innerHTML = "Make sure the password is at least 8 character with number included";
    passErr();
  }
  else {
    getElByClass('error', 2).classList.remove('show');
    getElByClass('fa-exclamation-circle', 2).style.display = 'none';
  }
}

getElByClass('password', 0).onblur = checkPass;

function checkEmpty() {
  let user = getElByClass('username', 0).value;
  let userLength = user.length;
  let email = getElByClass('email', 0).value;
  let emailLength = email.length;
  let emailRegEXp = /\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;
  let pass = getElByClass('password', 0).value;
  let passLength = pass.length;
  let passRegExp = /\d/;
  let confPass = getElByClass('confPassword', 0).value;
  let confPassLength = confPass.length;
  let arr = new Array(4);
  for (i = 0; i < 4; i++) {
    if (userLength == 0 && !(arr.includes(1))) {
      getElByClass('error', 0).innerHTML = "Please fill out this field";
      userErr();
      arr[0] = 1;
      // alert(arr);
    }
    else if (emailLength == 0 && !(arr.includes(2))) {
      getElByClass('error', 1).innerHTML = "Please fill out this field";
      emailErr();
      arr[1] = 2;
    }
    else if (passLength == 0&& !(arr.includes(3))) {
      getElByClass('error', 2).innerHTML = "Please fill out this field";
      passErr();
      arr[2]=3;
    }
    else if (confPassLength == 0 && !(arr.includes(4))) {
      getElByClass('error', 3).innerHTML = "Please fill out this field";
      confPassErr();
      arr[3]=4;
    }
    else if (userLength!=0 && emailLength != 0 && passLength!=0 && confPassLength!=0 && (passLength >= 8 && pass.match(passRegExp)) && (confPass==pass) && email.match(emailRegEXp)) {
      document.location.href = 'SignUpConfirm.html';
    }
  }
}

getElByClass('checkEmpty', 0).onclick = checkEmpty;







// checkAll = function () {
//   if(getElByClass('error', 0).contains('show')){
//      alert("123");
//   }else{
//     alert("haha");
//   }
// }

// getElByClass('button', 0).onclick=checkAll;