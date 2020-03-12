<?php

class UserDAO{
    
    // INSCRIPTION
    
    public static function addNewUser($lastName, $firstName, $email, $password){
        $connection = myPDO::Connect_PDO();
        try{
            $connection->beginTransaction();
            $sql = 'INSERT INTO tr_athlete (athl_nom, athl_prenom, athl_email, athl_pass)
                    VALUES (:lastName, :firstName, :email, :password)';
            $rs = $connection->prepare($sql);
            $rs->bindParam(':lastName', $lastName);
            $rs->bindParam(':firstName', $firstName);
            $rs->bindParam(':email', $email);
            $rs->bindParam(':password', $password);
            $rs->execute();
            
        } catch(PDOException $e){
            $connection->rollBack();
            myPDO::Disconnect_PDO($rs, $connection);
            throw $e;
        } finally {
        myPDO::Disconnect_PDO($rs, $connection);
        }
    }
    
    public static function checkEmailExist($email){
        $connection = myPDO::Connect_PDO();
        $sql = 'SELECT * FROM tr_athlete WHERE athl_email = :email';
        $rs = $connection->prepare($sql);
        $rs->bindParam(':email', $email);
        $rs->execute();
        myPDO::Disconnect_PDO($rs, $connection);
        return !($rs->rowCount()==0);
    }
    
    // CONNEXION
    
    public static function connexionUser($email, $pass){
        try{
            $connection = myPDO::Connect_PDO();
            $sql = 'SELECT * FROM tr_athlete WHERE athl_email = :email;';
            $rs = $connection->prepare($sql);
            $rs->bindParam(':email', $email);
            $rs->execute();
            
            if($rs->rowCount() == 0){
                return 'erreur';
            }else {
                $reponse = $rs->fetch();
                $mpd = $reponse['athl_pass'];
                if($mpd == $pass){
                    return '0';
                }else {
                    return '1';
                }
            }
            myPDO::Disconnect_PDO($rs, $connection);
        }catch (PDOException $e){
            throw $e;
            myPDO::Disconnect_PDO($rs, $connection);
        }finally {
        myPDO::Disconnect_PDO($rs, $connection);
        }
        
    }
}

?>