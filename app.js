const form = document.getElementById('register-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
var x = 0;
var y = 0;
var z = 0;
var k = 0;

form.addEventListener('submit', e => {
	e.preventDefault();
	checkIfExists();
	checkName();
	checkEmail();
	checkPasswords();
	checkAll();
});
function checkIfExists(){
	$.get('https://my-json-server.typicode.com/Ablaymillen/json/users', function (users, status) {
		for (var i = 0; i < users.length; i++) {
		if(email.value == users[i].email){
			setErrorFor(email, 'User already exists!');
		k=0;
		}
		else {
			k=1;
		}
		};
		});
}



function checkName(){
	const usernameValue = username.value.trim();

	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
		x = 1;
	}
}

function checkEmail(){
	const emailValue = email.value.trim();

		if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} 
	else {
	setSuccessFor(email);
		y = 1;	
	}
	

}



function checkPasswords(){
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if(passwordValue === '' || password2Value === '') {
		setErrorFor(password, 'Password cannot be blank');
		setErrorFor(password2, 'Password2 cannot be blank');
	}else if (!isPassword(passwordValue)){
		setErrorFor(password, 'Not a valid password');
	}else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else {
		setSuccessFor(password);
		setSuccessFor(password2);
		z = 1;
	}
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
	return false;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
	return true;
}
	
function isEmail(email) {
	return /^[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*@(mail.ru|yahoo.com|gmail.com|yandex.ru)$/.test(email);
}

function isPassword(password){
	return /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/.test(password);
}

function checkAll(){
	checkName();
	checkEmail();
	checkPasswords();
	checkIfExists();
	if (x == 1 && y == 1 && z == 1 && k ==1) {
	$('#myModal').modal('toggle');	
	return true;
	}
	else{
		return false; 
	}
}





$("#form").submit(function(event){
$.get('https://my-json-server.typicode.com/Ablaymillen/json/users', function (users, status) {

var ii = 1 + length.users;


function ajax(options) {
  return new Promise(function (resolve, reject) {
    $.ajax(options).done(resolve).fail(reject);
  });
}


ajax({
  url: 'https://my-json-server.typicode.com/Ablaymillen/json/users',
  type: 'post',
  contentType: 'application/json; charset=utf-8',
  data: JSON.stringify({
			id: ii,
            name: username.value,
            email: email.value,
            password: password.value
        })
}).then(
  function fulfillHandler(data) {
    console.log("success");
	
  }).catch(function errorHandler(error) {
   console.log("error")
     });
   });		
});







