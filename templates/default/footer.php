<?php
// Read the license before changing the footer: www.opensolution.org/licenses.html
if( !defined( 'CUSTOMER_PAGE' ) )
  exit;
?>
      </div>
    </div>
  </div>

  <div id="foot"><?php // footer starts here ?>
    <footer>
      <div class="container">
        <div class="copy"><?php echo $config['foot_info']; ?></div>
        <nav class="options" aria-label="options">
          <ul>
            <li class="print"><a href="javascript:window.print();"><?php echo $lang['print']; ?><svg class="icon"><use xlink:href="#svg-print"></use></svg></a></li>
            <?php echo displayBackLink( ); // displaying back link ?>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</div>
<div id="powered">
  <div class="container">
    <a href="http://opensolution.org/"><img src="templates/<?php echo $config['skin']; ?>/img/powered.png" alt="Script logo" width="192" height="26" /></a>
  </div>
</div>

<script src="plugins/jquery.mobile-events.min.js"></script>
<script src="plugins/mmenu-light.js"></script>
<script src="core/libraries/quick.box.min.js"></script>

<svg width="0" height="0" display="none" xmlns="http://www.w3.org/2000/svg">
  <!-- SVG icons START -->
  <symbol viewBox="0 0 24 24" id="svg-arrowround">
    <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm0-2C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm2 12l-4.5 4.5 1.527 1.5L17 12l-5.973-6L9.5 7.5 14 12z"></path>
  </symbol>
  <symbol viewBox="0 0 24 24" id="svg-print">
    <path d="M14 20h-6v-1h6v1zm10-15v13h-4v6h-16v-6h-4v-13h4v-5h16v5h4zm-6 10h-12v7h12v-7zm0-13h-12v3h12v-3zm4 5.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5.224.5.5.5.5-.224.5-.5zm-6 9.5h-8v1h8v-1z"></path>
    <path d="M0 0h24v24H0z" fill="none"></path>
  </symbol>
  <!-- SVG icons END -->
</svg>

</body>
</html>