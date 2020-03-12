/**
 * 
 */
 	
const MOD_ACTIVITY = 'ModifyActivity';
const DEL_ACTIVITY = 'DeleteActivity';

function ModifyActivity() {

		Loader();
		ShowHideLoader(2);
	
		// Récupération de la valeur du input radio button pour le type d'activité
		for (var i = 1; i < 3; i++){
			if((document.getElementById('activityType0'+i)).checked){
				var radio_activityType = (document.getElementById('activityType0'+i)).value;
		 }
	}
		
		// Récupération de la valeur du input radio button pour le type de sport
		for (var i = 1; i <= 5; i++){
			if((document.getElementById('activitySport0'+i)).checked){
				var radio_activitySport = (document.getElementById('activitySport0'+i)).value;
		 }
	}
		
		var activityid = document.getElementById("id_activity").value;
		var activityTitle = document.getElementById("activityTitle1").value;
		
		var activityType = radio_activityType;
		var activitySport = radio_activitySport;
		var activityDate = document.getElementById("activityDate0").value;
		
		var activityDuration = document.getElementById("activityDuration0").value;
		var activityDistance0 = document.getElementById("activityDistance0").value;
		var activityDistance = virgule(activityDistance0);
		var activityElevation0 = document.getElementById("activityElevation0").value;
		var activityElevation = virgule(activityElevation0);
		var activityDescription = document.getElementById("activityDescription0").value;
		
		if (activityDate !=="" && activityTitle !== undefined) {
			if (activityTitle !== undefined && activityTitle !== "") {
				
		ModifyAjaxActivity(
					activityid,
					activityTitle,
					activityType,
					activitySport, 
					activityDate, 
					activityDuration, 
					activityDistance, 
					activityElevation, 
					activityDescription);
			} else {
				var message = "Le titre de l'activité n'est pas défini"
				errorMessage(message);
			}
		} else {
			var message = "La date de l'activité n'est pas définie"
				errorMessage(message);
		}

	} 
	
	function ModifyAjaxActivity(activityid, activityTitle, activityType, activitySport, activityDate, activityDuration, activityDistance, activityElevation, activityDescription){
		var url = URL_CONTROL;
		
		var maRep = new XMLHttpRequest();
		maRep.open("POST", url, false);
		maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		maRep.onreadystatechange = function(){
			if (this.readyState === 4) {
				CloseShowWindows();
				
				Refresh();
								
				SuccessModifyActivity();
			}
		}
		
		maRep.send('action=' + MOD_ACTIVITY +
					'&activityid=' + activityid +
					'&activityTitle=' + activityTitle + 
					'&activityType=' + activityType + 
					'&activitySport=' + activitySport + 
					'&activityDate=' + activityDate + 
					'&activityDuration=' + activityDuration + 
					'&activityDistance=' + activityDistance + 
					'&activityElevation=' + activityElevation + 
					'&activityDescription=' + activityDescription);
	}
	
	function DeleteActivity() {
		
		Swal.fire({
			  title: "Etes-vous sûr de vouloir supprimer l'activité ?",
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  cancelButtonText: 'Annuler',
			  confirmButtonText: 'Oui'
			}).then((result) => {
				  if (result.value) {
			 var activityId = document.getElementById("id_activity").value;
						
			DeleteAjaxActivity(activityId);
				  }
		})
	
	}
	
	function DeleteAjaxActivity(activityId){
		var url = URL_CONTROL;
		
		var maRep = new XMLHttpRequest();
		maRep.open("POST", url, false);
		maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		maRep.onreadystatechange = function(){
			if (this.readyState === 4) {
				CloseShowWindows();
				
				Loader();
				ShowHideLoader(2);
				Refresh();
				
			}
		}
		
		maRep.send('action=' + DEL_ACTIVITY +
					'&activityId=' + activityId);
	}
	
	function DeleteAjaxActivityContextMenu(activityId){
		
		
		Swal.fire({
			  title: "Etes-vous sûr de vouloir supprimer l'activité ?",
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  cancelButtonText: 'Annuler',
			  confirmButtonText: 'Oui'
			}).then((result) => {
				  if (result.value) {
					
					var url = URL_CONTROL;
					
					var maRep = new XMLHttpRequest();
					maRep.open("POST", url, false);
					maRep.setRequestHeader("Content-type","application/x-www-form-urlencoded");
					maRep.onreadystatechange = function(){
						if (this.readyState === 4) {
							Loader();
							ShowHideLoader(2);
							CloseShowWindows();
							Refresh();						
						}
					}
					
					maRep.send('action=' + DEL_ACTIVITY +
								'&activityId=' + activityId);
					  }
			})
	}
	
	
	function CloseShowWindows() {
		
		document.getElementById('id02').style.display='none';

		clearModalModify();
	}
	
	function clearModalModify() {
		
		// Type 
		
		var activityType1 = document.getElementById("activityType01");	
		activityType1.checked = false;

		var activityType2 = document.getElementById("activityType02");
		activityType2.checked = false;
		
		var activityType3 = document.getElementById("activityType03");
		activityType3.checked = false;
		
		// Catégories
		
		for (var i = 1; i < 6; i++) {
			var activitySport = document.getElementById("activitySport0"+i);
			activitySport.checked = false;
		}

		var doc = document.getElementById("add_activity_form2");
		doc.reset();
		/*
		//Durée
		
		var activityDuration = document.getElementById("activityDuration0");

		activityDuration.value = '';
		
		//Distance
		
		var activityDistance = document.getElementById("activityDistance");

		activityDistance.value = '';
		
		//Denivelé
		
		var activityDevinele = document.getElementById("activityElevation0");

		activityDevinele.value = ''; 
		
		//Description

		var activityDistance = document.getElementById("activityDistance");

		activityDistance.value = '';*/
		
		var activityDescription = document.getElementById("activityDescription0");

		activityDescription.innerHTML = '';

	}