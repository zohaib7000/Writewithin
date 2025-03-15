<!DOCTYPE html>
<html lang="en">
<head>
    <title>Online Keyboards & Text Tools | Writewithin.com</title>
    <meta name="description" content="Type in any language with Writewithin.com! Use online keyboards for Korean, Chinese, Baybayin/Talalog & more, plus writing tools to boost productivity.">
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
                  <a href="<?=base_url('chinese-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/china.png');">
                    </label>
                    <span>Chinese Keyboard</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('baybayin-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/french.png');">
                    </label>
                    <span>Baybayin Keyboard</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('ukrainian-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/ukraine.png');">
                    </label>
                    <span>Ukrainian Keyboard</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('japanese-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/japan.png');">
                    </label>
                    <span>Japanese Keyboard</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('italian-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/italy.png');">
                    </label>
                    <span>Italian Keyboard</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('spanish-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/spanish.png');">
                    </label>
                    <span>Spanish Keyboard</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('swedish-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/sweden.png');">
                    </label>
                    <span>Swedish Keyboard</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('turkish-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/turkey.png');">
                    </label>
                    <span>Turkish Keyboard</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('online-korean-keyboard');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/korea.png');">
                    </label>
                    <span>Korean Keyboard</span>
                  </a>
                </li>
            </ul>
        </div>

        <div class="writewithin-tools-box">
            <h2>TextTools</h2>
            <ul>
                
                <li>
                  <a href="<?=base_url('combine-words');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/combine.png');">
                    </label>
                    <span>Combine Words</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('sentence-counter');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/sentence.png');">
                    </label>
                    <span>Sentence Counter</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('paragraph-counter');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/paragraph.png');">
                    </label>
                    <span>Paragraph Counter</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('line-counter');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/line.png');">
                    </label>
                    <span>Line Counter</span>
                  </a>
                </li>

                <li>
                  <a href="<?=base_url('reverse-text-generator');?>" class="icon_sty">
                    <label style="background-image: url('assets/images/reverse.png');">
                    </label>
                    <span>Reverse Text Generator</span>
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