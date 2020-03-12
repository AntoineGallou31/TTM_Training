/**
 * 
 */


 function AddRecap(year, Nbweeks, Nbdaysfebruary,getFirstMonthOfCalendarId, getFirstDayOfCalendarId, getFirstYearOfCalendarId){
		
		var url = URL_CONTROL;
		
		var maRep = new XMLHttpRequest();
		maRep.open("POST", url, false);
		maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		maRep.onreadystatechange = function(){
			if (this.readyState === 4) {
				get_activitiesJSON(this.responseText,year, Nbweeks, Nbdaysfebruary,getFirstMonthOfCalendarId, getFirstDayOfCalendarId, getFirstYearOfCalendarId);
			}
		}
		maRep.send('action=' + GET_ACTIVITIES +
					'&user_mail=' + USERMAIL);
	}
	
	function get_activitiesJSON(reply, year, Nbweeks, Nbdaysfebruary,getFirstMonthOfCalendarId, getFirstDayOfCalendarId, getFirstYearOfCalendarId) {
		
		var repJSON = JSON.parse(reply);
		var nbActivities = repJSON.length;
		
		for (var i = 0; i < nbActivities; i++) {
			AddTotalTimebyAct(repJSON[i],year, Nbweeks, Nbdaysfebruary,getFirstMonthOfCalendarId, getFirstDayOfCalendarId, getFirstYearOfCalendarId);
		}
		
		InsertDatainTotalTimebyWeek(year, Nbweeks);
	}
	
	function AddTotalTimebyAct(JSON, year, Nbweeks, Nbdaysfebruary,getFirstMonthOfCalendarId, getFirstDayOfCalendarId, getFirstYearOfCalendarId ) {
		
		var activity_date = JSON["training_date"];
		var DateObject = new Date(activity_date);
		DateObject.setHours(00);
		DateObject.setMinutes(00);
		DateObject.setSeconds(00);
		
		var i,y;
		
		var Loopday = getFirstDayOfCalendarId;
		var Loopmonth = getFirstMonthOfCalendarId;
		var Loopyear = getFirstYearOfCalendarId;
		
		var Daysinmonthchange = 0;
				
		let DaysInMonth = [31,Nbdaysfebruary,31,30,31,30,31,31,30,31,30,31];		
		
		var NbDaysLoopMonth = DaysInMonth[Daysinmonthchange];
		
		for (i = 1,y = Loopday; i <= Nbweeks,y <= NbDaysLoopMonth; i++,y+=7) {
			
			var Ifok = (y+6);
			
			if (i == (Nbweeks+1)){
				y = 55;
			}
			
			else if(Ifok > NbDaysLoopMonth && Loopmonth == 12) { //Passage à l'année suivante si besoin
				
				var Ifok = Ifok-NbDaysLoopMonth;
				var Loopmonthplus1 = Loopmonth-11;
				var LoopYearPlus1 = Loopyear+1;
				
				
				var monthWith0 = Loopmonth;
				var monthplus1 = Loopmonthplus1;
				var dayWith0 = y;
				var ifokWith0 = Ifok;
				
				var date1 = Loopyear+"-"+monthWith0+"-"+dayWith0;
				var date2 = LoopYearPlus1+"-"+monthplus1+"-"+ifokWith0;
				
				var Datefinal1 = new Date(date1);
				Datefinal1.setHours(00);
				Datefinal1.setMinutes(00);
				Datefinal1.setSeconds(00);
				
				var Datefinal2 = new Date(date2);
				Datefinal2.setHours(00);
				Datefinal2.setMinutes(00);
				Datefinal2.setSeconds(00);
				
				var comparedate1 = DateObject >= Datefinal1;
				var comparedate2 = DateObject <= Datefinal2;

				if (comparedate1 == true && comparedate2 == true) {
					
					var h = (ExtractIntHour(JSON["training_duree"]));
					var m = (ExtractIntMin(JSON["training_duree"]));
					var s = (ExtractIntSec(JSON["training_duree"]));
					
					var w = i;
					
					addToTotalTime(year,h,m,s,w);
					addTotalToSport(year,h,m,s,w,JSON);
				}
				
				Loopyear = LoopYearPlus1;
				y = Ifok-6;
				Loopmonth = monthplus1;
				
			}
			
			else if(Ifok > NbDaysLoopMonth) { //Changement de mois
				
				var Ifok = Ifok-NbDaysLoopMonth;
				var Loopmonthplus1 = Loopmonth+1;
				
				var monthWith0 = Loopmonth;
				var monthplus1 = Loopmonthplus1;
				var dayWith0 = y;
				var ifokWith0 = Ifok;
				
				var date1 = Loopyear+"-"+monthWith0+"-"+dayWith0;
				var date2 = Loopyear+"-"+monthplus1+"-"+ifokWith0;
				
				var Datefinal1 = new Date(date1);
				Datefinal1.setHours(00);
				Datefinal1.setMinutes(00);
				Datefinal1.setSeconds(00);
				
				var Datefinal2 = new Date(date2);
				Datefinal2.setHours(00);
				Datefinal2.setMinutes(00);
				Datefinal2.setSeconds(00);
				
				var comparedate1 = DateObject >= Datefinal1;
				var comparedate2 = DateObject <= Datefinal2;

				if (comparedate1 == true && comparedate2 == true) {
					
					var h = (ExtractIntHour(JSON["training_duree"]));
					var m = (ExtractIntMin(JSON["training_duree"]));
					var s = (ExtractIntSec(JSON["training_duree"]));
					
					var w = i;
					
					addToTotalTime(year,h,m,s,w);
					addTotalToSport(year,h,m,s,w,JSON);
					
				}
				
				Loopmonth = monthplus1;
				Daysinmonthchange = Daysinmonthchange+1;
				y = Ifok-6;
				NbDaysLoopMonth = DaysInMonth[Daysinmonthchange];				

			} 
			
			else if (Ifok == NbDaysLoopMonth) {	//Changement de mois
				
				var monthWith0 = Loopmonth;
				var dayWith0 = y;
				var ifokWith0 = Ifok;
				
				var date1 = Loopyear+"-"+monthWith0+"-"+dayWith0;
				var date2 = Loopyear+"-"+monthWith0+"-"+ifokWith0;
				
				var Datefinal1 = new Date(date1);
				Datefinal1.setHours(00);
				Datefinal1.setMinutes(00);
				Datefinal1.setSeconds(00);
				
				var Datefinal2 = new Date(date2);
				Datefinal2.setHours(00);
				Datefinal2.setMinutes(00);
				Datefinal2.setSeconds(00);
				
				var comparedate1 = DateObject >= Datefinal1;
				var comparedate2 = DateObject <= Datefinal2;

				if (comparedate1 == true && comparedate2 == true) {
					
					var h = (ExtractIntHour(JSON["training_duree"]));
					var m = (ExtractIntMin(JSON["training_duree"]));
					var s = (ExtractIntSec(JSON["training_duree"]));
					
					var w = i;
					
					addToTotalTime(year,h,m,s,w);
					addTotalToSport(year,h,m,s,w,JSON);
					
				}
				
				Loopmonth = Loopmonth+1;
				Daysinmonthchange = Daysinmonthchange+1;
				y = -6;
				NbDaysLoopMonth = DaysInMonth[Daysinmonthchange];	
			}
			
			else { // Passage sans action particulière
				
				var monthWith0 = Loopmonth;
				var dayWith0 = y;
				var ifokWith0 = Ifok;
				
				var date1 = Loopyear+"-"+monthWith0+"-"+dayWith0;
				var date2 = Loopyear+"-"+monthWith0+"-"+ifokWith0;
				
				var Datefinal1 = new Date(date1);
				Datefinal1.setHours(00);
				Datefinal1.setMinutes(00);
				Datefinal1.setSeconds(00);
				
				var Datefinal2 = new Date(date2);
				Datefinal2.setHours(00);
				Datefinal2.setMinutes(00);
				Datefinal2.setSeconds(00);
				
				var comparedate1 = DateObject >= Datefinal1;
				var comparedate2 = DateObject <= Datefinal2;
				
				if (comparedate1 == true && comparedate2 == true) {
					
					var h = (ExtractIntHour(JSON["training_duree"]));
					var m = (ExtractIntMin(JSON["training_duree"]));
					var s = (ExtractIntSec(JSON["training_duree"]));
					
					var w = i;
					
					addToTotalTime(year,h,m,s,w);
					addTotalToSport(year,h,m,s,w,JSON);
				}
			}			
	 }
	}
	
	function addToTotalTime(year,h,m,s,w){
		
		var doc = document.getElementById(year+"_span_tt_time_"+w);
		
		var Test = doc.getAttribute("data-hour");
		
		if (Test !== null) {
			var actualHour = doc.getAttribute("data-hour");
			var actualMin = doc.getAttribute("data-min");
			var actualSec = doc.getAttribute("data-sec");
			
			var totalS = parseInt(actualSec)+s;
			
			if (totalS >= 60){
				totalS = totalS -60;
				actualMin = parseInt(actualMin)+1;
				}
			
			var totalM = parseInt(actualMin)+m;
			
			if (totalM >= 60){
				totalM = totalM -60;
				actualHour = parseInt(actualHour)+1;
				}
			
			var totalH = parseInt(actualHour)+h;
			
			doc.setAttribute("data-hour", totalH);
			doc.setAttribute("data-min", totalM);
			doc.setAttribute("data-sec", totalS);
		} 
		
		else {
			doc.setAttribute("data-hour", h);
			doc.setAttribute("data-min", m);
			doc.setAttribute("data-sec", s);
		}
	}
	
	function addTotalToSport(year,h,m,s,w,JSON) {
		
		var categorie = JSON["training_categorie"];
		var distance = JSON["training_distance"];
		
		switch (categorie) {
		case "Natation":
			var sportCate = "swim";
			addDistanceToActivityByWeek(year,distance,w,sportCate);
			addTimeToActivityByWeek(year,h,m,s,w,sportCate);
			break;

		case "Cyclisme":
			var sportCate = "bike";
			addDistanceToActivityByWeek(year,distance,w,sportCate);
			addTimeToActivityByWeek(year,h,m,s,w,sportCate);
			break;
			
		case "Course":
			var sportCate = "run";
			addDistanceToActivityByWeek(year,distance,w,sportCate);
			addTimeToActivityByWeek(year,h,m,s,w,sportCate);
			break;
		}
	}
	
	function addDistanceToActivityByWeek(year,distance,w,sportCate) {
		
		var doc = document.getElementById(year+"_span_"+sportCate+"_km_"+w);
		var Test = doc.getAttribute("data-distance");
		
		if (Test !== null) {
			var actualDistance = doc.getAttribute("data-distance");

			var totalDistance = parseInt(actualDistance)+parseInt(distance);
			
			doc.setAttribute("data-distance", totalDistance);
		}
		
		else {
			doc.setAttribute("data-distance", distance);
		}
	}
	
	function addTimeToActivityByWeek(year,h,m,s,w,sportCate) {
		
		var doc = document.getElementById(year+"_span_"+sportCate+"_time_"+w);
		var Test = doc.getAttribute("data-hour");
		
		if (Test !== null) {
			var actualHour = doc.getAttribute("data-hour");
			var actualMin = doc.getAttribute("data-min");
			var actualSec = doc.getAttribute("data-sec");
			
			var totalS = parseInt(actualSec)+s;
			
			if (totalS >= 60){
				totalS = totalS -60;
				actualMin = parseInt(actualMin) +1;
				}
			
			var totalM = parseInt(actualMin)+m;
			
			if (totalM >= 60){
				totalM = totalM -60;
				actualHour = parseInt(actualHour) +1;
				}
			
			var totalH = parseInt(actualHour)+h;
			
			doc.setAttribute("data-hour", totalH);
			doc.setAttribute("data-min", totalM);
			doc.setAttribute("data-sec", totalS);
		} 
		
		else {
			doc.setAttribute("data-hour", h);
			doc.setAttribute("data-min", m);
			doc.setAttribute("data-sec", s);
		}
	}
	
	function InsertDatainTotalTimebyWeek(year, NbWeeks){
		for (var i = 1; i <= NbWeeks; i++) {
			 
			var getId = document.getElementById(year+"_span_tt_time_"+i)
			 
			var Hour = getId.getAttribute("data-hour");
			var Min = getId.getAttribute("data-min");
			var Sec = getId.getAttribute("data-sec");
			
			if (Hour && Min && Sec !== null) {
				getId.innerHTML = add0time(Hour)+":"+add0time(Min)+":"+add0time(Sec);
			}
		}
		
		for (var i = 1; i <= NbWeeks; i++) {
			 
			var getId = document.getElementById(year+"_span_run_time_"+i)
			 
			var Hour = getId.getAttribute("data-hour");
			var Min = getId.getAttribute("data-min");
			var Sec = getId.getAttribute("data-sec");
			
			if (Hour && Min && Sec !== null) {
				getId.innerHTML = add0time(Hour)+":"+add0time(Min)+":"+add0time(Sec);
			}
		}
		
		for (var i = 1; i <= NbWeeks; i++) {
			 
			var getId = document.getElementById(year+"_span_bike_time_"+i)
			 
			var Hour = getId.getAttribute("data-hour");
			var Min = getId.getAttribute("data-min");
			var Sec = getId.getAttribute("data-sec");
			
			if (Hour && Min && Sec !== null) {
				getId.innerHTML = add0time(Hour)+":"+add0time(Min)+":"+add0time(Sec);
			}
		}
		
		for (var i = 1; i <= NbWeeks; i++) {
			 
			var getId = document.getElementById(year+"_span_swim_time_"+i)
			 
			var Hour = getId.getAttribute("data-hour");
			var Min = getId.getAttribute("data-min");
			var Sec = getId.getAttribute("data-sec");
			
			if (Hour && Min && Sec !== null) {
				getId.innerHTML = add0time(Hour)+":"+add0time(Min)+":"+add0time(Sec);
			}
		}
		
		for (var i = 1; i <= NbWeeks; i++) {
			 
			var getId = document.getElementById(year+"_span_run_km_"+i)
			 
			var Distance = getId.getAttribute("data-distance");
	
			if (Distance!== null) {
				getId.innerHTML = "";
				getId.innerHTML = Distance+" km";
			}
		}
		
		for (var i = 1; i <= NbWeeks; i++) {
			 
			var getId = document.getElementById(year+"_span_bike_km_"+i)
			 
			var Distance = getId.getAttribute("data-distance");
			
			if (Distance!== null) {
				getId.innerHTML = "";
				getId.innerHTML = Distance+" km";
			}
		}
		
		for (var i = 1; i <= NbWeeks; i++) {
			 
			var getId = document.getElementById(year+"_span_swim_km_"+i)
			 
			var Distance = getId.getAttribute("data-distance");
	
			if (Distance!== null) {
				getId.innerHTML = "";
				getId.innerHTML = Distance+" km";
			}
		}
	}
	
	// OUTILS
	
	 function ExtractIntHour(duree){
		 
		 var hour = duree.substring(0,2);
		 var intHour = (parseFloat(hour));
		 
		 return intHour;
	 }
 
	function ExtractIntMin(duree){
		 
		 var min = duree.substring(3,5);
		 var intMin = (parseFloat(min));
		 
		 return intMin;
	 }
	
	function ExtractIntSec(duree){
		 
		 var sec = duree.substring(6,8);
		 var intSec = (parseFloat(sec));
		 
		 return intSec;
	}
	
	function add0time(x) {
		var t = String(x);
		var y = t.length;

		if (y == 2){

			var tt = x;
				
		        } else {
							var tt = "0"+x;
						}
		return tt;
	}
	