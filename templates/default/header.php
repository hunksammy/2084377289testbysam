<?php
// More about design modifications - www.opensolution.org/docs/
if( !defined( 'CUSTOMER_PAGE' ) )
  exit;
?>
<!DOCTYPE HTML>
<html lang="<?php echo $config['language']; ?>">
<head>
  <title><?php echo $config['title']; ?></title>
  <meta name="description" content="<?php echo $config['description']; ?>" />
  <meta name="generator" content="Quick.Cms v<?php echo $config['version']; ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link id="favicon" rel="shortcut icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="templates/<?php echo $config['skin']; ?>/style.css" />

  <script src="plugins/jquery.min.js"></script>
  <script src="core/common.js"></script>
  <script src="core/libraries/quick.slider.min.js"></script>
  <link rel="stylesheet" href="plugins/external.css" />
</head>
<body<?php echo $config['body_id_class_name']; ?>>
<?php 
echo displaySkipLinks( ); // displaying skip links
?>
<div id="container">
  <div id="header">
    <header class="header__navigation container">
      <div id="logo"><?php // logo and slogan ?>
        <div id="title"><a href="./<?php echo $config['logo_link']; ?>"><?php echo $config['logo']; ?></a></div>
        <div id="slogan"><?php echo $config['slogan']; ?></div>
      </div>
      <div class="header__menu container" id="menu-main">
        <?php echo $oPage->listPagesMenu( 1, Array( 'sClassName' => 'menu-top menu-hamburger', 'bHamburger' => true, 'iDepthLimit' => 0 ) ); // content of top menu ?>
      </div>
    </header>
    <?php echo $oSlider->listSliders( ); ?>
  </div>

  <div id="body">
    <div class="container">
      <div id="content">
