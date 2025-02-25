<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Blog - Korean Keyboard</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <?php
      $this->load->view('include/headFiles.php');
    ?>
</head>

<body>

    <!-- Navbar -->

    <?php
    $this->load->view('include/header.php');
    ?>

    <section class="plblog_sec">
        <div class="container">
            <h1>Blog - Korean Keyboard</h1>
             
            <div class="plpost_wrapper">
                <a href="<?=base_url('')?>" class="pl_post">
                    <strong>Korean Keyboard</strong>
                </a> 
            </div>
        </div>
    </section>


    <?php
    $this->load->view('include/footer.php');  
    ?>


</body>
</html>