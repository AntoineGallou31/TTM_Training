<?php

// on teste si le visiteur a soumis le formulaire de connexion
if (isset($_POST['connexion']) && $_POST['connexion'] == 'Connexion') {
    if ((isset($_POST['login']) && !empty($_POST['login'])) && (isset($_POST['pass']) && !empty($_POST['pass']))) {
        
        $base = mysql_connect ('mysql55-127.pro', 'triathlohtou', 'tri4tou');
        mysql_select_db ('triathlohtou', $base);
        
        // on teste si une entr�e de la base contient ce couple login / pass
        $sql = 'SELECT count(*) FROM tr_athlete WHERE athl_email = "'.mysql_escape_string($_POST['login']).'" AND athl_pass = "'.mysql_escape_string(($_POST['pass'])).'"';
        $req = mysql_query($sql) or die('Erreur SQL !<br />'.$sql.'<br />'.mysql_error());
        $data = mysql_fetch_array($req);
        
        mysql_free_result($req);
        mysql_close();
        
        // si on obtient une reponse, alors l'utilisateur est un membre
        if ($data[0] == 1) {
            session_start();
            $_SESSION['login'] = $_POST['login'];
            $_SESSION['pass'] = $_POST['pass'];
            header('Location: athlete.php');
            exit();
        }
        // si on ne trouve aucune r�ponse, le visiteur s'est tromp� soit dans son login, soit dans son mot de passe
        elseif ($data[0] == 0) {
            
            $base = mysql_connect ('mysql55-127.pro', 'triathlohtou', 'tri4tou');
            mysql_select_db ('triathlohtou', $base);
            
            $sql = 'SELECT count(*) FROM tr_trainers WHERE tr_email = "'.mysql_escape_string($_POST['login']).'" AND tr_pass = "'.mysql_escape_string(($_POST['pass'])).'"';
            $req = mysql_query($sql) or die('Erreur SQL !<br />'.$sql.'<br />'.mysql_error());
            $data = mysql_fetch_array($req);
            
            mysql_free_result($req);
            mysql_close();
            
            if ($data[0] == 1) {
                session_start();
                $_SESSION['login'] = $_POST['login'];
                $_SESSION['pass'] = $_POST['pass'];
                header('Location: trainer.php');
                exit();
                
            } 
            
            elseif ($data[0] == 0) {
            
            $erreur = 'Votre email ou votre mot de passe est incorrect';
            echo "<script type='text/javascript'>alert('$erreur');</script>";
            } 
        }
        
        
        // sinon, alors la, il y a un gros probl�me :)
       
        else {
            $erreur = 'Probl�me dans la base de donn�es : plusieurs membres ont les m�mes identifiants de connexion.';
        }
    }
    
    else {
        $erreur = 'Au moins un des champs est vide.';
    }
}


?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
<link rel="shortcut icon" href="CSS/favicon.ico" type="image/x-icon">
<link rel='stylesheet' href='CSS/styleindex.css' />

<title>TTM Training</title>
</head>
<body>
 <div class="body">
 
 	<header>
 		<div id="LogoContainer">
 			<img alt="Logo TTM" src="CSS/Pictures/TTM_2.png" id="LogoTTM">
 		</div>
 		
 		<div id="LogoTextContainer">
  			<span>TRAINING</span>
  		</div>
  	</header>
 	
  <div id="content">
  
	<div id="aside">
		<span id="title_aside">TTM Training</span>
	</div>

	<div id="main">
			
		<form  method="post" id = "co_form" action="index.php">
			
			<div id="connexion">

				<label for="co_email">E-mail</label>
				<input type="email" id="co_email" name="login" required>
				
				<label for="co_password">Mot de passe</label>				
				<input type="password" id="co_password" name="pass" required>
				
				<input type="submit" name="connexion" value="Connexion">
				<a href="" style="display:none;">Mot de passe oubli� ?</a>
			</div>
		</form>
		
		<div id="btnInscription">
			<span id="no-account">Pas de compte ? Cliquez sur inscription</span>
			<br>
			<button id="b_co_inscription">Inscription</button>
		</div>
		
		<form  method="post" id = "ins_form">
			
			<div id="inscription">
			
				<img alt="Go back" src="CSS/Pictures/left-arrow.png" id="backImg">
				<label for="ins_lname">Nom</label>
				
				<input type="text" id="ins_lname" required>
				<label for="ins_fname">Prenom</label>
				
				<input type="text" id="ins_fname" required>
				<label for="ins_email">E-mail</label>
				
				<input type="email" id="ins_email" required>
				<label for="ins_pass">Mot de passe</label>
				
				<input type="password" id="ins_pass" required>
				<label for="ins_confpass">Confirmer le mot de passe</label>
				
				<input type="password" id="ins_confpass" required>
				<input type="submit" name="Submit" value="S'inscrire">
			</div>
		</form>		
	</div>
  </div>	
</div>

	<script type = "text/javascript" src = 'Javascript/Js_index.js'></script>
	<script type = "text/javascript" src = 'Javascript/Inscription.js'></script>
	<script type = "text/javascript" src = 'Javascript/Connexion.js'></script>
	
</body>
</html>