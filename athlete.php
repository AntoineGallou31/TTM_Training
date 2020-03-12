<?php 
session_start();
if (!isset($_SESSION['login'])) {
    header ('Location: http://training.triathlontoulousemetropole.com/');
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
<link rel="shortcut icon" href="CSS/Pictures/favicon.ico" type="image/x-icon">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<link rel='stylesheet' href='CSS/stylemain.css'/>
<link rel='stylesheet' href='CSS/AddActivity.css'/>
<link rel='stylesheet' href='CSS/ShowActivity.css'/>
<link rel='stylesheet' href='CSS/Calendar.css'/>
<link rel='stylesheet' href='CSS/ResponsiveCSS/Laptops.css'/>
<link rel='stylesheet' href='CSS/ResponsiveCSS/Phones.css'/>
<link rel='stylesheet' href='CSS/ResponsiveCSS/Screen19.css'/>
<link rel='stylesheet' href='CSS/ResponsiveCSS/Screen22.css'/>
<link rel='stylesheet' href='CSS/ResponsiveCSS/Small_laptop.css'/>
<link rel='stylesheet' href='CSS/ResponsiveCSS/Tablets.css'/>


<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>

<title>TTM Training</title>

</head>
<body id="body">
	<header>
		<div id="Logo">
			<img alt="Logo TTM" src="/CSS/Pictures/TTM_2.png" id="ImgTTM">
  			<div id="logotext">TRAINING</div>
		</div>
		
		<div id="user_infos">
			<div id="user_Name">
				<input type="hidden" id="user_mail" name="userMail" value="<?php echo htmlentities(trim($_SESSION['login'])); ?>">
				<span id="user_prenom"></span>
				<span id="user_nom"></span>
				<input type="hidden" id="user_id" value="" onChange="afficheAthleteSidebar()">
				
				<span id="user_id"></span>
			</div>
			<div id="deconnexion"><a href="deconnexion.php"><img alt="imageconnexion" src="CSS/Pictures/logout_icon.png" id="imageconnexion" title="Se d&eacute;connecter"></a></div>
		</div>
		
	</header>
	
	<div id="main">
	
	<div id="loader"></div>
	
	<div class="menu">
     	<ul class="menu-options">
            <li class="menu-option">Ajouter</li>
            <li class="menu-option">Copier</li>
            <li class="menu-option">Coller</li>
            <li class="menu-option">Modifier</li>
            <li class="menu-option">Supprimer</li>
        </ul>
	</div>

	<div id="BackgroundOpacity"></div>
	
	<div id="MainCalendar">
	<div id="topCalendar"> 
		<div id="ActiveWeek">
			<a id="ActiveWeeklink" href="#NBweek">Semaine active</a>
		</div>
	
		
		<div id="changingMonth">
		
			<div id="leftArrow">
				<div id="TextChangingPreviousYear"></div>
				<img alt="goingPreviousYear" src="CSS/Pictures/arrow.png" id="IconLeftArrow">
		    </div>
		    
			<div id="changingMonth-content"></div>

			<div id="rightArrow">
				<div id="TextChangingNextYear"></div>
				<img alt="goingNextYear" src="CSS/Pictures/arrow.png" id="IconRightArrow">
			</div>
			
		</div>
		
		<div id="addActivite">
			<button id="btnAddActivity">Ajouter une activit&eacute;</button>
		</div>
	</div>
	

    <div id="IdmodalRepetition" class="modalRepetition">
    
    
      <div class="modalRepetition-content">
        <span class="close" onclick="document.getElementById('IdmodalRepetition').style.display='none'">&times;</span>
        
         <div id="ModalRepetitionChoice1Container">
         
        	<div id="ModalRepetitionChoice1Title">R&eacute;p&eacute;ter toutes les semaines</div>
        	
        	<div id="ModalRepetitionChoice2Title">Se termine</div>
        	
        	<div id="ModalRepetitionChoice2Input">
        		<div id="input1">
    	    		<input id="EndUntilWeek" name="WeekOrAfter" type="radio">
    	        	<label for="EndUntilWeek">Apr&egrave;s <input id="inputEndUntilWeek" type="number"min="1" max="100"value="10"> semaine(s) </label>
            	</div>
            	
            	<div id="input2">
    	        	<input id="EndAfterTime" type="radio"  name="WeekOrAfter" >
    	        	<label for="EndAfterTime">Apr&egrave;s le  
    	        		<input id="inputEndAfterTime" type="date">
    	        	</label>
            	</div>
            	
            	<div id="confirmOrcancelContainer">
            		<div id="ButtonCancelandConfirm">
            			<button id="CancelButton" value="Cancel">Annuler</button>
    
            			<button id="ConfirmButton" value="Confirm">Valider</button>
            		</div>
            	</div>
        	</div>
        </div>
      </div>
	</div>
	
	<div id="ShowActivity">
		<div id="id02" class="modal">
		<div class="modal-content animate">
		<form id="add_activity_form2">
			<span onclick="CloseShowWindows()" class="close" title="Close Modal">&times;</span>
			
			<div class="windowAddActivity">
				<div class="windowsTitle">
					<div class="windowsTitleContent">Modifier une activit&eacute;</div>
				</div>
				
				<div class="input_style_text">
    				<span class="input_style_title1" id="input_style_title01">Titre de l'activit&eacute;</span>
    				<input type="text" id="activityTitle1" class="activityTitleStyle" required>
				</div>
				
				<div class="input_style_radio">
    				<span class="input_style_title2" id="input_style_title02">Type d'activit&eacute;</span>
    				<div  class="activityInline">
        				<div class="element">
        					<input id="activityType01" name="act_type" type="radio" value="Entrainement" oninvalid="alert('Veuillez renseigner le type d\'activité');" required>
        					<label for="activityType01">Entrainement</label>
        				</div>
        				
        				<div class="element">
      						<input id="activityType02" name="act_type" type="radio" value="Competition"> 
        					<label for="activityType02">Comp&eacute;tition</label>
        				</div>
        				
      					<div class="element">
      						<input id="activityType03" name="act_type" type="radio" value="Test"> 
        					<label for="activityType03">Test</label>
        				</div>
    				</div>
				</div>
				
				<div class="input_style_radio">
    				<span class="input_style_title2" id="input_style_title03">Sport</span>
    				<div class="colum1">
        				<div class="element">
        				    <input id="activitySport01" name="act_sport" type="radio" value="Natation" oninvalid="alert('Veuillez renseigner le sport');" required>
        					<label for="activitySport01">Natation</label>
        				</div>
        				
        				<div class="element">
        					<input id="activitySport02" name="act_sport" type="radio" value="Cyclisme">
        					<label for="activitySport02">Cyclisme</label>
        				</div>
        				
        				<div class="element">
        					<input id="activitySport03" name="act_sport" type="radio" value="Course">
        					<label for="activitySport03">Course &agrave; pied</label>
        				</div>
        				
        				<div class="element">
        					<input id="activitySport04" name="act_sport" type="radio" value="Musculation"> 
        					<label for="activitySport04">Musculation</label>
        				</div>
            			    	
            				<div class="element">
            					<input id="activitySport05" name="act_sport" type="radio" value="Autres">  
            					<label for="activitySport05">Autres</label>
        				</div>
    				</div>
				</div>
				
				<div class="colum2">
    				<div  class="input_style_date">
        				<span class="input_style_title2" id="input_style_title04">Date</span>
        				<input type="date" id="activityDate0" required>
        				        				
    				</div>
    				
    				<div  class="input_style_time">
        				<span class="input_style_title2" id="input_style_title05">Dur&eacute;e</span>
        				<input type="time" id="activityDuration0">
        				
        				<span class="note"> HH:MM</span>
    				</div>
				</div>
				
				<div class="colum3">
    				<div class="input_style_text">
        				<span class="input_style_title2" id="input_style_title06">Distance</span>
        				<input type="text" id="activityDistance0">
        				
        				<span class="note"id="changeNode2"> kilom&egrave;tres</span>
    				</div>
    				
    				<div class="input_style_textunique" id="inputToHide2">
        				<span class="input_style_title2" id="input_style_title07">D&eacute;nivel&eacute;</span>
        				<input type="text" id="activityElevation0">
        				
        				<span class="note"> m&egrave;tres</span>
    				</div>
				</div>
				
				<div class="input_style_description" id="input_style_description_parent">
    				<span class="input_style_title2" id="input_style_title08">Descriptif</span>
    				<textarea id="activityDescription0" class="activityDescription_style" placeholder="Descriptif de la s&eacute;ance ou une note sur l'entrainement.."></textarea>
				</div>
				
				<input type="hidden" id="id_activity" name="id_activity" value="">
				
				<div id="input_submit">
					<input id="input_submit_modify_activity"type="button" name="Submit" value="Modifier l'activit&eacute;">
				</div>				
								
			</div>
		
		</form>
		
				<div id="delete_button_container">
					<button id="delete_button">Supprimer l'activit&eacute;</button>
			    </div>
		
		</div>
	
	</div>
	
	</div>
	
	<div id="id01" class="modal">
		<form class="modal-content animate" id="add_activity_form">
			<span id="CloseModalAddActivity" class="close" title="Close Modal">&times;</span>
			
			<div class="windowAddActivity">
				<div class="windowsTitle">
					<div class="windowsTitleContent">Ajouter une activit&eacute;</div>
				</div>
				
				<div class="input_style_text">
    				<span class="input_style_title1" id="input_style_title1">Titre de l'activit&eacute;</span>
    				<input list="datalist" type="text" id="activityTitle" class="activityTitleStyle" autocomplete="off" required>
    				<datalist id="datalist">
					  <option value="Footing">
					  <option value="Natation">
					  <option value="Sortie vélo">
					  <option value="Séance CAP">
					</datalist>
				</div>
				
				<div class="input_style_radio">
    				<span class="input_style_title2" id="input_style_title2">Type d'activit&eacute;</span>
    				<div  class="activityInline">
        				<div class="element">
        					<input id="activityType1" name="act_type" type="radio" value="Entrainement" oninvalid="alert('Veuillez renseigner le type d\'activité');" required>
        					<label for="activityType1">Entrainement</label>
        				</div>
        				
        				<div class="element">
      						<input id="activityType2" name="act_type" type="radio" value="Competition"> 
        					<label for="activityType2">Comp&eacute;tition</label>
        				</div>
        				
      					<div class="element">
      						<input id="activityType3" name="act_type" type="radio" value="Test"> 
        					<label for="activityType3">Test</label>
        				</div>
    				</div>
				</div>
				
				<div class="input_style_radio">
    				<span class="input_style_title2" id="input_style_title3">Sport</span>
    				<div class="colum1">
        				<div class="element">
        				    <input id="activitySport1" name="act_sport" type="radio" value="Natation" oninvalid="alert('Veuillez renseigner le sport');" required>
        					<label for="activitySport1">Natation</label>
        				</div>
        				
        				<div class="element">
        					<input id="activitySport2" name="act_sport" type="radio" value="Cyclisme">
        					<label for="activitySport2">Cyclisme</label>
        				</div>
        				
        				<div class="element">
        					<input id="activitySport3" name="act_sport" type="radio" value="Course">
        					<label for="activitySport3">Course &agrave; pied</label>
        				</div>
    				       				
        				<div class="element">
        					<input id="activitySport4" name="act_sport" type="radio" value="Musculation"> 
        					<label for="activitySport4">Musculation</label>
        				</div>
        				
           				<div class="element">
            					<input id="activitySport5" name="act_sport" type="radio" value="Autres">  
            					<label for="activitySport5">Autres</label>
        				</div>
    				</div>
				</div>
				
				<div class="colum2">
    				<div  class="input_style_date">
        				<span class="input_style_title2" id="input_style_title4">Date</span>
        				<input type="date" id="activityDate" required>
        				
        				<span title="Ajouter une r&eacute;currence" class="BtnRecurrenceStyle" id="BtnRecurrence1"><i class="fa fa-plus"></i></span>
        				
    				</div>
    				
    				<div  class="input_style_time">
        				<span class="input_style_title2" id="input_style_title5">Dur&eacute;e</span>
        				<input type="time" id="activityDuration" autocomplete="off">
        				
        				<span class="note"> HH:MM</span>
    				</div>
				</div>
				
				<div class="colum3">
    				<div class="input_style_text">
        				<span class="input_style_title2" id="input_style_title6">Distance</span>
        				<input type="text" id="activityDistance" autocomplete="off">
        				
        				<span class="note" id="changeNode"> kilom&egrave;tres</span>
    				</div>
    				
    				<div class="input_style_textunique" id="inputToHide">
        				<span class="input_style_title2" id="input_style_title7">D&eacute;nivel&eacute;</span>
        				<input type="text" id="activityElevation" autocomplete="off">
        				
        				<span class="note"> m&egrave;tres</span>
    				</div>
				</div>
				
				<div class="input_style_description">
    				<span class="input_style_title2" id="input_style_title8">Descriptif</span>
    				<textarea id="activityDescription" class="activityDescription_style" placeholder="Descriptif de la s&eacute;ance ou une note sur l'entrainement.."></textarea>
				</div>
				
				<input type="hidden" id="custMail" name="custMail" value="<?php echo htmlentities(trim($_SESSION['login'])); ?>">
				
				<div id="input_submit">
					<input id="input_submit_add_activity"type="submit" name="Submit" value="Ajouter l'activit&eacute;">
				</div>
				
			</div>
		</form>
	
	</div>
	
	<input type="hidden" id="user_Mail" name="userMail" value="<?php echo htmlentities(trim($_SESSION['login'])); ?>">		
		
	<div class="windows_Calendar">
	<div id="days_table">
		<table id="tbl1">
			<tr>
				<th></th>
			</tr>
		</table>
		
		<table id="tbl2">
			<tr>
				<th>Lundi</th>
				<th>Mardi</th>
				<th>Mercredi</th>
				<th>Jeudi</th>
				<th>Vendredi</th>
				<th>Samedi</th>
				<th>Dimanche</th>
			</tr>
		</table>
		
		<table id="tbl3">
			<tr>
				<th>R&eacute;capitulatif</th>
			</tr>
		</table>
		
		</div>	
		
	<div id="full_calendar">	
	
		<div id="left_table">	
		</div>
		
		<div id="center_table">			
		</div>
		
		<div id="right_table">
		</div>
		
	</div>

	
	</div>
	</div>
	</div>
	
	<footer>
	
	</footer>
	
		<script type="text/javascript" src="Javascript/athlete_modify.js"></script>
		<script type="text/javascript" src="Javascript/athlete_activity.js"></script>
		<script type="text/javascript" src="Javascript/athlete_main2.js"></script>		
		<script type="text/javascript" src="Javascript/athlete_recap.js"></script>	
		<script type="text/javascript" src="Javascript/athlete_main.js"></script>
		
</body>
</html>