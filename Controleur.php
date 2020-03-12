<?php
header("access-control-allow-origin: *");

require 'myPDO.php';
require 'UserDAO.php';
require 'Pass_Hash.php';

if (isset($_REQUEST['action'])) {
    $action = $_REQUEST['action'];
    switch ($action) {
        case 'addNewUser':
            try{
                UserDAO::addNewUser($_REQUEST['lastName'], $_REQUEST['firstName'], $_REQUEST['email'], $_REQUEST['password']);
                echo 'Compte utilisateur cr&eacute;e avec succ&egrave;s';
            }catch (PDOException $e){
                echo $e->getMessage();
            }
            break;
            
        case 'checkEmailExist':
            $temp = UserDAO::checkEmailExist($_REQUEST['email']);
            if($temp == true){
                echo 1;
            }else {
                echo 0;
            }
            break;
            
        case 'connexionUser':
            $temp = UserDAO::connexionUser($_REQUEST['email'], $_REQUEST['pass']);
            echo $temp;
            break;
            
        default:
            echo 'erreur dans le controleur';
            break;
    }
}

?>