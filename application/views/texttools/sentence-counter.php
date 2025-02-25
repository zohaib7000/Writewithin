<!DOCTYPE html>
<html lang="en">
<head>
    <title>Sentence Counter</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <?php
      $this->load->view('include/headFiles.php');
      ?>
      <link rel="stylesheet" type="text/css" href="<?=base_url('assets/texttools_css/sentence-counter.css')?>">
</head>
<body class="<?=$_SESSION['mode']?>">
    <?php
    $this->load->view('include/header.php');
    ?>

<section class="main-sentence-counter-template">
      <div class="container">
            <div class="main-sentence-counter-title">
              <h1>Sentence Counter</h1>
              <p>Description Sentence Counter</p>
            </div>  
          <div class="main-sentence-counter-wrapper">

              <div class="sentence-counter-input">
                <textarea id="textInput" placeholder="Type or paste your text here..."></textarea>
              </div>
              
              <div class="sentence-counter-output">
                <div id="result"></div>
              </div>
              
              <div class="sentence-counter-btn">
                <button id="countButton">Count Text</button>
              </div>
              
              
          </div>
            
      </div>
    <div class="clear"></div>
</section>


<section class="content">
    <div class="container">
      <div id="about">
          <div class="about-paragraph">
            <h2>Sentence Counter</h2>
          </div>
      </div>
    </div>
    <div class="clear"></div>
</section>

<?php
$this->load->view('include/footer.php');  
?>
<script type="text/javascript" src="<?=base_url('assets/texttools_js/sentence-counter.js')?>"></script>
