/**
 * 
 * 
 **/

var CurrentYear = getCurrentYear();
var ShowYearCalendar = CurrentYear;

newdate = new Date();
var date = yyyymmdd(newdate);

var weekNumber = getNbweeks(newdate);
var CurentDate = getFullDate();

var onChange = document.getElementById("full_calendar");

//fonctions auto-appellante 

(function() {
	
	ChangingSizeFullCalendar();
	
	AddYear2019(2019,52);
    AddYear2020(2020,53);
    AddYear2021(2021,52);
    AddYear2022(2022,52);
    AddYear2023(2023,52);
    AddYear2024(2024,52);
    AddYear2025(2025,52);
    AddYear2026(2026,53);
    AddYear2027(2027,52);
    AddYear2028(2028,52);
    AddYear2029(2029,52);
    AddYear2030(2030,52);
    
    ActiveWeekColor(CurrentYear, weekNumber, date);
})();


function AddYear2019(year,nbWeekinYear) {
		
	Add_weeks_calendar(year,nbWeekinYear); 
	Add_all_days(year,nbWeekinYear,1); // -> 1 = numero 1er jour de l'année créée
	Add_All_Numbers_Days(year,
			364, // nombre jour année
			28,  // nombre jour fevrier
			29,  // dernier jour avant semaine transition
			1,   // nombre jour 1er semaine de l'année précédente
			1,   // nombre jour ne pas transformer l'id debut année
			1);  // numero 1er jour de l'année créée 
	ChangeTransitionId(year,2018,1,1,31,12)
	changeIdWeek(year,364,1); // change les ID des jours
	Add_Lines_NBweeks(year,nbWeekinYear);		
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,28,12,31,2018);
}												

function AddYear2020(year,nbWeekinYear) {
	
	Add_weeks_calendar(year,nbWeekinYear);
	Add_all_days(year,nbWeekinYear,1);
	Add_All_Numbers_Days(year,365,29,31,2,2,1);
	ChangeTransitionId(year,2019,1,2,30,12)
	ChangeTransitionId(year,2021,369,3,01,01)
	changeIdWeek(year,371,1);
	Add_Lines_NBweeks(year,nbWeekinYear);
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,29,12,30,2019);
}

function AddYear2021(year,nbWeekinYear) {
	
	Add_weeks_calendar(year,nbWeekinYear); 
	Add_all_days(year,nbWeekinYear,4);
	Add_All_Numbers_Days(year,364,28,31,0,3,4);
	ChangeTransitionId(year,2022,366,2,01,01)
	changeIdWeek(year,367,4);
	Add_Lines_NBweeks(year,nbWeekinYear);
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,28,1,4,2021);
}

function AddYear2022(year,nbWeekinYear) {
	
	Add_weeks_calendar(year,nbWeekinYear); 
	Add_all_days(year,nbWeekinYear,3);
	Add_All_Numbers_Days(year,364,28,31,0,2,3); 
	ChangeTransitionId(year,2023,366,1,01,01)
	changeIdWeek(year,366,3);
	Add_Lines_NBweeks(year,nbWeekinYear);
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,28,01,03,2022);
}

function AddYear2023(year,nbWeekinYear) {
	
	Add_weeks_calendar(year,nbWeekinYear); 
	Add_all_days(year,nbWeekinYear,2);
	Add_All_Numbers_Days(year,364,28,31,0,0,2); 
	//ChangeTransitionId(year,2023,366,1,01,01)
	changeIdWeek(year,365,2);
	Add_Lines_NBweeks(year,nbWeekinYear);
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,28,01,02,2023);
}
 
function AddYear2024(year,nbWeekinYear) {
	
	Add_weeks_calendar(year,nbWeekinYear); 
	Add_all_days(year,nbWeekinYear,1);
	Add_All_Numbers_Days(year,364,29,29,0,0,1); 
	//ChangeTransitionId(year,2023,366,0,00,00);
	changeIdWeek(year,364,1);
	Add_Lines_NBweeks(year,nbWeekinYear);
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,29,01,01,2024);
}
 
function AddYear2025(year,nbWeekinYear) {
	
	Add_weeks_calendar(year,nbWeekinYear); 
	Add_all_days(year,nbWeekinYear,1);
	Add_All_Numbers_Days(year,364,28,28,2,2,1); 
	ChangeTransitionId(year,2024,1,2,30,12);
	changeIdWeek(year,364,1);
	Add_Lines_NBweeks(year,nbWeekinYear);
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,28,12,30,2024);
}
 
function AddYear2026(year,nbWeekinYear) { //semaine 53
	
	Add_weeks_calendar(year,nbWeekinYear); 
	Add_all_days(year,nbWeekinYear,1);
	Add_All_Numbers_Days(year,365,28,31,3,3,1); 
	ChangeTransitionId(year,2025,1,3,29,12);
	ChangeTransitionId(year,2027,369,3,01,01);
	changeIdWeek(year,371,1);
	Add_Lines_NBweeks(year,nbWeekinYear);
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,28,12,29,2025);
}
 
function AddYear2027(year,nbWeekinYear) {
	
	Add_weeks_calendar(year,nbWeekinYear); 
	Add_all_days(year,nbWeekinYear,4);
	Add_All_Numbers_Days(year,364,28,31,0,3,4); 
	ChangeTransitionId(year,2028,366,2,01,01)
	changeIdWeek(year,367,4);
	Add_Lines_NBweeks(year,nbWeekinYear);
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,28,01,04,2027);
}
 
function AddYear2028(year,nbWeekinYear) {
	
	Add_weeks_calendar(year,nbWeekinYear); 
	Add_all_days(year,nbWeekinYear,3);
	Add_All_Numbers_Days(year,364,29,31,0,0,3); 
	//ChangeTransitionId(year,2027,1,5,27,12)
	changeIdWeek(year,366,3);
	Add_Lines_NBweeks(year,nbWeekinYear);
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,29,01,03,2028);
}
 
function AddYear2029(year,nbWeekinYear) {
	
	Add_weeks_calendar(year,nbWeekinYear); 
	Add_all_days(year,nbWeekinYear,1);
	Add_All_Numbers_Days(year,364,28,30,0,0,1); 
	//ChangeTransitionId(year,2023,366,1,01,01)
	changeIdWeek(year,364,1);
	Add_Lines_NBweeks(year,nbWeekinYear);
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,28,01,01,2029);
}
 
function AddYear2030(year,nbWeekinYear) {
	
	Add_weeks_calendar(year,nbWeekinYear); 
	Add_all_days(year,nbWeekinYear,1);
	Add_All_Numbers_Days(year,364,28,29,1,1,1); 
	ChangeTransitionId(year,2029,1,1,31,12)
	changeIdWeek(year,364,1);
	Add_Lines_NBweeks(year,nbWeekinYear);
	Add_Lines_TableRecap(year,nbWeekinYear);
	AddRecap(year,nbWeekinYear,28,12,31,2029);
}
 
// fonction auto-executé qui ajoute des LIGNES aux tableaux html

	function Add_weeks_calendar(year, Nbweek){
		
		var tabhtml = document.getElementById("center_table");
		var table = document.createElement("table");
		tabhtml.appendChild(table);
		table.setAttribute("id", "calendar"+year);
		table.setAttribute("class", "tableCalendar");
		
		var tr = document.createElement("tr");
		table.appendChild(tr);
		var th = document.createElement("th");
		tr.appendChild(th);
		var tab = document.getElementById("calendar"+year);
		
		for (var i = 1; i <= Nbweek; i++){
			var line = tab.insertRow(i);
			line.setAttribute("id", year+"_week"+i);
		}
		
	}

// fonction qui ajoute les CELLULES aux lignes ajoutés précédemment

	function Add_all_days(year, nbWeekinYear, FirstDayYear){
	
		var x = 0; // compteur numéro de semaine
		var c = 0; // compteur jour de l'année
		
		
		if (nbWeekinYear == 52) {
			for (x = 1, c = FirstDayYear; x <= nbWeekinYear && c <= 363; x++, c+=7){							
				var ligne = document.getElementById(year+"_week"+x);		
				for (var i = 0; i < 7; i++){						
					var line = ligne.insertCell(i);					
					line.setAttribute("id", year+"_day"+(i+c));		
					}
			}
			
		} else {
			for (x = 1, c = FirstDayYear; x <= nbWeekinYear && c <= 371; x++, c+=7){							
				var ligne = document.getElementById(year+"_week"+x);		
				for (var i = 0; i < 7; i++){						
					var line = ligne.insertCell(i);					
					line.setAttribute("id", year+"_day"+(i+c));		
				}
			}
		 }
	}

// fonction qui ajoute les numéros des jours

	function Add_All_Numbers_Days(year,numberdaysYear,numberDaysFebruary,lastDayBeforeTransitionWeek,firstDayAfterTransitionWeek,firstTransformData,numberDayAfterTransitionWeek){
		
		let DaysInMonth = [31,numberDaysFebruary,31,30,31,30,31,31,30,31,30,lastDayBeforeTransitionWeek];
		let Month = [01,02,03,04,05,06,07,08,09,10,11,12];
		
		var i, x, j, h;
		
		var compteur = 0;
		var lastmonth = firstDayAfterTransitionWeek;
		var boolean = true;
		
		for (i = 0, j = 0; i < DaysInMonth.length && j < Month.length; i++, j++) {
			var lastmonth = lastmonth + compteur;
			
			if (boolean == true) {
				Add_Numbers_Days(DaysInMonth[i], lastmonth, Month[j], year, numberDayAfterTransitionWeek);
				compteur = DaysInMonth[i];
				boolean = false;
			} else {Add_Numbers_Days(DaysInMonth[i], lastmonth, Month[j], year, 1);
			compteur = DaysInMonth[i];}
		}
}

	function Add_Numbers_Days(daysInMonth, lastmonth, month, year, numberDayAfterTransitionWeek){ 
		
		var numberfirstday = numberDayAfterTransitionWeek;
		
		for (var i = numberfirstday; i <= daysInMonth; i++) {
			var x = document.getElementById(year+"_day"+(i+lastmonth));
			
			var month0 = add0time(month);
			var day0 = add0time(i);
			
			x.setAttribute("data-date", year+"-"+month0+"-"+day0);
			var y = document.createElement("span");
			var t = document.createTextNode(i);
			y.appendChild(t); 
			x.appendChild(y);
			y.setAttribute("id", "number.days"+(i+lastmonth));
			x.setAttribute("class", "daynumber");		
			x.setAttribute("class", "daynumber");
			x.setAttribute("ondrop", "drop(event)");
			x.setAttribute("ondragover", "allowDrop(event)");
		}
	}
	
	//Change id des jours
		
	function changeIdWeek(year,numberdaysYear,firstDayYear){
		
		for (var i = firstDayYear; i <= numberdaysYear; i++) {
			var getId = document.getElementById(year+"_day"+i);
			
			var datadate = getId.getAttribute("data-date");
			
			getId.setAttribute("id", datadate);			
		}		
	}


	function ChangeTransitionId(year,yearToChangeId,numeroIdPremierJourChanger,nombreJourAjouter,NumJour, NumMonth){
		
		var i,l;
		var r = NumJour+nombreJourAjouter;
		
		for (i = numeroIdPremierJourChanger, l = NumJour; i <= nombreJourAjouter, l < r; i++, l++) {
		
		var x = document.getElementById(year+"_day"+i);
		
		var month0 = add0time(NumMonth);
		var day0 = add0time(l);   
		
		x.setAttribute("data-date", yearToChangeId+"-"+month0+"-"+day0);
		var y = document.createElement("span");
		var t = document.createTextNode(l);
		y.appendChild(t);
		x.appendChild(y);
		y.setAttribute("id", "number.days"+(l));
		x.setAttribute("class", "daynumber");
		}
	}


// Ajoute les lignes et cells du tableau des numéros des semaines	
	
	function Add_Lines_NBweeks(year, Nbweek){
		
		var tabhtml = document.getElementById("left_table");
		var table = document.createElement("table");
		tabhtml.appendChild(table);
		table.setAttribute("id", "tableNBWeeks"+year);
		table.setAttribute("class", "tableNBWeeks");
		
		var tr = document.createElement("tr");
		table.appendChild(tr);
		var th = document.createElement("th");
		tr.appendChild(th);
		var tab = document.getElementById("tableNBWeeks"+year);
		
		for (var i = 1; i <= Nbweek; i++){
			var line = tab.insertRow(i);
			line.setAttribute("id", year+"_NBweek"+i);
		}	
		
		for (var i = 1; i <= Nbweek; i++){
			
			var cellule = document.getElementById(year+"_NBweek"+i);
			var line = cellule.insertCell(0);
			line.innerHTML = i;
			line.setAttribute("id", year+"_intNbWeek"+i);
		}
	}

// Ajoute les lignes et cells du tableau recap
	
	function Add_Lines_TableRecap(year, Nbweek){
			
		var tabhtml = document.getElementById("right_table");
		var table = document.createElement("table");
		tabhtml.appendChild(table);
		table.setAttribute("id", "tableRecap"+year);
		table.setAttribute("class", "tableRecap");
		
		var tr = document.createElement("tr");
		table.appendChild(tr);
		var th = document.createElement("th");
		tr.appendChild(th);
		
		var tab = document.getElementById("tableRecap"+year);
			
			for (var i = 1; i <= Nbweek; i++){
				var line = tab.insertRow(i);
				line.setAttribute("id", year+"_Recapweek" + i);
			}	

		for (var i = 1; i <= Nbweek; i++){
			
			var cellule = document.getElementById(year+"_Recapweek" + i);
			var line = cellule.insertCell(0);
			line.setAttribute("id", year+ "_Cell_Recapweek_"+i);
		}	

		
		for (var i = 1; i <= Nbweek; i++){
			
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
	
// Affiche la page sur la semaine active au bon endroit sur le chargement
	
	function OnloadView(year, weekNumber){
		document.location.href="#"+year+"_NBweek"+(weekNumber-1);
	}
	
// Affiche fenetre d'ajout de séance
	
	// Get the modal
	var modal = document.getElementById('id01');

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}
	
	var modal02 = document.getElementById('id02');

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal02) {
	    	modal02.style.display = "none";
	    }
	}
	
	var modalRepetitionAct = document.getElementById('IdmodalRepetition');

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modalRepetitionAct) {
	    	modalRepetitionAct.style.display = "none";
	    }
	}
		
	// Lien vers la semaine active
		
		function JumpActiveWeek(year, weekNumber){
			noShowAnyCalendar();
			ShowActualYearCalendar(year);
			ChangeNumberYearShow(year);
			ChangeYearArrow(year);
			HideArrow(year);
			ajustTableHeight(year);
			ChangingMonth(year);
			
			ShowYearCalendar = year;
			
			document.getElementById("ActiveWeeklink").href = "#"+year+"_NBweek"+(weekNumber-1);
		}
		
		function noShowAnyCalendar() {
			for (var i = 2019; i <= 2030; i++) {
				document.getElementById("calendar"+i).style.display = "none";
				document.getElementById("tableNBWeeks"+i).style.display = "none";
				document.getElementById("tableRecap"+i).style.display = "none";
			}
		}
			
	// Affiche la semaine active en couleur et le jour actif
		
		function ActiveWeekColor(year, weekNumber, date){
			
			document.getElementById(year+"_week"+weekNumber).style.backgroundColor = "#f2f2f2";
			document.getElementById(year+"_NBweek"+weekNumber).style.backgroundColor = "#f2f2f2";
			document.getElementById(date).style.border= "2px solid black";
			document.getElementById(year+"_intNbWeek"+weekNumber).style.border= "";
			OnloadView(year, weekNumber);
		}
				
	//Ajoute un zéro devant le nombre seul
		
		function add0time(x) {
			var t = String(x);
			var y = t.length;

			if (y == 2){
				var tt = x;		
			        } else {var tt = "0"+x;}
			return tt;
		}
		
		
	// Affiche le modal d'activité avec la date pré-rempli
		
		function addActivityinDay(date) {
						
			var duree = document.getElementById(date);
			
			var datadate = duree.getAttribute("data-date");
			
			var activityDuration = document.getElementById("activityDate");

			activityDuration.setAttribute("value", datadate);
			
			document.getElementById('id01').style.display='block';
		}
		
	//Remet à zéro le temps de l'input 
		
		function openAddActivityW() {
			
			var activityDuration = document.getElementById("activityDate");

			activityDuration.setAttribute("value", "");
			
			document.getElementById('id01').style.display='block';
		}
	
		
	//Affiche le mois en cours
		
		function ChangingMonth(year){
			var frame = document.getElementById("full_calendar");
			  
			  var Pagepx = frame.scrollTop;
			  
			  switch (true) {
			case (0 <= Pagepx && Pagepx < 933):
				document.getElementById('changingMonth-content').innerHTML = "Janvier "+year;
				break;
			case (933 < Pagepx && Pagepx < 1733):
				document.getElementById('changingMonth-content').innerHTML = "Février "+year;
				break;
				
			case (1733 < Pagepx && Pagepx < 3066):
				document.getElementById('changingMonth-content').innerHTML = "Mars "+year;
				break;
				
			case (3066 < Pagepx && Pagepx < 4130):
				document.getElementById('changingMonth-content').innerHTML = "Avril "+year;
				break;
				
			case (4130 < Pagepx && Pagepx < 5235):
				document.getElementById('changingMonth-content').innerHTML = "Mai "+year;
				break;
				
			case (5235 < Pagepx && Pagepx < 6416):
				document.getElementById('changingMonth-content').innerHTML = "Juin "+year;
				break;
				
			case (6416 < Pagepx && Pagepx < 7466):
				document.getElementById('changingMonth-content').innerHTML = "Juillet "+year;
				break;
				
			case (7466 < Pagepx && Pagepx < 8420):
				document.getElementById('changingMonth-content').innerHTML = "Aout "+year;
				break;
				
			case (8420 < Pagepx && Pagepx < 9616):
				document.getElementById('changingMonth-content').innerHTML = "Setpembre "+year;
				break;
				
			case (9616 < Pagepx && Pagepx < 10549):
				document.getElementById('changingMonth-content').innerHTML = "Octobre "+year;
				break;
				
			case (10549 < Pagepx && Pagepx < 11749):
				document.getElementById('changingMonth-content').innerHTML = "Novembre "+year;
				break;
				
			case (11749 < Pagepx && Pagepx < 12500):
				document.getElementById('changingMonth-content').innerHTML = "Décembre "+year;
				break;
			}
		}
		
	// Change la taille du calendrier en fonction de la taille de l'écran	
		
	function ChangingSizeFullCalendar() {
		
		var div = document.getElementById('full_calendar');
		
		var headerHeight = document.getElementById('user_infos').clientHeight;
		
		var topCalendarHeight = document.getElementById('topCalendar').clientHeight;
		
		var tabledaysHeight = document.getElementById('days_table').clientHeight;
		
		var windowsHeight = self.innerHeight;
		
		var finalHeight = windowsHeight - tabledaysHeight - topCalendarHeight - headerHeight - 10;
		
		div.style.height = finalHeight+"px";
	}
	
	// retourne l'année actuelle
	
	function getCurrentYear() {
		  var d = new Date();
		  var n = d.getFullYear();
		  return n;
		}
	
	// retourne le numéro de la semaine actuelle
	
	function getNbweeks(dt){
		
		var tdt = new Date(dt.valueOf());
		
	     var dayn = (dt.getDay() + 6) % 7;
	     
	     tdt.setDate(tdt.getDate() - dayn + 3);
	     var firstThursday = tdt.valueOf();
	     tdt.setMonth(0, 1);
	     if (tdt.getDay() !== 4) 
	       {
	      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
	        }
	     return 1 + Math.ceil((firstThursday - tdt) / 604800000);
	        }
	
	//retourne la date actuelle
	
	function getFullDate(){
		var ladate = new Date()
		var add0 = add0time(ladate.getDate());
		
		var date = ladate.getFullYear()+"-"+(ladate.getMonth()+1)+"-"+add0;
			
		return date;
	}
	
	// Affiche onload le calendrier de l'année actuelle
	
	function ShowActualYearCalendar(ShowYearCalendar) {
		document.getElementById("calendar"+ShowYearCalendar).style.display = "table";
		document.getElementById("tableNBWeeks"+ShowYearCalendar).style.display = "table";
		document.getElementById("tableRecap"+ShowYearCalendar).style.display = "table";
		ChangeYearArrow(ShowYearCalendar);
	}
	
	// Affiche l'année suivante
	
	function CalendarForwardMouvement(ShowYearCalendar) {
		var show = ShowYearCalendar+1;
		
		document.getElementById("calendar"+show).style.display = "table";
		document.getElementById("tableNBWeeks"+show).style.display = "table";
		document.getElementById("tableRecap"+show).style.display = "table";
		
		document.getElementById("calendar"+ShowYearCalendar).style.display = "none";
		document.getElementById("tableNBWeeks"+ShowYearCalendar).style.display = "none";
		document.getElementById("tableRecap"+ShowYearCalendar).style.display = "none";
		
		ChangeNumberYearShow(show);
		ajustTableHeight(show);
		ChangeYearArrow(show);
		HideArrow(show);
		ChangingMonth(show);
		BacktoBeginnigYear(show);
	}
	
	// Affiche l'année précédente
	
	function CalendarBackwardMouvement(ShowYearCalendar) {
		var show = ShowYearCalendar-1;
		document.getElementById("calendar"+show).style.display = "table";
		document.getElementById("tableNBWeeks"+show).style.display = "table";
		document.getElementById("tableRecap"+show).style.display = "table";
		
		document.getElementById("calendar"+ShowYearCalendar).style.display = "none";
		document.getElementById("tableNBWeeks"+ShowYearCalendar).style.display = "none";
		document.getElementById("tableRecap"+ShowYearCalendar).style.display = "none";
		
		ChangeNumberYearShow(show);
		ajustTableHeight(show);
		ChangeYearArrow(show);
		HideArrow(show);
		ChangingMonth(show);
		BacktoBeginnigYear(show);
	}
	
	// Change la variable globale de l'année à afficher
	
	function ChangeNumberYearShow(show) {
		ShowYearCalendar = show;
	}
	
	// Fonction qui change le mois suivant et le mois précédent dans les fléches
	
	function ChangeYearArrow(year) {
		document.getElementById("TextChangingPreviousYear").innerHTML = year-1;
		document.getElementById("TextChangingNextYear").innerHTML = year+1;	
	}
	
	// Cache les flèches si besoin
	
	function HideArrow(ShowYearCalendar) {
		if (ShowYearCalendar == 2019) {
			document.getElementById("leftArrow").style.display = "none";
		}
		else if(ShowYearCalendar == 2030) {
			document.getElementById("rightArrow").style.display = "none";
		}
		else {document.getElementById("rightArrow").style.display = "block";
		document.getElementById("leftArrow").style.display = "block";
		}
	}
	
	function BacktoBeginnigYear(year) {
		document.location.href="#"+year+"_NBweek1";
	}
	
	function OpenModalAddActivity() {
		
		var IdInsertDateValue = document.getElementById('activityDate');
		
		IdInsertDateValue.setAttribute("value", date);
		
		document.getElementById('id01').style.display='block';
	}

	function CloseModalAddActivity() {
		
		var IdInsertDateValue = document.getElementById('activityDate');
		
		IdInsertDateValue.setAttribute("value", '');
		
		document.getElementById('id01').style.display='none';
	}
	
	function OpenRecurrenceModal() {
		
		var dateValue = document.getElementById('activityDate').value;
		
		var IdInsertDateValue = document.getElementById('inputEndAfterTime');
		
		if (dateValue !== null) {
			IdInsertDateValue.setAttribute("value", dateValue);
		}
		
		document.getElementById('IdmodalRepetition').style.display='block';
	}
	
	function CloseRecurrenceModal() {
		document.getElementById('IdmodalRepetition').style.display='none';
		document.getElementById('BtnRecurrence1').style.backgroundColor ="lightgray";
		document.getElementById('EndAfterTime').checked = false;
		document.getElementById('EndUntilWeek').checked = false;
	}
	
	function CloseRecurrenceModalandOK() {
		
		if((document.getElementById('EndUntilWeek')).checked){
			var radio_inputEndUntilWeek = (document.getElementById('inputEndUntilWeek')).value;
	 }
		if((document.getElementById('EndAfterTime')).checked){
			var radio_inputEndAfterTime = (document.getElementById('inputEndAfterTime')).value;
	 }
		
		if (radio_inputEndUntilWeek !== undefined && radio_inputEndUntilWeek !== null) {
		document.getElementById('BtnRecurrence1').style.backgroundColor ="#0080ff";
		}
		
		else if (radio_inputEndAfterTime !== undefined && radio_inputEndAfterTime !== null) {
			document.getElementById('BtnRecurrence1').style.backgroundColor ="#0080ff";
		} 
		
		else{document.getElementById('BtnRecurrence1').style.backgroundColor ="lightgray";};
		
		document.getElementById('IdmodalRepetition').style.display='none';
	}
	
	function blurWindowsCalendar() {
		
		var getWindows = document.getElementById("MainCalendar");
		
		getWindows.style.filter = "blur(2px)";
		
	}
	
	function NbweeksbyYear(year) {
		if (year == 2020 && year == 2026) {
			var Nbweeks = 53
		}
		else {var Nbweeks = 52};
		
		return Nbweeks;
	}

	Date.prototype.yyyymmdd = function() {
		var mm = this.getMonth() + 1;
		var dd = this.getDate();
	  
		return [this.getFullYear(),
				(mm>9 ? '' : '0') + mm,
				(dd>9 ? '' : '0') + dd
			   ].join('');
	  };

	  function yyyymmdd(newDate) {
		var mm = newDate.getMonth() + 1;
		var dd = newDate.getDate();
	    let returnDate = newDate.getFullYear()+"-"+add0time(mm)+"-"+add0time(dd);
		
		return  returnDate;
				
	  }
	
	// EventListener
	
	document.getElementById("body").addEventListener("load", OnloadView(CurrentYear, weekNumber), false);
	document.getElementById("body").addEventListener("load", ShowActualYearCalendar(ShowYearCalendar), false);
	document.getElementById("body").addEventListener("load", HideArrow(ShowYearCalendar), false);

	document.getElementById("full_calendar").addEventListener('scroll', function() {ChangingMonth(ShowYearCalendar)});
	
	document.getElementById("ActiveWeek").addEventListener("click", function(){JumpActiveWeek(CurrentYear, weekNumber)});
	document.getElementById("leftArrow").addEventListener("click", function(){CalendarBackwardMouvement(ShowYearCalendar)});
	document.getElementById("rightArrow").addEventListener("click", function(){CalendarForwardMouvement(ShowYearCalendar)});
	document.getElementById("delete_button").addEventListener("click", function(){DeleteActivity()});
	document.getElementById("btnAddActivity").addEventListener("click", function(){OpenModalAddActivity()});
	document.getElementById("CloseModalAddActivity").addEventListener("click", function(){CloseModalAddActivity()});
	document.getElementById("BtnRecurrence1").addEventListener("click", function(){OpenRecurrenceModal()});
	document.getElementById("CancelButton").addEventListener("click", function(){CloseRecurrenceModal()});
	document.getElementById("ConfirmButton").addEventListener("click", function(){CloseRecurrenceModalandOK()});
	