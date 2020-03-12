/**
 * 
 * 
 * 
 * 
 */
const GET_TRAINERINFOS = "getTrainerInfos";
const GET_ATHLETES = "getAthletes";
const SEND_NEW_DATE = "SendNewDate";

var Bisclipboard = [];
var clipboard = [];
var eMousetarget;

(function(){
	afficheInfosHeader();
})();

		// #1 Affiche le nom, prénom dans le header / Renseigne l'id de
		// l'athlete

function afficheInfosHeader() {
	GetUserInfosBDD();
}

function GetUserInfosBDD(){
	
	const TrainerMail = document.getElementById("custMail").value;

	var url = URL_CONTROL;
	
	var maRep = new XMLHttpRequest();
	maRep.open("POST", url, false);
	maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	maRep.onreadystatechange = function(){
		if (this.readyState === 4) {
			infos_usersJSON(this.responseText);
		}
	}
	
	maRep.send('action=' + GET_TRAINERINFOS +
				'&user_mail=' + TrainerMail);
}

function infos_usersJSON(reply) {
	
	var repJSON = JSON.parse(reply);
	
		extraireInfosUser(repJSON[0]);
}

function extraireInfosUser(infos) {
	
	var AthleteNom = infos["tr_nom"];
	var AthleteNomPrenom = infos["tr_prenom"];
	var AthleteNomID = infos["tr_id"];
	
	affiche_infos(AthleteNom, AthleteNomPrenom, AthleteNomID);
}

function affiche_infos(trainerNom, trainerPrenom, trainerID) {
	
	var idnom = document.getElementById("user_nom");
	var nom = document.createTextNode(trainerNom);
	idnom.appendChild(nom);
	
	var idprenom = document.getElementById("user_prenom");
	var prenom = document.createTextNode(trainerPrenom);
	idprenom.appendChild(prenom);

	var idid = document.getElementById("user_id");
	idid.setAttribute("value", trainerID);
	
	idid.onchange();

}
		// #1

function afficheAthleteSidebar() {
	getAllAthletes();
}

function getAllAthletes() {
	
var url = URL_CONTROL;
var id = document.getElementById("user_id").value;
	
	var maRep = new XMLHttpRequest();
	maRep.open("POST", url, false);
	maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	maRep.onreadystatechange = function(){
		if (this.readyState === 4) {
			infos_athleteJSON(this.responseText);
		}
	}
	
	maRep.send('action=' + GET_ATHLETES +
				'&user_id=' + id);
	console.log(GET_ATHLETES, id)
}

function infos_athleteJSON(reply) {
	
	var repJSON = JSON.parse(reply);
	var nbActivities = repJSON.length;
	
	for (var i = 0; i < nbActivities; i++) {
		extraireAthletes(repJSON[i]);
	}
	
}

function extraireAthletes(infos) {
	
	var athleteNom = infos["athl_nom"];
	var athletePrenom = infos["athl_prenom"];
	var athleteId = infos["athl_id"];
	var athleteEmail = infos["athl_email"];
	
	affiche_athletes(athleteNom, athletePrenom, athleteId, athleteEmail);
}

function affiche_athletes(athleteNom, athletePrenom, athleteId, athleteEmail) {
	
	var divAthlete = document.createElement("div");
	var uptop = document.getElementById("athleteListContainer");
	
	uptop.appendChild(divAthlete);
	
	divAthlete.setAttribute("class", "container_athlete");
	divAthlete.setAttribute("id", "athlete"+athleteId);
	
	divAthlete.addEventListener("click", function(){
		showCalendarAthlete(athleteEmail,athleteId);
	});
	
	var spanNom = document.createElement("span");
	divAthlete.appendChild(spanNom);
	
	spanNom.setAttribute("class", "athlete_prenom");
	var nodeNom = document.createTextNode(athletePrenom);
	spanNom.appendChild(nodeNom);
	
	var spanPrenom = document.createElement("span");
	divAthlete.appendChild(spanPrenom);
	
	spanPrenom.setAttribute("class", "athlete_nom");
	var nodePrenom = document.createTextNode(athleteNom);
	spanPrenom.appendChild(nodePrenom);
}

function showCalendarAthlete(athleteEmail,athleteId){
	
	var activeLoader = document.getElementById("loader");
	
	USERMAIL = athleteEmail;
	changeColorContainerAthleteOnClick(athleteId);
	
	activeLoader.style.display = "block";
	
	DeleteBlur();
	ShowHideLoader(1);
	Refresh(USERMAIL);
	
}

function changeColorContainerAthleteOnClick(athleteId) {

	let x = document.getElementsByClassName("container_athlete");
	let i;

	  for ( i = 0; i < x.length; i++) {
		var y = x[i];
		y.style.backgroundColor = "#282828";
	  }

	document.getElementById("athlete"+athleteId).style.backgroundColor = "grey";
}

function Refresh(athleteEmail){
	ClearCalendar();
	ShowAllActivities(athleteEmail);
	Add_Structure_TableRecap();
	AddRecapAllYear(ShowYearCalendar);
}

function AddRecapAllYear(CurrentYear) {
	
	switch (CurrentYear) {
	case 2019:
		AddRecap(2019,52,28,12,31,2018);
		break;
	case 2020:
		AddRecap(2020,53,29,12,30,2019);
		break;
	case 2021:
		AddRecap(2021,52,28,1,4,2021);
		break;
	case 2022:
		AddRecap(2022,52,28,01,03,2022);
		break;
	case 2023:
		AddRecap(2023,52,28,01,02,2023);
		break;
	case 2024:
		AddRecap(2024,52,29,01,01,2024);
		break;
	case 2025:
		AddRecap(2025,52,28,12,30,2024);
		break;
	case 2026:
		AddRecap(2026,53,28,12,29,2025);
		break;
	case 2027:
		AddRecap(2027,52,28,01,04,2027);
		break;
	case 2028:
		AddRecap(2028,52,29,01,03,2028);
		break;
	case 2029:
		AddRecap(2029,52,28,01,01,2029);
		break;
	case 2030:
		AddRecap(2030,52,28,12,31,2029);
		break;
	}

}
		// #3

function ShowHideLoader(x) {
	myVar = setTimeout(hideLoader, x*1000);
}

function DeleteBlur() {
	
	var getWindows = document.getElementById("MainCalendar");
	
	getWindows.style.filter = "blur(0px)";
	
	var activeopacity = document.getElementById("BackgroundOpacity");
	
	activeopacity.style.backgroundColor = "rgba(0,0,0,0.8)";
	activeopacity.style.display = "block";

}

function hideLoader(){
	
	var activeLoader = document.getElementById("BackgroundOpacity");
	
	activeLoader.style.display = "none";
	
	var activeLoader = document.getElementById("loader");
	
	activeLoader.style.display = "none";
}

function ClearCalendar() {
	clearActivity();
	clearModal();
	clearRecap();
}

function clearActivity() {
	
	var x = document.getElementsByClassName("calendar-item-fitness");
	
	  for (var i = 0; i < x.length; i+1) {
		  var y = x[i];
		    y.remove();
	  }
	
	  var x = document.getElementsByClassName("calendar-item-running");
		
	  for (var i = 0; i < x.length; i+1) {
		  var y = x[i];
		    y.remove();
	  }
	  
	  var x = document.getElementsByClassName("calendar-item-cycling");
		
	  for (var i = 0; i < x.length; i+1) {
		  var y = x[i];
		    y.remove();
	  }
	  
	  var x = document.getElementsByClassName("calendar-item-others");
		
	  for (var i = 0; i < x.length; i+1) {
		  var y = x[i];
		    y.remove();
	  }
	  
	  var x = document.getElementsByClassName("calendar-item-swimming");
		
	  for (var i = 0; i < x.length; i+1) {
		  var y = x[i];
		    y.remove();
	  }
}

function clearModal() {
	
	// Titre
	
	var activityTitle = document.getElementById("activityTitle");

	activityTitle.value = '';
	// Type
	
	var activityType1 = document.getElementById("activityType1");	
	activityType1.checked = false;

	var activityType2 = document.getElementById("activityType2");
	activityType2.checked = false;
	
	var activityType3 = document.getElementById("activityType3");
	activityType3.checked = false;
	
	// Catégories
	
	for (var i = 1; i < 6; i++) {
		var activitySport = document.getElementById("activitySport"+i);
		activitySport.checked = false;
	}
	// Date
	
	var activityDate = document.getElementById("activityDate");

	activityDate.value = '';
	
	// Durée
	
	var activityDuration = document.getElementById("activityDuration");

	activityDuration.value = '';
	
	// Distance
	
	var activityDistance = document.getElementById("activityDistance");

	activityDistance.value = '';
	
	// Denivelé
	
	var activityDevinele = document.getElementById("activityElevation");

	activityDevinele.value = '';
	
	// Description
	
	var activityDescription = document.getElementById("activityDescription");

	activityDescription.value = '';

}

function clearRecap() {
	var x = document.getElementsByClassName("calendar-recap-content");
	
	for (var i = 0; i < x.length; i+1) {
	    var y = x[i];
	    y.remove();
	  }
}

function Add_Structure_TableRecap(){
	
	let arrayNbweeks = [52, 53, 52, 52, 52, 52,52, 53, 52, 52, 52,52];
	var i;
	
	for (i = 2019, j = 0; i <= 2030, j <=arrayNbweeks.length; i++, j++) {
		Add_Structure_TableOneWeek(i, arrayNbweeks[j]);
	}
}


function Add_Structure_TableOneWeek(year, Nbweeks){
	
	var i;
	
	for (i = 1; i <= Nbweeks; i++){
		
		var y = document.createElement("div");
		document.getElementById(year+ "_Cell_Recapweek_" + i).appendChild(y);
		y.setAttribute("class", "calendar-recap-content");
		
		var x = document.createElement("div");
		y.appendChild(x);
		x.setAttribute("class", "item-recap-totaltime");
		x.setAttribute("id", "item_recap_totaltime"+i);
		
		var span = document.createElement("span");
		x.appendChild(span);
		var title = document.createTextNode("Volume hebdomadaire");
		span.appendChild(title);
		span.setAttribute("class", "span-recap-totaltime");
		
		var span = document.createElement("span");
		x.appendChild(span);
		var title = document.createTextNode('00:00:00');
		span.appendChild(title);
		span.setAttribute("id", year+"_span_tt_time_"+i);
		span.setAttribute("class", "span-tt-time");
		
		var s = document.createElement("div");
		y.appendChild(s);
		s.setAttribute("class", "item-recap-swim");
		s.setAttribute("id", "item_recap_swim"+i);
		
		var span = document.createElement("span");
		s.appendChild(span);
		var title = document.createTextNode("Natation");
		span.appendChild(title);
		span.setAttribute("class", "span-title-swim");
		
		var span = document.createElement("span");
		s.appendChild(span);
		var title = document.createTextNode('00:00:00');
		span.appendChild(title);
		span.setAttribute("id", year+"_span_swim_time_"+i);
		span.setAttribute("class", "span-swim-time");
		
		var span = document.createElement("span");
		s.appendChild(span);
		var title = document.createTextNode('0 km');
		span.appendChild(title);
		span.setAttribute("id", year+"_span_swim_km_"+i);
		span.setAttribute("class", "span-swim-km");

		
		var c = document.createElement("div");
		y.appendChild(c);
		c.setAttribute("class", "item-recap-bike");
		c.setAttribute("id", "item_recap_bike"+i);
		
		var span = document.createElement("span");
		c.appendChild(span);
		var title = document.createTextNode("Cyclisme");
		span.appendChild(title);
		span.setAttribute("class", "span-title-bike");
		
		var span = document.createElement("span");
		c.appendChild(span);
		var title = document.createTextNode('00:00:00');
		span.appendChild(title);
		span.setAttribute("id", year+"_span_bike_time_"+i);
		span.setAttribute("class", "span-bike-time");

		
		var span = document.createElement("span");
		c.appendChild(span);
		var title = document.createTextNode('0 km');
		span.appendChild(title);
		span.setAttribute("id", year+"_span_bike_km_"+i);
		span.setAttribute("class", "span-bike-km");

		
		var r = document.createElement("div");
		y.appendChild(r);
		r.setAttribute("class", "item-recap-run");
		r.setAttribute("id", "item_recap_run"+i);
		
		var span = document.createElement("span");
		r.appendChild(span);
		var title = document.createTextNode("Course");
		span.appendChild(title);
		span.setAttribute("class", "span-title-run");
		
		var span = document.createElement("span");
		r.appendChild(span);
		var title = document.createTextNode('00:00:00');
		span.appendChild(title);
		span.setAttribute("id", year+"_span_run_time_"+i);
		span.setAttribute("class", "span-run-time");

		
		var span = document.createElement("span");
		r.appendChild(span);
		var title = document.createTextNode('0 km');
		span.appendChild(title);
		span.setAttribute("id", year+"_span_run_km_"+i);
		span.setAttribute("class", "span-run-km");

		}	
}

// Drap and Drop
var datedrag;

function allowDrop(ev) {
	  ev.preventDefault();
	  datedrag = ev.currentTarget.dataset.date;
	}

	function drag(ev) {
	  ev.dataTransfer.setData("text", ev.target.id);
	}
	
	function drop(ev) {
	  ev.preventDefault();
	  var data = ev.dataTransfer.getData("text");
	  
	  // Modification date dans la BDD
	  
	  var activityId = parseInt(data);
	  
	  var activityDate = ev.target.id;
	  	  
	  if (activityDate!== "") {
		  sendModifyDate(activityId, activityDate);

		Loader();
		ShowHideLoader(1);
		Refresh(USERMAIL); 
	  }
	}
	
	
	function sendModifyDate(activityid, activityDate){

		var url = URL_CONTROL;
		
		var maRep = new XMLHttpRequest();
		maRep.open("POST", url, false);
		maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		maRep.onreadystatechange = function(){
			if (this.readyState === 4) {
				
			}
		}

		if (activityDate !=="" && activityDate !== undefined) {
			if (activityTitle !== undefined && activityTitle !== "") {
				
				maRep.send('action=' + SEND_NEW_DATE +
						'&activityid=' + activityid +
						'&activityDate=' + activityDate);
				} else {
					var message = "Le titre de l'activité n'est pas défini"
						errorMessage(message);
					}
			} else {
				var message = "La date de l'activité n'est pas définie"
					errorMessage(message);
			}
		}
	
	// Id du click droit
	var zoneContextMenu = document.getElementById("center_table");
	var eMousetargetId;
	
	zoneContextMenu.addEventListener("contextmenu", e => {
		  e.preventDefault();
		  	var id = e.srcElement.id;
		  	eMousetargetId = id;
	});
	
	// Menu contextuel
	
	const menu = document.querySelector(".menu");
	let menuVisible = false;

	const toggleMenu = command => {
	  menu.style.display = command === "show" ? "block" : "none";
	  menuVisible = !menuVisible;
	};

	const setPosition = ({ top, left }) => {
	  menu.style.left = `${left}px`;
	  menu.style.top = `${top}px`;
	  toggleMenu("show");
	};

	var zoneCloseMenu = document.getElementById("body");
	
	zoneCloseMenu.addEventListener("click", e => {
	  if(menuVisible)toggleMenu("hide");
	});
	
	if (!("path" in Event.prototype))
		Object.defineProperty(Event.prototype, "path", {
		  get: function() {
		    var path = [];
		    var currentElem = this.target;
		    while (currentElem) {
		      path.push(currentElem);
		      currentElem = currentElem.parentElement;
		    }
		    if (path.indexOf(window) === -1 && path.indexOf(document) === -1)
		      path.push(document);
		    if (path.indexOf(window) === -1)
		      path.push(window);
		    return path;
		  }
		});
	
	zoneContextMenu.addEventListener("contextmenu", e => {
	  e.preventDefault();
	  	var testid0 = e.path[0].dataset.id;
	  	var testid1 = e.path[1].dataset.id;
	  	var testid2 = e.path[2].dataset.id;
	  	  eMousetarget = e.target.id;
	  	  
	  	  
	  if (testid0 === undefined) {
		  if (testid1 === undefined) {
			 if (testid2 !== undefined) {
				 var data_id = e.path[2].dataset.id;
				  clipboard[0] = data_id;
				  
				  var data_title = e.path[2].dataset.title;
				  clipboard[1] = data_title;
				  
				  var data_type = e.path[2].dataset.type;
				  clipboard[2] = data_type;
				  
				  var data_categorie = e.path[2].dataset.categorie;
				  clipboard[3] = data_categorie;
				  
				  var data_date = e.path[2].dataset.date;
				  clipboard[4] = data_date;
				  
				  var data_duree = e.path[2].dataset.duree;
				  clipboard[5] = data_duree;
				  
				  var data_distance = e.path[2].dataset.distance;
				  clipboard[6] = data_distance;
				  
				  var data_denivele = e.path[2].dataset.denivele;
				  clipboard[7] = data_denivele;
				  
				  var data_description = e.path[2].dataset.description;
				  clipboard[8] = data_description;
				  
			 	}
			 } else {
					  var data_id = e.path[1].dataset.id;
					  clipboard[0] = data_id;
					  
					  var data_title = e.path[1].dataset.title;
					  clipboard[1] = data_title;
					  
					  var data_type = e.path[1].dataset.type;
					  clipboard[2] = data_type;
					  
					  var data_categorie = e.path[1].dataset.categorie;
					  clipboard[3] = data_categorie;
					  
					  var data_date = e.path[1].dataset.date;
					  clipboard[4] = data_date;
					  
					  var data_duree = e.path[1].dataset.duree;
					  clipboard[5] = data_duree;
					  
					  var data_distance = e.path[1].dataset.distance;
					  clipboard[6] = data_distance;
					  
					  var data_denivele = e.path[1].dataset.denivele;
					  clipboard[7] = data_denivele;
					  
					  var data_description = e.path[1].dataset.description;
					  clipboard[8] = data_description;
				  	}
	  }
	  
	  else {
		  var data_id = e.path[0].dataset.id;
		  clipboard[0] = data_id;
		  
		  var data_title = e.path[0].dataset.title;
		  clipboard[1] = data_title;
		  
		  var data_type = e.path[0].dataset.type;
		  clipboard[2] = data_type;
		  
		  var data_categorie = e.path[0].dataset.categorie;
		  clipboard[3] = data_categorie;
		  
		  var data_date = e.path[0].dataset.date;
		  clipboard[4] = data_date;
		  
		  var data_duree = e.path[0].dataset.duree;
		  clipboard[5] = data_duree;
		  
		  var data_distance = e.path[0].dataset.distance;
		  clipboard[6] = data_distance;
		  
		  var data_denivele = e.path[0].dataset.denivele;
		  clipboard[7] = data_denivele;
		  
		  var data_description = e.path[0].dataset.description;
		  clipboard[8] = data_description;
	  }
	  
	  const origin = {
	    left: e.pageX,
	    top: e.pageY
	  };
	  setPosition(origin);
	  
	  	if (eMousetargetId !== "") {
	  		var ChangeStyleCopy = document.getElementsByClassName("menu-option")[1];
			ChangeStyleCopy.style.cursor = "not-allowed";
			ChangeStyleCopy.style.backgroundColor = "grey";
			
			var ChangeStyleModify = document.getElementsByClassName("menu-option")[3];
			ChangeStyleModify.style.cursor = "not-allowed";
			ChangeStyleModify.style.backgroundColor = "grey";
			
			var ChangeStyleDelete = document.getElementsByClassName("menu-option")[4];
			ChangeStyleDelete.style.cursor = "not-allowed";
			ChangeStyleDelete.style.backgroundColor = "grey";
		}else {
			var ChangeStyleCopy = document.getElementsByClassName("menu-option")[1];
			ChangeStyleCopy.style.cursor = "pointer";
			ChangeStyleCopy.style.backgroundColor = "";
			
			var ChangeStyleModify = document.getElementsByClassName("menu-option")[3];
			ChangeStyleModify.style.cursor = "pointer";
			ChangeStyleModify.style.backgroundColor = "";
			
			var ChangeStyleDelete = document.getElementsByClassName("menu-option")[4];
			ChangeStyleDelete.style.cursor = "pointer";
			ChangeStyleDelete.style.backgroundColor = "";
		}
	  	
	  	if (eMousetargetId == "") {
	  		var ChangeStyleAdd = document.getElementsByClassName("menu-option")[0];
	  		ChangeStyleAdd.style.cursor = "not-allowed";
	  		ChangeStyleAdd.style.backgroundColor = "grey";
		}
	  	else {
	  		var ChangeStyleAdd = document.getElementsByClassName("menu-option")[0];
	  		ChangeStyleAdd.style.cursor = "pointer";
	  		ChangeStyleAdd.style.backgroundColor = "";
	  		}
	  
	  	var ClipBoardValue = Bisclipboard[0];
	  	
	  	if(eMousetargetId !== "") { // si on clique sur une case vide
			if (ClipBoardValue == undefined && ClipBoardValue == null) {
				var ChangeStylePaste = document.getElementsByClassName("menu-option")[2];
				ChangeStylePaste.style.cursor = "not-allowed";
				ChangeStylePaste.style.backgroundColor = "grey";
			}
			else {
				var ChangeStylePaste = document.getElementsByClassName("menu-option")[2];
			ChangeStylePaste.style.cursor = "pointer";
			ChangeStylePaste.style.backgroundColor = "";
			}
	  	}
	  	else {
	  		var ChangeStyleAdd = document.getElementsByClassName("menu-option")[2];
	  		ChangeStyleAdd.style.cursor = "not-allowed";
	  		ChangeStyleAdd.style.backgroundColor = "";
	  		}
		
		return false;
	});
	
	
	// fonction Coller
	
	var AddlistenerContextPasteFunction = document.getElementsByClassName("menu-option")[2];
	
	AddlistenerContextPasteFunction.addEventListener("click", PasteActivity);
	
	function PasteActivity() {
		if (IfClipBoardisDefine() == true) {
			PasteNewActivity();
		}
	}
	
	function PasteNewActivity(){

			var activityTitle = Bisclipboard[1];
			var activityType = Bisclipboard[2];
			var activitySport = Bisclipboard[3];
			var activityDate = eMousetarget;
			var activityDuration = Bisclipboard[5];
			var activityDistance = Bisclipboard[6];		 	
			var activityElevation = Bisclipboard[7];
			var activityDescription = Bisclipboard[8];
			
			sendPasteActivity(USERMAIL,
						activityTitle,
						activityType,
						activitySport, 
						activityDate, 
						activityDuration, 
						activityDistance, 
						activityElevation, 
						activityDescription);
		} 

	function sendPasteActivity(athleteMail, activityTitle, activityType, activitySport, activityDate, activityDuration, activityDistance, activityElevation, activityDescription){
		var url = URL_CONTROL;
		
		var maRep = new XMLHttpRequest();
		maRep.open("POST", url, false);
		maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		maRep.onreadystatechange = function(){
			if (this.readyState === 4) {
				CloseContextMenuF();
				Loader();
				ShowHideLoader(1);
				Refresh(athleteMail);		
			}
		}

		if (activityDate !=="" && activityDate !== undefined) {
			if (activityTitle !== undefined && activityTitle !== "") {
				
				maRep.send('action=' + ADD_ACTIVITY + 
						'&custMail=' + athleteMail +
						'&activityTitle=' + activityTitle + 
						'&activityType=' + activityType + 
						'&activitySport=' + activitySport + 
						'&activityDate=' + activityDate + 
						'&activityDuration=' + activityDuration + 
						'&activityDistance=' + activityDistance + 
						'&activityElevation=' + activityElevation + 
						'&activityDescription=' + activityDescription);
			} else {
				var message = "Le titre de l'activité n'est pas défini"
					errorMessage(message);
				}
			} else {
				var message = "La date de l'activité n'est pas définie"
					errorMessage(message);
			}
	}
	
	var AddListenerCloseContextMenu = document.getElementsByClassName("menu-option")[1];
	
	AddListenerCloseContextMenu.addEventListener("click", CloseContextMenuF);
	
	function CloseContextMenuF() {
		Bisclipboard = clipboard;
		toggleMenu("hide");
	}
	
	var AddListenerAddActivityContextMenu = document.getElementsByClassName("menu-option")[0];
	
	AddListenerAddActivityContextMenu.addEventListener("click", OpenWindowsAddActivityFromContextMenu);
	

	function OpenWindowsAddActivityFromContextMenu() {
		if (eMousetargetId !== "") {
			addActivityinDay(eMousetargetId);
		}
	}
	
	var AddListenerModifyActivityContextMenu = document.getElementsByClassName("menu-option")[3];
	
	AddListenerModifyActivityContextMenu.addEventListener("click", ModActivityFromContextMenu);
	
	function ModActivityFromContextMenu() {
		if (eMousetargetId == "") {
			showActivity(clipboard[0]);
		}
	}
	
	var AddListenerDeleteActivityContextMenu = document.getElementsByClassName("menu-option")[4];

	
	AddListenerDeleteActivityContextMenu.addEventListener("click", DelActivityFromContextMenu);
	
	function DelActivityFromContextMenu() {
		
		if (eMousetargetId == "") {
			DeleteAjaxActivityContextMenu(clipboard[0]);
		}
	}
	
	function IfClipBoardisDefine() {
		var ClipBoardValue = Bisclipboard[0];
		
		if (ClipBoardValue !== undefined && ClipBoardValue !== null) {
			return true;
		} else {return false};
	}