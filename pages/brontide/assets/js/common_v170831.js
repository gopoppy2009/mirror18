$(function () {
    'use strict';

    $(".menu_btn").on("click", function () {
        $(".menu_line").toggleClass("closed")
    });

    // h2
    $('.sec_01 h2').find('span').each(function (i) {
        $(this).css({
            'position': 'relative',
            'left': '100%',
            'opacity': 0
        });
        $(this).stop(true).delay(1500).delay(i * 100).animate({
            'left': 0,
            'opacity': 1
        }, 1000);
    });

    setPaging();

    function setPaging() {
        var numPage = $('section').length;
        console.log(numPage)
        var pageNow = 0;
        var pageNext = 0;
        var pagePrev = 0;
        var onWheel = false;
        var onAnimation = false; //애니매이션
        var direction = 0; // 1 : 다음페이지(down), -1 : 이전페이지(up)
        var timerId = '';

        showPage(1);

        $(window).on('mousewheel DOMMouseScroll', function (e) {
            console.log('onWheel');
            clearTimeout(timerId); //마우스휠 통제
            timerId = setTimeout(function () {
                onWheel = false;
            }, 100);
            if (onWheel === true || onAnimation === true) return false;
            onWheel = true;
            console.log('wheel start!');
            if (e.originalEvent.wheelDelta) { // 표준 브라우저
                direction = e.originalEvent.wheelDelta / -120;
            } else { // FF
                direction = e.originalEvent.detail / 3;
            }
            if (direction > 0) {
                showPage(pageNext);
            } else {
                showPage(pagePrev);
            }
            //console.log(direction);
        });

        function showPage(n) {
            if (pageNow === n) return false;
            if (n === 1) {
                $('.sec_01 h2').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translateX(0)'
                });
                $('.sec_01 .leaf_02').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'translateX(0) rotate(55deg)',
                });
                $('.sec_01 .leaf_03').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'translateX(0) rotate(-25deg)',
                });
                $('.sec_01 .leaf_04').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'translateX(0) rotate(25deg)',
                });
                $('.sec_01 .imgbox_01 .img_01').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.3) translateX(0%)',
                });
                $('.sec_02 h2').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'translateX(0)'
                });
                $('.sec_02 .leaf_05').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'rotate(180deg)',
                });
            }
            if (n === 2) {
                $('.sec_01 h2').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translateX(85%)'
                });
                $('.sec_01 .leaf_02').css({
                    'transition': 'transform .5s ease-in-out 0s',
                    'transform': 'translateX(-100%) rotate(45deg)',
                });
                $('.sec_01 .leaf_03').css({
                    'transition': 'transform .5s ease-in-out 0s',
                    'transform': 'translateX(-100%) rotate(-35deg)',
                });
                $('.sec_01 .leaf_04').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translateX(-100%) rotate(55deg)',
                });
                $('.sec_01 .imgbox_01 .img_01').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1) translateX(42%)',
                });
                $('.sec_02 h2').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'translateX(-20%)'
                });
                $('.sec_02 h3').find('span').each(function (i) {
                    $(this).css({
                        'position': 'relative',
                        'left': '100%',
                        'opacity': 0
                    });
                    $(this).stop(true).delay(1500).delay(i * 50).animate({
                        'left': 0,
                        'opacity': 1
                    }, 500);
                });
                $('.sec_02 .leaf_05').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(210deg)',
                });
                $('.sec_02 .leaf_06').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'translateX(0) rotate(30deg)',
                });
                $('.sec_02 .imgbox_02 .img_02').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.4) translateX(0%)',
                });
                $('.sec_03 .imgbox_03 .img_03').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.3)',
                });
            }
            if (n === 3) {
                $('.sec_02 h2').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'translateX(-2%)'
                });
                $('.sec_02 .leaf_05').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'rotate(180deg)',
                });
                $('.sec_02 .leaf_06').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translateX(-100%) rotate(80deg)',
                });
                $('.sec_02 .imgbox_02 .img_02').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.2) translateX(30%)',
                });
                $('.sec_03 h3').find('span').each(function (i) {
                    $(this).css({
                        'position': 'relative',
                        'left': '100%',
                        'opacity': 0
                    });
                    $(this).stop(true).delay(1500).delay(i * 50).animate({
                        'left': 0,
                        'opacity': 1
                    }, 500);
                });
                $('.sec_03 .imgbox_03 .img_03').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1)',
                });
            }
            if (pageNow !== 0) {
                onAnimation = true;
                $('section').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translate(' + (-(n - 1) * 100) + '% ,0)'
                }).one('transitionend', function () {
                    onAnimation = false;
                });
            }
            pageNow = n;
            pageNext = (n + 1) > numPage ? numPage : n + 1;
            pagePrev = (n - 1) < 1 ? 1 : n - 1;
        }
    }

    //    //    scroll
    //    var nowIdx = 0;
    //    var $pagination = $("header .pagination li a");
    //    var arr_sec_left = [];
    //
    //    $("section").each(function () {
    //        arr_sec_left.push($(this).offset().left);
    //    });
    //
    //    console.log(arr_sec_left);
    //
    //    $pagination.on("click", function (evt) {
    //
    //        var nowIdx = $pagination.index(this);
    //
    //        $("html, body").stop().animate({
    //            "scrollLeft": arr_sec_left[nowIdx] - 120
    //        }, 400);
    //
    //        evt.preventDefault();
    //    });
    //
    //    $(window).on("scroll", function () {
    //        var scrollW = $(this).scrollLeft();
    //
    //        for (var i = 0; i < $pagination.size(); i++) {
    //            if (scrollW >= arr_sec_left[i] - 121) {
    //                $pagination.eq(i).parent().addClass("on").siblings().removeClass("on");
    //            }
    //        }
    //    });

});
