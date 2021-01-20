<?php 
if( !defined( 'ADMIN_PAGE' ) )
  exit( 'Script by OpenSolution.org' );

require_once 'core/sliders-admin.php';

if( isset( $_POST['sDescription'] ) ){
  $iSlider = saveSlider( $_POST );
  if( isset( $_POST['sOptionList'] ) )
    header( 'Location: '.$config['admin_file'].'?p=sliders&sOption=save' );
  elseif( isset( $_POST['sOptionAddNew'] ) )
    header( 'Location: '.$config['admin_file'].'?p=sliders-form&sOption=save' );
  else
    header( 'Location: '.$config['admin_file'].'?p=sliders-form&sOption=save&iSlider='.$iSlider );
  exit;
}

if( isset( $_GET['iSlider'] ) && is_numeric( $_GET['iSlider'] ) ){
  $aData = throwSlider( $_GET['iSlider'] );
}

$sSelectedMenu = 'sliders';
require_once 'templates/admin/_header.php';
require_once 'templates/admin/_menu.php';
?>

<section id="body" class="sliders">

  <h1><?php echo ( isset( $aData['iSlider'] ) ) ? $lang['Sliders_form'] : $lang['New_slider']; ?></h1>
  <?php if( isset( $config['manual_link'] ) ){
    echo '<div class="manual"><a href="'.$config['manual_link'].'instruction#sliders-form" title="'.$lang['Help'].'" target="_blank"></a></div>';
  }
  if( isset( $_GET['sOption'] ) ){
    echo '<h2 class="msg">'.$lang['Operation_completed'].'</h2>';
  }?>

  <form action="?p=<?php echo $_GET['p']; ?>" enctype="multipart/form-data" name="form" method="post" class="main-form no-tabs">
    <fieldset>
      <input type="hidden" name="iSlider" value="<?php if( isset( $aData['iSlider'] ) ) echo $aData['iSlider']; ?>" />

      <?php if( isset( $aData['iSlider'] ) ){ ?>
      <ul class="options">
        <li class="icon delete"><a href="?p=sliders&amp;iItemDelete=<?php echo $aData['iSlider']; ?>" title="<?php echo $lang['Delete']; ?>" onclick="return del( )"><?php echo $lang['Delete']; ?></a></li>
      </ul>
      <?php } ?>
      <ul class="buttons">
        <li class="save"><input type="submit" name="sOption" class="main" value="<?php echo $lang['save']; ?>" /></li>
        <li class="options"><input type="submit" value="<?php echo $lang['save_add_new']; ?>" name="sOptionAddNew" />
          <ul class="buttons-list">
            <li class="btn-save-list"><input type="submit" value="<?php echo $lang['save_list']; ?>" name="sOptionList" /></li>
          </ul>
        </li>
      </ul>

      <ul id="tab-content" class="forms list">
        <?php if( !empty( $aData['iSlider'] ) ){ ?>
        <li>
          <label><?php echo $lang['Image']; ?></label>
          <select name="sFileName" class="file-from-server"><?php echo listSlidersFilesAdmin( ( !empty( $aData['sFileName'] ) ? $aData['sFileName'] : null ) ); ?></select>
        </li>
        <?php }
        else{ ?>
        <li class="slider-file">
          <label for="sFileName"><?php echo $lang['Image']; ?></label>
          <div class="file-server extended">
            <div>
              <input type="file" name="aFile" id="sFileName" data-form-check="ext;<?php echo $config['allowed_image_extensions']; ?>" data-form-if="true" /> <span class="ext"><?php echo str_replace( '|', ' | ', $config['allowed_image_extensions'] ); ?></span>
            </div>
            <div class="adv-file-server adv-field">
              <select name="sFileNameOnServer" id="sFileNameOnServer" class="file-from-server"><option value=""><?php echo $lang['or_choose_from_server']; ?></option><?php echo listSlidersFilesAdmin( ); ?></select>
            </div>
          </div>
          <script>$(function(){ $('.main-form').quickform({oCallbackBefore:checkSliderFields}); } )</script>
        </li>
        <?php } ?>
        <li>
          <label for="sDescription"><?php echo $lang['Description']; ?></label>
          <div class="extended description"><?php echo getTextarea( 'sDescription', isset( $aData['sDescription'] ) ? $aData['sDescription'] : null ); ?></div>
        </li>
        <li>
          <label for="iPosition"><?php echo $lang['Position']; ?></label>
          <input type="text" id="iPosition" name="iPosition" value="<?php echo isset( $aData['iPosition'] ) ? $aData['iPosition'] : 0; ?>" class="numeric" size="3" maxlength="4" />
        </li>
        <!-- tab content -->
      </ul>

      <h2 class="msg ext">
        <?php echo $lang['Need_more_ext']; ?>
      </h2>

      <ul class="buttons bottom">
        <li class="save"><input type="submit" name="sOption" class="main" value="<?php echo $lang['save']; ?>" /></li>
        <li class="options"><input type="submit" value="<?php echo $lang['save_add_new']; ?>" name="sOptionAddNew" />
          <ul class="buttons-list">
            <li class="btn-save-list"><input type="submit" value="<?php echo $lang['save_list']; ?>" name="sOptionList" /></li>
          </ul>
        </li>
      </ul>

    </fieldset>
  </form>

</section>
<script>
  $(function(){
    displayTabInit( checkPagesTab );
  });
</script>
<?php
require_once 'templates/admin/_footer.php';
?>
