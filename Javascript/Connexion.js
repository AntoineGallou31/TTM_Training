/**
 * 
 */

//CONNEXION UTILISATEUR

const CONNEXION_USER = 'connexionUser';
const URL_CONTROL2 = 'Controleur.php';

(function(){

//document.getElementById("co_form").addEventListener("submit", function(event){event.preventDefault()}, false);
//document.getElementById("co_form").addEventListener("submit", connexionUser, false);

})();

function connexionUser(){
	var email = document.getElementById("co_email").value;
	var pass = document.getElementById("co_password").value;
	
	var url = URL_CONTROL2;
	
	var maRep = new XMLHttpRequest();
	maRep.open("POST", url, true);
	maRep.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	maRep.onreadystatechange = function(){
		if(this.readyState === 4){
			if(this.responseText === "0"){
				document.location.href="main.html";
			} else {
				alert('Mot de passe incorrect');
			}
		}
	}
	maRep.send('action=' + CONNEXION_USER + '&email=' + email + '&pass=' + pass);
}

function Redirection(replySQL){
	var para = document.createElement("P");
	var t = document.createTextNode(replySQL);  
	var element = document.getElementById("div1");
	element.appendChild(para);
}

function alertMessage(msg){

	alert(msg);
}