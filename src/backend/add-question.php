<?
header('Access-Control-Allow-Origin: *');
$postData = json_decode(file_get_contents('php://input'));
$question = $postData->question;

require_once('connection.php');

$connector->insert("insert into `questions` (question) values (\"$question\")");