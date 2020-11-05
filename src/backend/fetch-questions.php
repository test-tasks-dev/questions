<?
header('Access-Control-Allow-Origin: *');
require_once('connection.php');
$questions = $connector->select("select question from questions", false);
$result = $questions->fetch_all();
echo json_encode($result);