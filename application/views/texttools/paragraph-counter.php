<!DOCTYPE html>
<html lang="en">
<head>
    <title>Paragraph Counter</title>
    <meta name="description" content="">
    <meta name="keywords" content="paragraph counter">
    <?php
      $this->load->view('include/headFiles.php');
      ?>
      <link rel="stylesheet" type="text/css" href="<?=base_url('assets/texttools_css/paragraph-counter.css')?>">
</head>
<body class="<?=$_SESSION['mode']?>">
    <?php
    $this->load->view('include/header.php');
    ?>

<section class="main-paragraph-counter-template">
      <div class="container">
            <div class="main-paragraph-counter-title">
              <h1>Paragraph Counter</h1>
              <p>Description Paragraph Counter</p>
            </div>  
          <div class="main-paragraph-counter-wrapper">

              <div class="paragraph-counter-input">
                <textarea id="textInput" placeholder="Type or paste your text here..."></textarea>
              </div>
              
              <div class="paragraph-counter-btn">
                <button id="countButton">Count Text</button>
              </div>
              
              <div class="paragraph-counter-output">
                <div id="result"></div>
              </div>
              
          </div>
            
      </div>
    <div class="clear"></div>
</section>


<section class="content">
    <div class="container">
      <div id="about">
          <div class="about-paragraph">
            <h2>Paragraph Counter</h2>
          </div>
      </div>
    </div>
    <div class="clear"></div>
</section>

<?php
$this->load->view('include/footer.php');  
?>
<script type="text/javascript" src="<?=base_url('assets/texttools_js/paragraph-counter.js')?>"></script>
