<?php
header("access-control-allow-origin: *");

require 'myPDO.php';
require 'CalendarDAO.php';

if (isset($_REQUEST['action'])) {
    $action = $_REQUEST['action'];
    switch ($action) {
        case 'addNewActivity':
            try{
                CalendarDAO::addNewActivity($_REQUEST['custMail'], $_REQUEST['activityTitle'], $_REQUEST['activityType'], $_REQUEST['activitySport'], $_REQUEST['activityDate'], $_REQUEST['activityDuration'], $_REQUEST['activityDistance'], $_REQUEST['activityElevation'], $_REQUEST['activityDescription']);
                echo "Activite ajoute";
            }catch (PDOException $e){
                echo $e->getMessage();
            }
            break;
            
        case 'ModifyActivity':
            try{
                CalendarDAO::ModifyActivity($_REQUEST['activityid'], $_REQUEST['activityTitle'], $_REQUEST['activityType'], $_REQUEST['activitySport'], $_REQUEST['activityDate'], $_REQUEST['activityDuration'], $_REQUEST['activityDistance'], $_REQUEST['activityElevation'], $_REQUEST['activityDescription']);
                echo "L'activite a bien ete modifie";
            }catch (PDOException $e){
                echo $e->getMessage();
            }
            break;
            
        case 'getAllActivities':
            try {
                $resultsFromDB = CalendarDAO::getAllActivities($_REQUEST['user_mail']);
                // transformation du resultat avec array_values :
                $resultsAsArray = array_values($resultsFromDB);
                // transformation en objet JSON :
                $json = json_encode($resultsAsArray);
                // envoi de la réponse au client sous format JSON :
                echo $json;
            } catch (PDOException $e) {
                echo 'ERREUR interne SERVEUR : c\'est embarassant ! :(';
            }
            break;
  
            
        case 'getShowingActivity':
            try {
                $resultsFromDB = CalendarDAO::getShowingActivity($_REQUEST['user_mail'],$_REQUEST['activityId']);
                // transformation du resultat avec array_values :
                $resultsAsArray = array_values($resultsFromDB);
                // transformation en objet JSON :
                $json = json_encode($resultsAsArray);
                // envoi de la réponse au client sous format JSON :
                echo $json;
            } catch (PDOException $e) {
                echo 'ERREUR interne SERVEUR : c\'est embarassant ! :(';
            }
            break;
            
        case 'DeleteActivity':
            try{
                CalendarDAO::DeleteActivity($_REQUEST['activityId']);
                echo "L'activite a bien ete supprime";
            }catch (PDOException $e){
                echo $e->getMessage();
            }
            break;
            
        case 'getTrainerInfos':
            try{
                $resultsFromDB = CalendarDAO::getTrainerInfos($_REQUEST['user_mail']);
                // transformation du resultat avec array_values :
                $resultsAsArray = array_values($resultsFromDB);
                // transformation en objet JSON :
                $json = json_encode($resultsAsArray);
                // envoi de la réponse au client sous format JSON :
                echo $json;
            }catch (PDOException $e){
                echo $e->getMessage();
            }
            break;

            case 'getUserInfos':
                try{
                    $resultsFromDB = CalendarDAO::getUserInfos($_REQUEST['user_mail']);
                    // transformation du resultat avec array_values :
                    $resultsAsArray = array_values($resultsFromDB);
                    // transformation en objet JSON :
                    $json = json_encode($resultsAsArray);
                    // envoi de la réponse au client sous format JSON :
                    echo $json;
                }catch (PDOException $e){
                    echo $e->getMessage();
                }
                break;
            
        case 'getAthletes':
            try{
                $resultsFromDB = CalendarDAO::getAthletes($_REQUEST['user_id']);
                // transformation du resultat avec array_values :
                $resultsAsArray = array_values($resultsFromDB);
                // transformation en objet JSON :
                $json = json_encode($resultsAsArray);
                // envoi de la réponse au client sous format JSON :
                echo $json;
            }catch (PDOException $e){
                echo $e->getMessage();
            }
            break;
            
        case 'SendNewDate':
            try{
                CalendarDAO::SendNewDate($_REQUEST['activityid'], $_REQUEST['activityDate']);
                echo "L'activite a bien ete modifie";
            }catch (PDOException $e){
                echo $e->getMessage();
            }
            break;

    }
}

?>