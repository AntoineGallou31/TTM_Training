/**
 * 
 */

const URL_CONTROL = 'Controleur.php';
const VERIF_EMAIL = 'checkEmailExist';
const ADD_NEW_USER = 'addNewUser';

(function(){
	
	//document.getElementById("ins_email").addEventListener("input", verificationEmail, false);
	//document.getElementById("ins_pass").addEventListener("input", verificationPassword, false);
	//document.getElementById("ins_confpass").addEventListener("input", verificationConfirmationPassword, false);
	
	document.getElementById("ins_form").addEventListener("submit", function(event){event.preventDefault()}, false);
	//document.getElementById("ins_form").addEventListener("submit", sendNewUser, false);
	
})();

//Boite à outils

function verificationEmail(){
	var ok = false;
	var email = document.getElementById("ins_email").value;
	
	if(email.length > 5){
		ok = true;
		verificationEmailExist(email);
	} else {
		alert("L'adresse email n'est pas valide");
	}
	
	return ok;
}

function verificationEmailExist(email){
	var url = URL_CONTROL;
	var email = document.getElementById("ins_email").value;
	
	var maRep = new XMLHttpRequest();
	maRep.open("POST", url, true);
	maRep.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	
	maRep.onreadystatechange = function(){
		if(this.readyState === 4){
			if(this.responseText === "0"){
			} else {
				alert('Cette adresse email est déjà utilisé');
			}
		}
	}
	maRep.send('action=' + VERIF_EMAIL + '&email=' + email);
}

function verificationPassword(){
	var ok = false;
	var password = document.getElementById("ins_pass").value;
	
	if(password.length > 6){
		ok = true;
	} else {
		alert('Mot de passe trop court!');
	}
	
	return ok;
}

function verificationConfirmationPassword(){
	var ok = false;
	var password = document.getElementById("ins_pass").value;
	var confirmationPassword = document.getElementById("ins_confpass").value;
	
	verificationPassword();
	if(confirmationPassword == password){
		ok = true;
		
	} else {
		alert('Le mot de passe est différent');
	}
	
	return ok;
}

// NOUVELLE INSCRIPTION

function sendNewUser(){
	var ok;
	
	ok = verificationEmail() &&
		 verificationPassword() &&
		 verificationConfirmationPassword();;
	
	if(ok){
		var lastName = document.getElementById("ins_lname").value;
		var firstName = document.getElementById("ins_fname").value;
		var email = document.getElementById("ins_email").value;
		var password = document.getElementById("ins_pass").value;
		
		sendAjaxUser(lastName, firstName, email, password);
	} else {
	alert('Un des champ est invalide');
	}	
}

function sendAjaxUser(lastName, firstName, email, password){
	var url = URL_CONTROL;
	
	var maRep = new XMLHttpRequest();
	maRep.open("POST", url, true);
	maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	maRep.onreadystatechange = function(){
		if (this.readyState === 4) {
			alertMessage(this.responseText);
			RechangeDisplay()
		}
	}
	
	maRep.send('action=' + ADD_NEW_USER + 
				'&lastName=' + lastName + 
				'&firstName=' + firstName + 
				'&email=' + email + 
				'&password=' + password);
} 

function alertMessage(msg){

	alert (msg);
}

function RechangeDisplay(){
	document.getElementById("inscription").style.display = "none";
	document.getElementById("connexion").style.display = "block";
	document.getElementById("btnInscription").style.display = "block";
}