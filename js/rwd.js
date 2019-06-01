$(document).ready(function () {
    var wdth = $(window).width();
    if ( wdth <= 1360) {
        $('section').css('height', '650px');
        $('#b1').css('background-position', '0px -50px');
        $('#newsCont').css('top', '-30px');
        $('.introW').css('width', '70%');
        $('#aboutF07').css('left', '386px');
        $('#aboutF02').css('right', '35px');
        $('#aboutF01').css('top', '142px');
        $('#aboutCont').css('top', '48px');
        $('.newsModalbg').css({'background-position': '245px -2px'});
        $('.newsModalTitle').css({'background-position': '390px -3px'});
        $('.newsH4').css('top', '0px');
        $('.newsContent').css({'top': '214px', 'left': '203px'});
        $('.newsModalP').css({'font-size': '21px', 'margin': '26px 69px', 'line-height': '35px'});
        $('.newsModalDate').css({'font-size': '22px', 'bottom': '22px'});
        $('#page-top').css('overflow-x', 'hidden');
        $('.contentL').css({'left': '105px', 'top': '75px'});
        $('.contentR').css({'right': '146px', 'top': '164px'});
        $('.portfolio-modal .portfolio-modal-dialog .close-button').css('right', '2rem');
        $('.infoModalTitle').css({'top': '42px', 'left': '432px'});
        $('.infoPlayBg').css({'background-size': '255px', 'width': '272px', 'background-position': '11px 35px'});
        $('.infoModalShow').css({'height': '465px', 'left': '44px', 'top': '-38px'});
    }
    if (1280 < wdth) {
        $('.gameTurn').css('top', '150px');
        $('.introW').css('width', '80%');
        $('.block.right').css('right', '-119px');
        $('.rightInsideImg').css('right', '946px');
        $('.tabcontentR').css({'left': '151px', 'width': '255px'});
        $('.leftInsideImg').css('left', '980px');
        $('.tabcontent').css({'left': '1146px', 'width': '255px'});
        $('.tabcontent>p').css('font-size', '26px');
        $('.tabcontentR>p').css('font-size', '26px');
    }
});
