<!DOCTYPE html>
<html lang="en">
<head>
    <title>Combine Words</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <?php
      $this->load->view('include/headFiles.php');
      ?>
      <link rel="stylesheet" type="text/css" href="<?=base_url('assets/texttools_css/combine-words.css')?>">
</head>
<body class="<?=$_SESSION['mode']?>">
    <?php
    $this->load->view('include/header.php');
    ?>

<section class="main-combine-words-template">
      <div class="container">
            <div class="main-combine-words-title">
              <h1>Combine Words</h1>
              <p>Description Combine Words</p>
            </div>  
          <div class="main-combine-words-wrapper">

              <div class="combine-words-input">
                <textarea class="box-1" placeholder="Words"></textarea>
                <textarea class="box-2" placeholder="Words"></textarea>
                <textarea class="box-3" placeholder="Words"></textarea>
              </div>
              
              <div class="combine-words-btn">
                <button class="combine-no-space">Combine Without Space</button>
                <button class="combine-with-space">Combine With Space</button>
              </div>
              
              <div class="combine-words-output">
                <textarea class="combine-output"></textarea>
              </div>
          </div>
            
      </div>
    <div class="clear"></div>
</section>


<section class="content">
    <div class="container">
      <div id="about">
          <div class="about-paragraph">
            <h2>Combine Words</h2>
          </div>
      </div>
    </div>
    <div class="clear"></div>
</section>

<?php
$this->load->view('include/footer.php');  
?>
<script type="text/javascript" src="<?=base_url('assets/texttools_js/combine-words.js')?>"></script>
