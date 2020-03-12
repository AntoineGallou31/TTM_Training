<?php
class myPDO{
    const DB_NAME = 'triathlohtou';
    const HOST = 'mysql55-127.pro';
    const USER = 'triathlohtou';
    const PASSWORD = 'tri4tou';
    const PORT = '3306';
    
    public static function Connect_PDO(){
        $dns = 'mysql:host=' . self::HOST . ';dbname=' . self::DB_NAME . ';port="' . self::PORT;
        try{
            $connection = new PDO($dns, self::USER, self::PASSWORD);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e){
            throw $e;
        }
        return $connection;
    }
    
    public static function Disconnect_PDO($res, $PDO){
        $res->closeCursor();
        unset($PDO);
    }
}
?>