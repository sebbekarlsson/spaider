<html>

	<header>
		<link rel="stylesheet" type="text/css" href="styles/style.css">
		<link href='http://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>
		<script type="text/javascript" src="apps/jquery.js"></script>
		<script type="text/javascript" src="apps/peopleslider.js"></script>
		<meta charset="utf-8">
	</header>

	<body align="center">
		<div class="navbar">
			<div class="navpart">
				<a href="index.php"><img src="images/spaiderlog.png"></a>
			</div>
			<div class="navpart">
				<ul>
					<li><a class="navbtn">Om</a></li>
					<li><a class="navbtn">Nyheter</a></li>
					<li><a class="navbtn">Referenser</a></li>
				</ul>
			</div>
			<div class="navpart">
				<ul>
					<li><a class="navbtn">Kontakta Oss</a></li>
				</ul>
			</div>
		</div>
		<div class="bannerholder" style="background-image:url(images/blurred.jpg);">
			<div class="banner">
				<?php
					include("modules/staff.php");
				?>
			</div>
		</div>
		<div class="text">
			<?php
				include("modules/slices.php");
			?>
		</div>
	</body>

	<footer>
	</footer>

</html>