<?php
if( !defined( 'ADMIN_PAGE' ) )
  exit;

if( !strstr( $_GET['p'], 'ajax-' ) ){
?>
  <div id="javascript" class="top-alert"><?php echo ( $config['admin_lang'] == 'pl' ? 'Włącz obsługę JavaScript w przeglądarce.' : 'Enable JavaScript in your web browser' ); ?></div>
  <script>
  document.getElementById( 'javascript' ).style.display = 'none';
  </script>
<?php
}
?>

<section id="header">
  <div id="top">
    <ul id="extend" class="menu">
      <li class="settings"><a href="#"><img src="templates/admin/img/settings.png" alt="<?php echo $lang['Settings']; ?>" /></a>
        <ul>
          <li><a href="?p=settings"><?php echo $lang['Settings']; ?></a></li>
          <li><a href="?p=logout"><?php echo $lang['Log_out']; ?></a></li>
        </ul>
      </li>
    </ul>
    <ul id="messages">
      <li class="notices"><a href="#" onclick="<?php if( isset( $_SESSION['sMessagesNotices'] ) ){ echo 'throwMessages( \'notices\' );'; } ?>return false;"><img src="templates/admin/img/bell.png" alt="<?php echo $lang['Messages']; ?>" /><strong><?php echo ( ( isset( $_SESSION['iMessagesNoticesNumber'] ) && isset( $_SESSION['sMessagesNotices'] ) ) ? $_SESSION['iMessagesNoticesNumber'] : 0 ); ?></strong></a>
        <section>
          <header><?php echo $lang['Messages']; ?></header>
          <div><span class="loading"></span></div>
        </section>
      </li>
      <?php if( isset( $_SESSION['sMessagesNews'] ) ){ ?>
      <li class="news"><a href="#" onclick="throwMessages( 'news' );return false;"><img src="templates/admin/img/news.png" alt="<?php echo $lang['News']; ?>" /><strong><?php echo ( isset( $_SESSION['iMessagesNewsNumber'] ) ? $_SESSION['iMessagesNewsNumber'] : 0 ); ?></strong></a>
        <section>
          <header><?php echo $lang['News']; ?></header>
          <div><footer class="loading"></footer></div>
        </section>
      </li>
      <?php } ?>
    </ul>
    <ul id="logo" class="menu">
      <!-- Don't delete or hide OpenSolution logo and links to www.OpenSolution.org -->
      <li><a href="http://opensolution.org"><img src="templates/admin/img/logo_os.png" alt="OpenSolution.org" width="138" height="50" /></a>
        <ul>
          <li><a href="http://opensolution.org/?p=support"><?php echo $lang['Support']; ?></a></li>
          <li><a href="<?php echo $config['manual_link']; ?>start"><?php echo $lang['Manual']; ?></a></li>
          <li><a href="http://opensolution.org/?p=licenses"><?php echo $lang['License']; ?></a></li>
        </ul>
      </li>
    </ul>
  </div>
  <header id="menu">
    <ul id="sections" class="menu">
      <li class="dashboard"><a href="?p="><?php echo $lang['Dashboard']; ?></a></li>
      <li class="pages"><a href="?p=pages"><?php echo $lang['Pages']; ?></a>
        <ul>
          <li><a href="?p=pages-form"><?php echo $lang['New_page']; ?></a></li>
        </ul>
      </li>
      <li class="sliders"><a href="?p=sliders"><?php echo $lang['Sliders']; ?></a>
        <ul>
          <li><a href="?p=sliders-form"><?php echo $lang['New_slider']; ?></a></li>
        </ul>
      </li>
      <li class="plugins"><a href="?p=plugins"><?php echo $lang['Plugins']; ?></a></li>
      <li class="tools"><a href="#"><?php echo $lang['Tools']; ?></a>
        <ul>
          <li><a href="?p=languages-form"><?php echo $lang['New_language']; ?></a></li>
          <li><a href="?p=languages"><?php echo $lang['Languages']; ?></a></li>
        </ul>
      </li>
    </ul>
    <?php echo listLanguagesMenu( ); ?>
  </header>
</section>