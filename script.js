function validEmail(str) {
  //your JS code here.
	return str.indexOf('@') !== -1 && str.indexOf('.') !== -1;
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));