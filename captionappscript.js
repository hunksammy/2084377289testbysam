function CopyToClipBoard(element) {
    var $blankInput = $("<input>");
    $("body").append($blankInput);
    $blankInput.val($(element).attr("data-link")).select();
    document.execCommand("copy");
    $blankInput.remove();
  }

  $('a').click(function(){
    CopyToClipBoard(this);
    $('.clipboard').addClass('active');
    setTimeout(function(){                      $('.clipboard').removeClass('active');
    },1000);
  });