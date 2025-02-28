<!DOCTYPE html>
<html lang="en">
<head>
    <title>Text Line Counter</title>
    <meta name="description" content="The world's best text line counter for students and web developers. Simply copy and paste your text into the box, click the 'Count Lines' button, and get results with or without blank lines.">
    <meta name="keywords" content="line counter, text line counter, line count, list counter, linecounter, line checker, poem line counter, line counters, lines counter, count lines, line counter with numbers">
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
              <p>Line counter tool is designed to count the number of lines in a document or text. This tool allows you to count all lines, including or excluding empty lines. Simply copy and paste your text into the input field, click on the "Count Lines" button and get the total number of lines in your text.</p>
            </div>  
          <div class="main-line-counter-wrapper">

              <div class="line-counter-input">
                <textarea id="textArea" placeholder="Type something..."></textarea>
              </div>
              
              <div class="checkbox-linecounter">
                <input type="checkbox" id="ignoreBlank"> Ignore Blank Lines
              </div>

              <div class="line-counter-btn">
                <button id="countLines">Count Lines</button>
              </div>

              <div>
                <div id="count">Lines: 0</div>
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
            <h2>Easy to Use</h2>
            <p>With the line counter tool, you can calculate the number of lines in your document. It's fast, and simple to use. </p>

            <h2>How to use this tool</h2>
            <ol>
                <li>Enter your text in the input box.</li>
                <li>If you want to keep empty lines, do not check the 'Ignore Blank Lines' option.</li>
                <li>If you want to remove empty lines, check the box.</li>
                <li>Then, click the 'Count Lines' button to see the total number of lines in your document.</li>
                <li>The numbers will show with each line separately as your result and you are done!</li>
            </ol>

            <h2>What are the uses of the Text Line counter?</h2>
            <p>Main usage of text Line counter is  in programming & development, writing & editing, data processing, and in general file management.</p>

            <h2>Use of Line Counter for Students</h2>
            <p>Text Line counter can be used by  students for many easy tasks such as essay & assignment formatting, coding & programming, poetry & creative writing, writing notes  & summarization.</p>
          </div>
      </div>
    </div>
    <div class="clear"></div>
</section>

<?php
$this->load->view('include/footer.php');  
?>
<script type="text/javascript" src="<?=base_url('assets/texttools_js/line-counter.js')?>"></script>
