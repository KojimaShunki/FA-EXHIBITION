'use strict';

// ハンバーガーメニュー

const humbergerMenu = document.querySelector('.humberger-menu');

const navi = document.getElementById('humberger-navigation');

const humbergerMenuSections = document.querySelectorAll('.humberger-menu-section');

humbergerMenu.addEventListener('click', function () {
  humbergerMenu.classList.toggle('active');
  navi.classList.toggle('active');
});

humbergerMenuSections.forEach((humbergerMenuSection) => {
  humbergerMenuSection.addEventListener('click', function () {
    humbergerMenu.classList.remove('active');
    navi.classList.remove('active');
  });
});



// スクロールすると画像拡大

$(window).scroll(function() {
  var scroll = $(window).scrollTop();//スクロール値を定義
//header-imgの背景

  if (window.matchMedia('(max-width: 900px)').matches) {
    //スマホ処理

    $('.header-img').css({
      transform: 'scale('+(100 - scroll/10)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
    });    
  } else if (window.matchMedia('(min-width:901px)').matches) {
    //PC処理

    $('.header-img').css({
      transform: 'scale('+(100 + scroll/10)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
      top: -(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
    });
  }
});



// スクロールするとheaderが見えるようになる

$(function(){
  var logo = $('.logo');
  var humbergerMenu = $('.humberger-menu');
  var sideBar = $('.sidebar');
  // ボタン非表示
  logo.hide();
  humbergerMenu.hide();
  sideBar.hide();
  // 520px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 520) {
      logo.fadeIn();
      humbergerMenu.fadeIn();
    } else {
      logo.fadeOut();
      humbergerMenu.fadeOut();
    }
  });


  // 画面下から#galleryまでの距離を取得
  let gallery_position = $('#gallery').offset().top - $(window).height();
  // 画面下から#accessまでの距離を取得
  let access_position = $('#access').offset().top - $(window).height();;
  
  // 1000px～4300px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(window).scrollTop() > gallery_position) {

      if ($(window).scrollTop() < access_position) {
        sideBar.fadeIn(500);
      } else {
        sideBar.fadeOut(500);
      }
    } else {
      sideBar.fadeOut(500);
    }

    

    
  });
  // pagetop.click(function () {
  //    $('body, html').animate({ scrollTop: 0 }, 500);
  //    return false;
  // });
});



// スクロールすると背景が変わる

$('.bg').hide();

$(window).scroll(function () {
  // スクロール位置を取得
  let scroll = $(window).scrollTop();
  // 画面下から#accessまでの距離を取得
  let access_position = $('#access').offset().top - $(window).height();
  // 画面下から#contactまでの距離を取得
  let contact_position = $('#contact').offset().top - $(window).height();

  // #accessが表示された場合
  if(scroll > access_position){
    // #contactが表示されるまでの間は、背景画像をfadeInで表示する
    if(scroll < contact_position){
      $('.bg').fadeIn(500);
    } else {
      $('.bg').fadeOut(500);
    }
  // #accessが表示される前の場合
  } else {
    // 背景画像を表示しない
    $('.bg').fadeOut(500);
  }
});



// スムーススクロール

$(function(){
  $('a[href^="#"]').click(function() {
  var speed = 1000;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $('body,html').animate({scrollTop:position}, speed, 'swing');
  return false;
  });
});



// スクロールしたらfadeinする

$(window).scroll(function() {
  $('.fadeConts').each(function() {
    // スクロールした距離を取得
    let scroll = $(window).scrollTop();

    // クラスの要素までの距離を取得
    let target = $(this).offset().top;

    // 画面の高さを取得
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css('opacity', '1');
      $(this).css('transform', 'translateY(0)');
    }
  });
});