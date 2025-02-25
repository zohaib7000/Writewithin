<meta name="language" content="English">
<link rel="canonical" href="<?=base_url(uri_string())?>">
<meta name="author" content="devaxe">
<meta name="viewport" content="width=device-width, initial-scale=1.0">	
<link rel="icon" type="image/x-icon" href="<?= base_url('assets/images/title-icon.png'); ?>">


<link rel="stylesheet" type="text/css" href="<?=base_url('assets/main.css')?>">
<?php
// mode chnanger
$this->load->library('session');
if ( !isset($_SESSION['keyboard_mode']) || empty($_SESSION['keyboard_mode']) ) 
{
	$_SESSION['mode']       = '';
	$_SESSION['mode_class'] = 'keyboard_mode_day';
}
else{
	$_SESSION['mode']       = $_SESSION['keyboard_mode'];
	$_SESSION['mode_class'] = 'keyboard_mode_night';
}

?>

