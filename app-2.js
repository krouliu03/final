const form = document.getElementById('form1');
const email = document.getElementById('email1');
const password = document.getElementById('password1');
var ml = 0;
var ps = 0;
var psV = 0;
var mlV=0;


form.addEventListener('submit', e => {
	e.preventDefault();
	checkEmail();
	checkPassword();
	validJsonEmail();
	validJsonPassword();
	checkAll();
});


function validJsonEmail(){
	$.get('https://my-json-server.typicode.com/Ablaymillen/json/users', function (users, status) {	
	for (var i = 0; i < users.length; i++) {
		 if(email.value == users[i].email){
			mlV=1;

		 }
		 
		}
		});
}

function validJsonPassword(){
	$.get('https://my-json-server.typicode.com/Ablaymillen/json/users', function (users, status) {
	for (var i = 0; i < users.length; i++) {
		 if(password.value == users[i].password){
			psV=1;
		 } 
		}
		});
}


function checkEmail(){
	const emailValue = email.value.trim();

		if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
		ml = 1;
	}
}

function checkPassword(){
	const passwordValue = password.value.trim();

	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}else if (!isPassword(passwordValue)){
		setErrorFor(password, 'Not a valid password');
	} else {
		setSuccessFor(password);
		ps = 1;
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
	checkEmail();
	checkPassword();
	validJsonPassword();
	validJsonEmail();
	if (ml == 1 && ps == 1 && mlV==1 && psV==1) {
	 $( ".modal-body" ).append('<h4>Welcome abroad '+ email.value + '! </h3>' ) 
	$('#myModal1').modal('toggle');	
		return true;
	}
	else{
	}
}






