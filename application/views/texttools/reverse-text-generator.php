<!DOCTYPE html>
<html lang="en">
<head>
    <title>Reverse Text Generator - Mirror Text Generator</title>
    <meta name="description" content="">
    <meta name="keywords" content="flip text, mirror text generator, invert text, reverse text generator, mirror flip text, reverse text generator, mirror text generator, reverse text converter, reverse text translator, flip text generator, Reverse Words, Reverse Each Word’s Letters">
    <?php
      $this->load->view('include/headFiles.php');
      ?>
      <link rel="stylesheet" type="text/css" href="<?=base_url('assets/texttools_css/reverse-text-generator.css')?>">
</head>
<body class="<?=$_SESSION['mode']?>">
    <?php
    $this->load->view('include/header.php');
    ?>

<section class="main-reverse-text-template">
      <div class="container">
            <div class="main-reverse-text-title">
              <h1>Reverse Text Generator - Mirror Text Generator</h1>
              <p>Reverse Text Generator - Mirror Text Generator</p>
            </div>  
          <div class="main-reverse-text-wrapper">

              <div class="reverse-text-uploadbox">
                  <div class="reverse-file-input">
                      <label for="fileInput" class="file-label">Upload File</label>
                      <input type="file" id="fileInput">
                  </div>
                  <div>
                    <label class="clearAllBtn">Clear All</label>
                  </div>
                
              </div>
              
              
              <div class="reverse-text-input">
                <textarea id="textArea" placeholder="Type something..."></textarea>
              </div>

              <div class="reverse-text-btn">
                <button id="reverseBtn">Reverse</button>
                <button id="mirrorBtn">Mirror</button>
                <button id="flipTextBtn">Flip Text</button>
                <button id="reverseWordingBtn">Reverse Wording</button>
                <button id="flipWordingBtn">Flip Wording</button>
                <button id="reverseEachWordBtn">Reverse Each Word’s Letters</button>
              </div>
          </div>
            
      </div>
    <div class="clear"></div>
</section>


<section class="content">
    <div class="container">
      <div id="about">
          <div class="about-paragraph">
            <h2>Easy to Use</h2>
          </div>
      </div>
    </div>
    <div class="clear"></div>
</section>

<?php
$this->load->view('include/footer.php');  
?>
<script type="text/javascript" src="<?=base_url('assets/texttools_js/reverse-text-generator.js')?>"></script>
