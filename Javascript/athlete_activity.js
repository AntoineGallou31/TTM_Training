/**
 * 
 */

const URL_CONTROL = 'Control_Calendar.php';
const ADD_ACTIVITY = 'addNewActivity';
const GET_ACTIVITY = 'getShowingActivity';
const GET_ACTIVITIES = 'getAllActivities';
const USERMAIL = document.getElementById("user_mail").value;

(function(){
	ShowAllActivities(USERMAIL);
	document.getElementById("add_activity_form").addEventListener("submit", function(event){event.preventDefault()}, false);
	document.getElementById("add_activity_form").addEventListener("submit", sendNewActivity, false);
	
	document.getElementById("add_activity_form2").addEventListener("submit", function(event){event.preventDefault()}, false);
	document.getElementById("input_submit_modify_activity").addEventListener("click", ModifyActivity, false);
	
	addDays();
})();


function sendNewActivity(){
	
	if((document.getElementById('EndUntilWeek')).checked){
		var radio_inputEndUntilWeek = (document.getElementById('inputEndUntilWeek')).value;
 }
	if((document.getElementById('EndAfterTime')).checked){
		var radio_inputEndAfterTime = (document.getElementById('inputEndAfterTime')).value;
 }
	
	// Récupération de la valeur du input radio button pour le type d'activité
	for (var i = 1; i < 3; i++){
		if((document.getElementById('activityType'+i)).checked){
			var radio_activityType = (document.getElementById('activityType'+i)).value;
	 }
}
	
	// Récupération de la valeur du input radio button pour le type de sport
	for (var i = 1; i <= 5; i++){
		if((document.getElementById('activitySport'+i)).checked){
			var radio_activitySport = (document.getElementById('activitySport'+i)).value;
	 }
}
	
		var activityTitle = document.getElementById("activityTitle").value;
		
		var activityType = radio_activityType;
		var activitySport = radio_activitySport;
		var activityDate = document.getElementById("activityDate").value;

		var activityDuration = document.getElementById("activityDuration").value;
		var activityDistance0 = document.getElementById("activityDistance").value;
		var activityDistance = virgule(activityDistance0);
		
		var activityElevation0 = document.getElementById("activityElevation").value;
		var activityElevation = virgule(activityElevation0);
		var activityDescription = document.getElementById("activityDescription").value;
		var custMail = document.getElementById("custMail").value;
		
		if (activityTitle !=="" || activityDate !== "") {
		
			sendAjaxActivity(custMail,
				activityTitle,
				activityType,
				activitySport, 
				activityDate, 
				activityDuration, 
				activityDistance, 
				activityElevation, 
				activityDescription);
		
		if (radio_inputEndUntilWeek !== undefined && radio_inputEndUntilWeek !== null) {
			for (var i = 1; i < radio_inputEndUntilWeek; i++) {
				
				activityDate = new Date(activityDate);
				activityDate = activityDate.addDays(7);
				activityDate = formatDate(activityDate);
				
				sendAjaxActivity(custMail,
						activityTitle,
						activityType,
						activitySport, 
						activityDate, 
						activityDuration, 
						activityDistance, 
						activityElevation, 
						activityDescription);
			}
		}
		
		if (radio_inputEndAfterTime !== undefined && radio_inputEndAfterTime !== null) {
			
			var compareDateRadio = new Date(radio_inputEndAfterTime);
			compareDateRadio = compareDateRadio.addDays(-7);
			do {		
					activityDate = new Date(activityDate);
					activityDate = activityDate.addDays(7);
					activityDate = formatDate(activityDate);
					
					var activityDateObj = new Date(activityDate);
					
					sendAjaxActivity(custMail,
							activityTitle,
							activityType,
							activitySport, 
							activityDate, 
							activityDuration, 
							activityDistance, 
							activityElevation, 
							activityDescription);
					
			} while (activityDateObj <= compareDateRadio);
		} else {
			var message = "Le titre ou la date de l'activité n'est pas défini"
			errorMessage(message);}
	 }
		
		CloseWindowsAfterOK();
		Loader();
		ShowHideLoader(2);
		Refresh();
		RefreshRecurrence();			
		SuccessAddActivity();
	} 

function sendAjaxActivity(custMail, activityTitle, activityType, activitySport, activityDate, activityDuration, activityDistance, activityElevation, activityDescription){
	var url = URL_CONTROL;
	
	var maRep = new XMLHttpRequest();
	maRep.open("POST", url, true);
	maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	maRep.onreadystatechange = function(){
		if (this.readyState === 4) {

		}
	}
	
	maRep.send('action=' + ADD_ACTIVITY + 
				'&custMail=' + custMail +
				'&activityTitle=' + activityTitle + 
				'&activityType=' + activityType + 
				'&activitySport=' + activitySport + 
				'&activityDate=' + activityDate + 
				'&activityDuration=' + activityDuration + 
				'&activityDistance=' + activityDistance + 
				'&activityElevation=' + activityElevation + 
				'&activityDescription=' + activityDescription);
}

//Outils | Affichage en alerte d'un message

function RemiseZero(){	
	
	var custMail = document.getElementById("custMail").value;
	
	ClearCalendar();
	Add_Activity(custMail);
	Add_Recap(custMail);
}

function Loader() {
			
	var activeopacity = document.getElementById("BackgroundOpacity");
	
	activeopacity.style.backgroundColor = "rgba(0,0,0,0.8)";
	activeopacity.style.display = "block";
	
	var activeLoader = document.getElementById("loader");
	
	activeLoader.style.display = "block";
}

function SuccessAddActivity(){

	Swal.fire({
		title: 'Ajouté !',
		html:"L'activité a bien été ajouté ",
		type:'success',
	    });
}

function SuccessModifyActivity(){

	Swal.fire({
		title: 'Modifié !',
		html:"L'activité a bien été modifié ",
		type:'success',
	    })
}
	
function virgule(texte) {
	 while(texte.indexOf(',')>-1){
		texte=texte.replace(",",".");
			}
		 
		 return texte
		}

function errorMessage(message) {
	Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: "Une erreur c'est produite",
		  footer: message,
		})
}

//Fonctions | Fonction qui ferme la fenêtre d'ajout d'activité après confirmation !

function CloseWindowsAfterOK(){
	
	clearModal();
	
	document.getElementById('id01').style.display='none';
}

//Affichage de toutes les activités	

/////////////////////////////////////////

function ShowAllActivities(USERMAIL){
	GetAllActivities(USERMAIL);
}
	
	function GetAllActivities(athleteEmail){
	
		var url = URL_CONTROL;
		
		var maRep = new XMLHttpRequest();
		maRep.open("POST", url, true);
		maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		maRep.onreadystatechange = function(){
			if (this.readyState === 4) {
				get_all_activitiesJSON(this.responseText);
			}
		}
		
		maRep.send('action=' + GET_ACTIVITIES +
					'&user_mail=' + athleteEmail);
	
}
	
function get_all_activitiesJSON(reply) {
		
		var repJSON = JSON.parse(reply);
		var nbActivities = repJSON.length;
		
		for (var i = 0; i < nbActivities; i++) {
			separateSport(repJSON[i]);
		}
		
	}
	
	function separateSport(infos) {
		
		var sport = infos["training_categorie"];
		
		switch (sport) {
		case "Natation":
			
			var id = infos["training_id"];
			var title = infos["training_titre"];
			var type = infos["training_type"];
			var categorie = infos["training_categorie"];
			var date = infos["training_date"];
			var duree = infos["training_duree"];
			var distance = infos["training_distance"];
			var denivele = infos["training_denivele"];
			var description = infos["training_description"];
			var sport = "swimming";
			
			adTextContent(id,title,type,categorie,date,duree,distance,denivele,description,sport,infos);

			break;

		case "Cyclisme":
			
			var id = infos["training_id"];
			var title = infos["training_titre"];
			var type = infos["training_type"];
			var categorie = infos["training_categorie"];
			var date = infos["training_date"];
			var duree = infos["training_duree"];
			var distance = infos["training_distance"];
			var denivele = infos["training_denivele"];
			var description = infos["training_description"];
			var sport = "cycling";
			
			adTextContent(id,title,type,categorie,date,duree,distance,denivele,description,sport,infos);
			
			break;
			
		case "Course":
			
			var id = infos["training_id"];
			var title = infos["training_titre"];
			var type = infos["training_type"];
			var categorie = infos["training_categorie"];
			var date = infos["training_date"];
			var duree = infos["training_duree"];
			var distance = infos["training_distance"];
			var denivele = infos["training_denivele"];
			var description = infos["training_description"];
			var sport = "running";
			
			adTextContent(id,title,type,categorie,date,duree,distance,denivele,description,sport,infos);
			
			break;
			
		case "Musculation":
			
			var id = infos["training_id"];
			var title = infos["training_titre"];
			var type = infos["training_type"];
			var categorie = infos["training_categorie"];
			var date = infos["training_date"];
			var duree = infos["training_duree"];
			var distance = infos["training_distance"];
			var denivele = infos["training_denivele"];
			var description = infos["training_description"];
			var sport = "fitness";
			
			adTextContent(id,title,type,categorie,date,duree,distance,denivele,description,sport,infos);
			
			break;
			
		case "Autres":
			
			var id = infos["training_id"];
			var title = infos["training_titre"];
			var type = infos["training_type"];
			var categorie = infos["training_categorie"];
			var date = infos["training_date"];
			var duree = infos["training_duree"];
			var distance = infos["training_distance"];
			var denivele = infos["training_denivele"];
			var description = infos["training_description"];
			var sport = "others";
			
			adTextContent(id,title,type,categorie,date,duree,distance,denivele,description,sport,infos);
			
			break;
		}
		
		
		var comp = "Competition";
		var type = infos["training_type"];
		
		if (comp == type) {
			document.getElementById(id+"activity").style.backgroundColor= "#f45c2f";
		}
	}

	function adTextContent(id,title,type,categorie,date,duree,distance,denivele,description,sport,infos) {
		
		var y = document.createElement("div");
		var uptop = document.getElementById(date);
		
		uptop.appendChild(y);
		uptop.insertBefore(y ,uptop.childNodes[1]);
		
		y.setAttribute("class", "calendar-item-"+sport);
		y.setAttribute("id", id+"activity");
		y.setAttribute("draggable", "true");
		y.setAttribute("ondragstart", "drag(event)");
		y.setAttribute("data-id", id);
		y.setAttribute("data-title", title);
		y.setAttribute("data-type", type);
		y.setAttribute("data-categorie", categorie);
		y.setAttribute("data-date", date);
		y.setAttribute("data-duree", duree);
		y.setAttribute("data-distance", distance);
		y.setAttribute("data-denivele", denivele);
		y.setAttribute("data-description", description);
		
		y.addEventListener("click", function(){
			showActivity(id);
		}, false);
		
		var w = document.createElement("div");
		y.appendChild(w);
		w.setAttribute("class", "item-content-"+sport);
		
		var icon = document.createElement("span");
		w.appendChild(icon);
		icon.setAttribute("class", "item-icon-"+sport);
		
		var span = document.createElement("span");
		w.appendChild(span);
		var title = document.createTextNode(infos["training_titre"]);
		span.appendChild(title);
		span.setAttribute("class", "item-title");
		
		var span3 = document.createElement("span");
		w.appendChild(span3);
		var duration = document.createTextNode(infos["training_duree"]);
		span3.appendChild(duration);
		span3.setAttribute("class", "item-duree");
		
		if (infos["training_distance"] != 0) {
			var span4 = document.createElement("span");
			w.appendChild(span4);
			var distance = document.createTextNode(infos["training_distance"] + " km");
			span4.appendChild(distance);
			span4.setAttribute("class", "item-distance");
		}
		
	}
						
	function showActivity(id){
		
		getShowingActivity(id);
	}		
	
	function getShowingActivity(id){
		
		var user_mail = document.getElementById("custMail").value;
		
		sendAjaxShowingActivity(id, user_mail);
	}
	
	function sendAjaxShowingActivity(id, user_mail){
		
		var url = URL_CONTROL;
		
		var maRep = new XMLHttpRequest();
		maRep.open("POST", url, false);
		maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		maRep.onreadystatechange = function(){
			if (this.readyState === 4) {
				getInfosActivity(this.responseText);
			}
		}
		
		maRep.send('action=' + GET_ACTIVITY +
				'&user_mail=' + user_mail +
					'&activityId=' + id);
	}
	
	function getInfosActivity(reply) {
		
		var repJSON = JSON.parse(reply);
		var nbActivities = repJSON.length;
		
			ShowOnClickActivity(repJSON[0]);
	}
	
	function ShowOnClickActivity(repJSON){
		
		document.getElementById('id02').style.display='block';
		
		var id = repJSON["training_id"];
		var title = repJSON["training_titre"];
		var type = repJSON["training_type"];
		var categorie = repJSON["training_categorie"];
		var date = repJSON["training_date"];
		var duree = repJSON["training_duree"];
		var distance = repJSON["training_distance"];
		var denivele = repJSON["training_denivele"];
		var description = repJSON["training_description"];
		
			
			//Titre
			
			var activityTitle = document.getElementById("activityTitle1");

			activityTitle.setAttribute("value", title);
			
			// Type 
			
			var activityType1 = document.getElementById("activityType01");

			var entrainement = "Entrainement";
			
			if (type === entrainement) {
			activityType1.checked = true
			} else {activityType1.checked = false}
			
			var activityType2 = document.getElementById("activityType02");

			var competition = "Competition";
			
			if (type === competition) {
				activityType2.checked = true
			} else {activityType2.checked = false}
			
			var activityType3 = document.getElementById("activityType03");

			var test = "Test";
			
			if (type === test) {
				activityType3.checked = true
			} else {activityType3.checked = false}
			
			// Catégories
			
			var activitySport1 = document.getElementById("activitySport01");

			var natation = "Natation";
			
			if (categorie === natation) {
				activitySport1.checked = true;
			} else {activitySport1.checked = false}
			
			var activitySport2 = document.getElementById("activitySport02");

			var cyclisme = "Cyclisme";
			
			if (categorie === cyclisme) {
				activitySport2.checked = true;
			}  else {activitySport2.checked = false};
			
			var activitySport3 = document.getElementById("activitySport03");

			var course = "Course";
			
			if (categorie === course) {
				activitySport3.checked = true
			}  else {activitySport3.checked = false}
			
			
			var activitySport4 = document.getElementById("activitySport04");

			var Musculation = "Musculation";
			
			if (categorie === Musculation) {
				activitySport4.checked = true
			}  else {activitySport4.checked = false}
			
		
			var activitySport5 = document.getElementById("activitySport05");

			var Autres = "Autres";
			
			if (categorie === Autres) {
				activitySport5.checked = true
			}  else {activitySport5.checked = false}
			
			// Date
			
			var activityDate = document.getElementById("activityDate0");

			activityDate.setAttribute("value", date);
			
			//Durée
			
			var activityDuration = document.getElementById("activityDuration0");

			activityDuration.setAttribute("value", duree);
			
			//Distance
			
			var activityDistance = document.getElementById("activityDistance0");

			activityDistance.setAttribute("value", distance);
			
			//Denivelé
			
			var activityDevinele = document.getElementById("activityElevation0");

			activityDevinele.setAttribute("value", denivele);
			
			//Description
			
			var activityDescription = document.getElementById("activityDescription0");

			var r = document.createTextNode(description);
			activityDescription.appendChild(r);
			
			//ID
			
			var activityID = document.getElementById("id_activity");

			activityID.setAttribute("value", id);
			
	}
	

	function ajustTableHeight(year){

		var i;
		
		var NbWeeks = NbweeksbyYear(year);
		
		for (i = 1; i <= NbWeeks; i++) {
			
			var elmnt = document.getElementById(year+"_week"+i);
			 
			var txt = elmnt.offsetHeight;
			
			document.getElementById(year+'_Cell_Recapweek_'+i).style.height= txt+'px';
			
			document.getElementById(year+'_intNbWeek'+i).style.height= txt+'px';
		}
	}
	
		
	function deleteActivities() {
		
		let getElementClass = ["calendar-item-swimming", "calendar-item-running", "calendar-item-cycling", "calendar-item-fitness", "calendar-item-others"];
		
		for (var y = 0; y < getElementClass.length; y++) {
				
		var x = document.getElementsByClassName(getElementClass[y]);
		 
		  var i;
		  
		  for (i = 0; i < x.length; i++) {
		    x[i].remove();

		  }
		}
	}
	
	function addDays(){
		Date.prototype.addDays = function(days) {
		    var date = new Date(this.valueOf());
		    date.setDate(date.getDate() + days);
		    return date;
		}
	}
	
	function formatDate(date) {
	    var d = new Date(date),
	        month = '' + (d.getMonth() + 1),
	        day = '' + d.getDate(),
	        year = d.getFullYear();

	    if (month.length < 2) 
	        month = '0' + month;
	    if (day.length < 2) 
	        day = '0' + day;

	    return [year, month, day].join('-');
	}
	
	function RefreshRecurrence() {
		document.getElementById('IdmodalRepetition').style.display='none';
		document.getElementById('BtnRecurrence1').style.backgroundColor ="lightgray";
		document.getElementById('EndAfterTime').checked = false;
		document.getElementById('EndUntilWeek').checked = false;
	}