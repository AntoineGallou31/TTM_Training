<?php

class CalendarDAO{
    
// Insertion d'une activit�

    public static function addNewActivity($custMail, $activityTitle, $activityType, $activitySport, $activityDate, $activityDuration, $activityDistance, $activityElevation, $activityDescription){
        $connection = myPDO::Connect_PDO();
        try{
            $connection->beginTransaction();
            $sql = 'INSERT INTO tr_entrainements (user_mail, training_titre, training_type, training_categorie, training_date, training_duree, training_distance, training_denivele, training_description)
                    VALUES (:custMail, :activityTitle, :activityType, :activitySport, :activityDate, :activityDuration, :activityDistance, :activityElevation, :activityDescription)';
            $rs = $connection->prepare($sql);
            $rs->bindParam(':custMail', $custMail);
            $rs->bindParam(':activityTitle', $activityTitle);
            $rs->bindParam(':activityType', $activityType);
            $rs->bindParam(':activitySport', $activitySport);
            $rs->bindParam(':activityDate', $activityDate);
            $rs->bindParam(':activityDuration', $activityDuration);
            $rs->bindParam(':activityDistance', $activityDistance);
            $rs->bindParam(':activityElevation', $activityElevation);
            $rs->bindParam(':activityDescription', $activityDescription);
            $rs->execute();
            
        } catch(PDOException $e){
            $connection->rollBack();
            myPDO::Disconnect_PDO($rs, $connection);
            throw $e;
        } finally {
            myPDO::Disconnect_PDO($rs, $connection);
        }
    }
    
    public static function ModifyActivity($activityid, $activityTitle, $activityType, $activitySport, $activityDate, $activityDuration, $activityDistance, $activityElevation, $activityDescription){
        $connection = myPDO::Connect_PDO();
        try{
            $connection->beginTransaction();
            $sql = 'UPDATE tr_entrainements 
                    
                    SET training_titre = :activityTitle, 
                        training_type = :activityType, 
                        training_categorie = :activitySport,
                        training_date = :activityDate,
                        training_duree = :activityDuration,
                        training_distance = :activityDistance,
                        training_denivele = :activityElevation,
                        training_description = :activityDescription
                    
                    WHERE training_id = :activityid ';
                
            $rs = $connection->prepare($sql);
            $rs->bindParam(':activityid', $activityid);
            $rs->bindParam(':activityTitle', $activityTitle);
            $rs->bindParam(':activityType', $activityType);
            $rs->bindParam(':activitySport', $activitySport);
            $rs->bindParam(':activityDate', $activityDate);
            $rs->bindParam(':activityDuration', $activityDuration);
            $rs->bindParam(':activityDistance', $activityDistance);
            $rs->bindParam(':activityElevation', $activityElevation);
            $rs->bindParam(':activityDescription', $activityDescription);
            $rs->execute();
            
        } catch(PDOException $e){
            $connection->rollBack();
            myPDO::Disconnect_PDO($rs, $connection);
            throw $e;
        } finally {
            myPDO::Disconnect_PDO($rs, $connection);
        }
    }
    
    public static function DeleteActivity($activityId){
        $connection = myPDO::Connect_PDO();
        try{
            $connection->beginTransaction();
            $sql = 'DELETE FROM tr_entrainements 

                    WHERE training_id = :activityId ';
           
            $rs = $connection->prepare($sql);
            $rs->bindParam(':activityId', $activityId);
            $rs->execute();
            
        } catch(PDOException $e){
            $connection->rollBack();
            myPDO::Disconnect_PDO($rs, $connection);
            throw $e;
        } finally {
            myPDO::Disconnect_PDO($rs, $connection);
        }
    }
    
    public static function getAllActivities($user_mail) {
        try {
            $connection = myPDO::Connect_PDO();
            $sql = 'SELECT * FROM tr_entrainements
                WHERE user_mail = :user_mail
                ORDER BY training_date ASC;';
            $rs = $connection->prepare($sql);
            $rs->bindParam(':user_mail', $user_mail);
            $rs->execute();
            $data = $rs->fetchAll(PDO::FETCH_ASSOC);
            myPDO::Disconnect_PDO($rs, $connection);
        } catch (PDOException $e) {
            throw $e;
        }
        return $data;
    }

    
    public static function getShowingActivity($user_mail, $activityId) {
        try {
            $connection = myPDO::Connect_PDO();
            $sql = 'SELECT * FROM tr_entrainements
                WHERE user_mail = :user_mail AND training_id = :activityId ';
            $rs = $connection->prepare($sql);
            $rs->bindParam(':user_mail', $user_mail);
            $rs->bindParam(':activityId', $activityId);
            $rs->execute();
            $data = $rs->fetchAll(PDO::FETCH_ASSOC);
            myPDO::Disconnect_PDO($rs, $connection);
        } catch (PDOException $e) {
            throw $e;
        }
        return $data;
    }
    
    public static function getTrainerInfos($user_mail) {
        try {
            $connection = myPDO::Connect_PDO();
            $sql = 'SELECT * FROM tr_trainers
                WHERE tr_email = :user_mail';
            $rs = $connection->prepare($sql);
            $rs->bindParam(':user_mail', $user_mail);
            $rs->execute();
            $data = $rs->fetchAll(PDO::FETCH_ASSOC);
            myPDO::Disconnect_PDO($rs, $connection);
        } catch (PDOException $e) {
            throw $e;
        }
        return $data;
    }

    public static function getUserInfos($user_mail) {
        try {
            $connection = myPDO::Connect_PDO();
            $sql = 'SELECT * FROM tr_athlete
                WHERE athl_email = :user_mail';
            $rs = $connection->prepare($sql);
            $rs->bindParam(':user_mail', $user_mail);
            $rs->execute();
            $data = $rs->fetchAll(PDO::FETCH_ASSOC);
            myPDO::Disconnect_PDO($rs, $connection);
        } catch (PDOException $e) {
            throw $e;
        }
        return $data;
    }
    
    public static function getAthletes($user_id) {
        try {
            $connection = myPDO::Connect_PDO();
            $sql = 'SELECT * FROM tr_athlete
                WHERE id_trainer = :tr_id';
            $rs = $connection->prepare($sql);
            $rs->bindParam(':tr_id', $user_id);
            $rs->execute();
            $data = $rs->fetchAll(PDO::FETCH_ASSOC);
            myPDO::Disconnect_PDO($rs, $connection);
        } catch (PDOException $e) {
            throw $e;
        }
        return $data;
    }


    public static function SendNewDate($activityid, $activityDate) {
        $connection = myPDO::Connect_PDO();
        try{
            $connection->beginTransaction();
            $sql = 'UPDATE tr_entrainements
                
                    SET training_date = :activityDate
                
                    WHERE training_id = :activityid';
            
            $rs = $connection->prepare($sql);
            $rs->bindParam(':activityDate', $activityDate);
            $rs->bindParam(':activityid', $activityid);
            $rs->execute();
            
        } catch(PDOException $e){
            $connection->rollBack();
            myPDO::Disconnect_PDO($rs, $connection);
            throw $e;
        } finally {
            myPDO::Disconnect_PDO($rs, $connection);
        }
    }

}