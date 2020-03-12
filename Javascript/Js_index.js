/**
 * 
 */

(function() {
	
	openInscription();
	closeInscription();

})();

function openInscription(){
	btn = document.getElementById("b_co_inscription");
	btn.addEventListener("click",function(){
		changeDisplay()
	},false);
}

function changeDisplay(){
	document.getElementById("inscription").style.display = "block";
	document.getElementById("connexion").style.display = "none";
	document.getElementById("btnInscription").style.display = "none";
}

function closeInscription(){
	ImgBtn = document.getElementById("backImg");
	ImgBtn.addEventListener("click",function(){
		RechangeDisplay()
	},false);
}

function RechangeDisplay(){
	document.getElementById("inscription").style.display = "none";
	document.getElementById("connexion").style.display = "block";
	document.getElementById("btnInscription").style.display = "block";
}