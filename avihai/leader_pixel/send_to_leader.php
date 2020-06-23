<?php
header("Access-Control-Allow-Origin: http://avihai-ins.co.il/insurance/dist/");
?>


<xml>
<status>
OK
</status>
</xml>
<?php
$url = "https://www.leader.online/leader/post/post.php";
$fields = array();
foreach ($_POST as $key=>$value)
	$fields[$key] = $value;
$fields["campaignid"] = "5700"; // <- must be filled by admin
$fields["campaignpass"] = "123456CX"; // <- must be filled by admin
$options = array(
    "http" => array(
        "header"  => "Content-type: application/x-www-form-urlencoded\r\n",
        "method"  => "POST",
        "content" => http_build_query($fields),
    ),
);
$context = stream_context_create($options);
$result = file_get_contents($url, false, $context);
?>


