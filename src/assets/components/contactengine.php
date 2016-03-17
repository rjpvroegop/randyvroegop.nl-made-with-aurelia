<?php
 header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Key");
 header("Access-Control-Allow-Origin: *");

 $rest_json = file_get_contents("php://input");
 
 $jsonarray = json_decode($rest_json);
 
 $EmailFrom = "noreply@randyvroegop.nl";
 $EmailTo = "rjp.vroegop@gmail.com";
 $Subject = "email vanuit contact formulier randyvroegop.nl";

$Name = $jsonarray->{'naam'};
$Email= $jsonarray->{'email'};
$Message = $jsonarray->{'message'};


$returnarray = array();

// validation
$validationOK=true;

if($Name == "" || $Name == null){
  $validationOK = false;
  array_push($returnarray, "name is empty");
}

if($Email == "" || $Email == null){
  $validationOK = false;
  array_push($returnarray, "email is empty");
}

if($Message == "" || $Message == null){
  $validationOK = false;
  array_push($returnarray, "message is empty");
}

if (!$validationOK) {
  	array_push($returnarray, "not validated");
}

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$Email>");

// redirect to success page 
if ($success){
  echo json_encode(array('verzonden' => True));
}
else{
  echo json_encode(array('verzonden' => False));
}

?>
