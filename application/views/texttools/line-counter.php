<!DOCTYPE html>
<html lang="en">
<head>
    <title>Text Line Counter</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <?php
      $this->load->view('include/headFiles.php');
      ?>
      <link rel="stylesheet" type="text/css" href="<?=base_url('assets/texttools_css/line-counter.css')?>">
</head>
<body class="<?=$_SESSION['mode']?>">
    <?php
    $this->load->view('include/header.php');
    ?>

<section class="main-line-counter-template">
      <div class="container">
            <div class="main-line-counter-title">
              <h1>Text Line Counter</h1>
              <p>Description Text Line Counter</p>
            </div>  
          <div class="main-line-counter-wrapper">

              <div class="line-counter-input">
                <textarea id="textArea" placeholder="Type something..."></textarea>
              </div>
              
              <div>
                <input type="checkbox" id="ignoreBlank"> Ignore Blank Lines
              </div>

              <div>
                <div id="count">Lines: 0</div>
              </div>

              <div class="line-counter-btn">
                <button id="countLines">Count Lines</button>
              </div>
              
              <div class="line-counter-output">
                <div id="lineNumbers"></div>
              </div>
              
              
              
              
          </div>
            
      </div>
    <div class="clear"></div>
</section>


<section class="content">
    <div class="container">
      <div id="about">
          <div class="about-paragraph">
            <h2>Text Line Counter</h2>
          </div>
      </div>
    </div>
    <div class="clear"></div>
</section>

<?php
$this->load->view('include/footer.php');  
?>
<script type="text/javascript" src="<?=base_url('assets/texttools_js/line-counter.js')?>"></script>
