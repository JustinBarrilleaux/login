
var login = [
{
	username: "justin",
	password: "pass"
},
{
	username: "peter",
	password: "1234"
},
{
	username: "john",
	password: "fire"
}
]

function getInfo() {
var username = document.getElementById("username").value
var password = document.getElementById("password").value



login.forEach(function(loginloop){
	if (username == loginloop.username && password == loginloop.password) {
	document.getElementById("demo").innerHTML = "Welcome " + username + " Your logged in"


	
return
	}

else if (username !== loginloop.username && password !== loginloop.password) {
		console.log('wrong password')
	}

}) 

}














