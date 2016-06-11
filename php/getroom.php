<?php
header('Access-Control-Allow-Methods: GET');  
include("functions.php");

if(isset($_GET['id'])){
	echo getRoomWithId(intval($_GET['id']));
}
?>
