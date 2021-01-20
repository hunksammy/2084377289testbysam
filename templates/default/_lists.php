<?php
if( !defined( 'CUSTOMER_PAGE' ) )
  exit;

/**
* Displays page in the menu - default settings
* @return string
* @param array $aData
* @param array $aParametersExt
*/
function listPagesMenuView( $aData, $aParametersExt ){
  $sClassName = null;
  if( isset( $aParametersExt['iDepth'] ) )
    $sClassName .= 'level-'.$aParametersExt['iDepth'].'-el';
  if( isset( $aParametersExt['bSelected'] ) )
    $sClassName .= ' selected';
  return '<li'.( isset( $sClassName ) ? ' class="'.$sClassName.'"' : null ).'><a href="'.$aData['sLinkName'].'" class="menu__link" role="menuitem">'.$aData['sName'].'</a>'.$aParametersExt['sSubMenu'].'</li>';
} // end function listPagesMenu

/**
* Displays page in the list - default settings
* @return string
* @param array $aData
* @param array $aParametersExt
*/
function listPagesView( $aData, $aParametersExt ){
  $oFile = Files::getInstance( );
  //return '<li'.( ( $aParametersExt['iElement'] % 4 ) == 1 ? ' class="row"' : null ).'>'. // oldie
  return '<div class="page sub">'.
    $oFile->getDefaultImage( $aData['iPage'], Array( 'sLink' => ( !isset( $aParametersExt['bNoLinks'] ) ? $aData['sLinkName'] : null ), 'bNoLinks' => ( isset( $aParametersExt['bNoLinks'] ) ? true : null ) ) ). // image
    '<h2 class="title">'.( !isset( $aParametersExt['bNoLinks'] ) ? '<a href="'.$aData['sLinkName'].'">' : null ).$aData['sName'].( !isset( $aParametersExt['bNoLinks'] ) ? '</a>' : null ).'</h2>'. // name and link to page
    ( !empty( $aData['sDescriptionShort'] ) ? '<div class="description">'.$aData['sDescriptionShort'].'</div>' : null ). // short description here
    '</div>';
} // end function listPagesView

/**
* Displays images
* @return string
* @param array $aData
* @param array $aParametersExt
*/
function listImagesView( $aData, $aParametersExt ){
  //return '<li'.( ( $aParametersExt['iElement'] % 4 ) == 1 ? ' class="row"' : null ).'>'. // oldie
  return '<li>'.
  ( !isset( $aParametersExt['bNoLinks'] ) ? '<a href="files/'.$aData['sFileName'].'" class="quickbox['.( isset( $aData['iPage'] ) ? $aData['iPage'] : 0 ).']" title="'.$aData['sDescription'].'">' : null ).'<img src="files/'.$aData['iSize'].'/'.$aData['sFileName'].'" alt="'.( !empty( $aData['sDescription'] ) ? $aData['sDescription'] : null ).'" />'.( !isset( $aParametersExt['bNoLinks'] ) ? '</a>' : null ).( !empty( $aData['sDescription'] ) ? '<p>'.$aData['sDescription'].'</p>' : null ).'</li>';
} // end function listImagesView

/**
* Displays files
* @return string
* @param array $aData
* @param array $aParametersExt
*/
function listFilesView( $aData, $aParametersExt ){
  return '<li class="'.$aData['sIconStyle'].'"><a href="files/'.$aData['sFileName'].'">'.$aData['sFileName'].'</a>'.( !empty( $aData['sDescription'] ) ? '<p>'.$aData['sDescription'].'</p>' : null ).'</li>';
} // end function listFilesView

/**
* Displays sliders
* @return string
* @param array $aData
* @param array $aParametersExt
*/
function listSlidersView( $aData, $aParametersExt ){
  return '<li class="slide'.$aData['iSlider'].' '.( !empty( $aData['sFileName'] ) ? 'img' : 'no-img' ).'">'.( !empty( $aData['sFileName'] ) ? '<img src="files/'.$aData['sFileName'].'"'.( isset( $aData['sSrcSet'] ) ? ' srcset="'.$aData['sSrcSet'].'"' : null ).' alt="Slider '.$aData['iSlider'].'" />' : null ).( !empty( $aData['sDescription'] ) ? '<div class="description">'.$aData['sDescription'].'</div>' : null ).'</li>';
} // end function listSlidersView


/**
* Displays skip links
* @return string
*/
function displaySkipLinks( ){
  global $lang;
  return '<nav id="skiplinks" aria-label="skiplinks"><ul><li><a href="#head2">'.$lang['Skip_to_main_menu'].'</a></li><li><a href="#content">'.$lang['Skip_to_content'].'</a></li></ul></nav>';
} // end function displaySkipLinks

/**
* Displays back link
* @return string
*/
function displayBackLink( ){
  if( isset( $_SERVER['HTTP_REFERER'] ) && strstr( $_SERVER['HTTP_REFERER'], dirname( $_SERVER['SCRIPT_NAME'] ) ) ){
    return '<li class="back"><a href="javascript:history.back();"><svg class="icon" transform="rotate(180)"><use xlink:href="#svg-arrowround"></use></svg>'.$GLOBALS['lang']['back'].'</a></li>';
  }
} // end function displayBackLink

/**
* Displays hamburger for menu
* @return string
*/
function displayHamburger( ){
  global $lang;
  ob_start( );
  ?>
  <button class="hamburger hamburger--3dx" type="button">
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
    <span class="hamburger-label"><?php echo $lang['Menu']; ?></span>
  </button>
  <?php
  $sReturn = ob_get_contents( );
  ob_end_clean( );
  return $sReturn;
} // end function displayHamburger

?>