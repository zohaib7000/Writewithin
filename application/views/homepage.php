<!DOCTYPE html>
<html lang="en">
<head>
    <title>Writewithin</title>
    <meta name="description" content="">
    <meta name="keywords" content="keyboards, texttools, korean keyboard, chinese keyboard, japanese keyboard, combine words, sentence counter, paragraph counter, word counter, character counter, line counter, text line counter">
    <?php
      $this->load->view('include/headFiles.php');
    ?>
</head>
<body>

<?php
  $this->load->view('include/header.php');
?>

<section class="writewithin-homepage-template">
  <div class="container">
      <div class="writewithin-wrapper">
        <div class="writewithin-tools-box">
            <h2>Keyboard Tools</h2>
            <ul>
                
                <li>
                  <a href="<?=base_url('korean-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/title-icon.png');">
                    </label>
                    <span>Korean Keyboard</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('chinese-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/title-icon.png');">
                    </label>
                    <span>Chinese Keyboard</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('japanese-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/title-icon.png');">
                    </label>
                    <span>Japanese Keyboard</span>
                  </a>
                </li>
            </ul>
        </div>

        <div class="writewithin-tools-box">
            <h2>TextTools</h2>
            <ul>
                
                <li>
                  <a href="<?=base_url('combine-words');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/title-icon.png');">
                    </label>
                    <span>Combine Words</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('sentence-counter');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/title-icon.png');">
                    </label>
                    <span>Sentence Counter</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('sentence-counter');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/title-icon.png');">
                    </label>
                    <span>Paragraph Counter</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('line-counter');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/title-icon.png');">
                    </label>
                    <span>Line Counter</span>
                  </a>
                </li>
            </ul>
        </div>
    </div>
  </div>
</section>

<?php
$this->load->view('include/footer.php');  
?>