// event pada saat link di klik
$('.page-scroll').on('click', function(e){
    // console.log('ok');

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);
    
    
    // console.log(elemenTujuan.offset().top);

    // console.log($('html, body').scrollTop());

    // $('html, body').scrollTop(elemenTujuan.offset().top);

    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'swing');
    e.preventDefault();
});



//parallax
// about

$(window).on('load', function(){
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

    $('.jumbotron img').css({
        'transform' : 'translate(0px, '+wScroll/4+'%)'
    });

    $('.jumbotron h1').css({
        'transform' : 'translate(0px, '+wScroll/2+'%)'
    });

    $('.jumbotron p').css({
        'transform' : 'translate(0px, '+wScroll/1.2+'%)'
    });

    // portfolio
    if(wScroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function(i){
            setTimeout(function(){
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 300 * (i+1));
        });
        
    }
});