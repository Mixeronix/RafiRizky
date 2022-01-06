<?php
if(isset($_POST['checked'])){

	$state = $_POST['state'];

	if ($state == 'true'){
		$data['available'] = true;
	} else {
		$data['available'] = false;
	}

	$newJsonString = json_encode($data);
	file_put_contents('available.json', $newJsonString);
	// header('Location: index.html');
}
?>	

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Dashboard</title>

	</head>
	<body>
		<?php
$jsonString = file_get_contents('available.json');
$data = json_decode($jsonString, true);



?>
	<a href="index.html">
		<h1>Main Page</h1>
	</a>

	<form action="dashboard.php"  method="post">

		<input type="radio" value="true" name="state" <?php if ($data['available'] == true) print_r('checked') ?>>
		<label >Available</label><br>
		<input type="radio" value="false" name="state" <?php if ($data['available'] == false) print_r('checked') ?>>
		<label >Not Available</label><br>


	<br>

	<input type="submit" name="checked"/>
	</form>

	

	</body>
</html>
