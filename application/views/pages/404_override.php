<!DOCTYPE html>
<html lang='en'>
<head>
	<title>Contact us - Provide tools for everything</title>
	<meta charset="UTF-8">
	<meta name="description" content="Contact Devaxe - free online images tools provider">
	<meta name="keywords" content="contact, contact us, devaxe, free, online, Image, tools, provider">
	<?php
		$this->load->view('include/headFiles.php');
	?>
		
</head>


<body>
<?php
	$this->load->view('include/header.php');
?>
	<section class="error_sec">
			<h1>Not Found</h1>
			<p>Page you are looking for not available on this site.</p>
			<h4>
				<a href="<?=base_url('homepage')?>">Go to homepage</a>
			</h4>
	</section>
	<?php
	$this->load->view('include/footer.php');
	?>



</body>
</html>
