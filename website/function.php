<?php
function update($appId,$appName,$appVersion,$updateLog){
    require "./dbinfo.php";
    $conn = new mysqli($DB_HOST,$DB_USER,$DB_PASS);
    $sql = "UPDATE APP SET name = $appName , version = $appVersion , updatelog = $updateLog WHERE id = $appId;";
    if($conn->connect_error){
        die("Connection Failed:".$conn->connect_error);
        echo "Connection Failed:".$conn->connect_error;
    }else{
        if($conn->query($sql)===TRUE){
            echo TRUE;
        }else{
            echo FALSE;
        }
    }
}

function insert($appName,$appVersion,$updateLog){
    require "./dbinfo.php";
    $conn = new mysqli($DB_HOST,$DB_USER,$DB_PASS);
    $sql = "INSERT INTO APP(name,version,updatelog) VALUES( $appName , $appVersion , $updateLog );";
    if($conn->connect_error){
        die("Connection Failed:".$conn->connect_error);
        echo "Connection Failed:".$conn->connect_error;
    }else{
        if($conn->query($sql)===TRUE){
            echo TRUE;
        }else{
            echo FALSE;
        }
    }
}

function del($appId){
    require "./dbinfo.php";
    $conn = new mysqli($DB_HOST,$DB_USER,$DB_PASS);
    $sql = "DELETE FROM APP WHERE id = $appId;";
    if($conn->connect_error){
        die("Connection Failed:".$conn->connect_error);
        echo "Connection Failed:".$conn->connect_error;
    }else{
        if($conn->query($sql)===TRUE){
            echo TRUE;
        }else{
            echo FALSE;
        }
    }
}
?>