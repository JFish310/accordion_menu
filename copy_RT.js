// $(function () {
//     $('.p-gnavi__main-list').on('click', function () {
//     $(this).next().slideToggle();
//   });
// });




$(function () {
    $('.p-gnavi__main-list').hover( function () {
    $(this).children('.p-gnavi__sub').slideToggle();

    //openクラスをつける
    $(this).toggleClass("open");

    //クリックされていないp-gnavi__main-listのopenクラスを取る
    $('.p-gnavi__main-list').not(this).removeClass('open');

    // 一つ開くと他は閉じるように
    $('.p-gnavi__main-list').not($(this)).children('.p-gnavi__sub').slideUp();
  });
});

// $(function () {
//   $('.p-gnavi__main-list').on('click', function () {
//   $(this).children('.p-gnavi__sub').slideToggle();
//   //openクラスをつける
//   $(this).toggleClass("open");
//   //クリックされていないp-gnavi__main-listのopenクラスを取る
//   $('.p-gnavi__main-list').not(this).removeClass('open');

//   // 一つ開くと他は閉じるように
//   $('.p-gnavi__main-list').not($(this)).children('.p-gnavi__sub').slideUp();
// });
// });





// $(function () {
//   $('.ac-parent').on('click', function () {
//     $(this).next().slideToggle();
//     //openクラスをつける
//     $(this).toggleClass("open");
//     //クリックされていないac-parentのopenクラスを取る
//     $('.p-gnavi__main-list').not(this).removeClass('open');

//     // 一つ開くと他は閉じるように
//     $('.p-gnavi__main-list').not($(this)).next('.p-gnavi__sub').slideUp();
//   });
// });