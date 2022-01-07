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
		<a style="text-decoration: none; color: #025cd1" href="index.html">
			<h1>Main Page</h1>
		</a>

		<form action="dashboard.php" method="post">
			<input type="radio" value="true" name="state" id="true"
			<?php if ($data['available'] == true) print_r('checked') ?>> <label for="true">Available</label><br />
			<input type="radio" value="false" name="state" id="false"
			<?php if ($data['available'] == false) print_r('checked') ?>> <label for="false">Not Available</label><br />

			<br />

			<input type="submit" name="checked" style="	background-color: white !important;
	width: fit-content !important;
	text-decoration: none !important;
	padding: 0.5rem;
	border-radius: 0.3rem;" />
		</form>
	</body>
</html>
