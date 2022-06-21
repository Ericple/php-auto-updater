<?php
require "./dbinfo.php";
require "./function.php";


$POST_ID = isset($_POST["POST_ID"]) ?  htmlspecialchars($_POST["POST_ID"]) : null;
$appId = isset($_POST["appId"]) ?  htmlspecialchars($_POST["appId"]) : null;
$appname = isset($_POST["appname"]) ?  htmlspecialchars($_POST["appname"]) : null;
$appversion = isset($_POST["appversion"]) ?  htmlspecialchars($_POST["appversion"]) : null;
$updatelog = isset($_POST["updatelog"]) ?  htmlspecialchars($_POST["updatelog"]) : null;

?>