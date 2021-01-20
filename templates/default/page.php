<?php 
// More about design modifications - www.opensolution.org/docs/
if( !defined( 'CUSTOMER_PAGE' ) )
  exit;

require_once 'templates/'.$config['skin'].'/header.php'; // include design of header
?>
<article id="page">
<?php
if( isset( $aData['sName'] ) ){ // displaying pages and subpages content

  // displaying page name
  echo '<h1>'.$aData['sName'].'</h1>';

  // displaying page tree (breadcrumb)
  echo isset( $aData['sPagesTree'] ) ? '<nav class="breadcrumb" aria-label="breadcrumb"><ol>'.$aData['sPagesTree'].'</ol></nav>' : null;

  // displaying images with type: left
  echo $oFile->listImages( $aData['iPage'], Array( 'iType' => 1 ) );

  // displaying images with type: right
  echo $oFile->listImages( $aData['iPage'], Array( 'iType' => 2 ) );

  // displaying full description
  echo '<div class="content">'.$aData['sDescriptionFull'].'</div>';
  
  // displaying images with type: gallery
  echo $oFile->listImages( $aData['iPage'], Array( 'iType' => 3 ) );

  // displaying files included to the page
  echo $oFile->listFiles( $aData['iPage'] );

  // displaying subpages list
  echo $oPage->listPages( $aData['iPage'] );
}
else{
  echo ( isset( $config['message'] ) ? $config['message'] : '<div class="msg error"><h1>'.$lang['Data_not_found'].'</h1></div>' ); // displaying 404 error or other message
}
?>
</article>
<?php
require_once 'templates/'.$config['skin'].'/footer.php'; // include design of footer
?>
