$(function () {
    'use strict';

    $(document).on('click', 'a[href="#"]', function (e) {
        e.preventDefault();
    });

    $('.menu_btn').on('click', function () {
        $('.menu_line').toggleClass('closed')
        $('div.gnb').toggleClass('closed')
        $('.header_imgbox').toggleClass('closed')
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
        });
        
        $('section').on('focusin', function () {
            var index = $('section').index($(this));
            showPage(index + 1);
        });

        function showPage(n) {
            if (pageNow === n) return false;
            if (n === 1) {
                $('#header .statusbox .status').css({
                    'transform': 'scaleX(0)'
                });
                $('header span.status:after').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scaleX(0)'
                });
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
                $('#header .statusbox .status').css({
                    'transform': 'scaleX(.125)'
                });
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
                $('.sec_03 .leaf_07').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(-55deg)',
                });
            }
            if (n === 3) {
                $('#header .statusbox .status').css({
                    'transform': 'scaleX(.25)'
                });
                $('.sec_02 h2').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translateX(-1%)'
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
                $('.sec_03 .leaf_07').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(-25deg)',
                });
                $('.sec_03 .imgbox_03 .img_03').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1)',
                });
            }
            if (n === 4) {
                $('#header .statusbox .status').css({
                    'transform': 'scaleX(.375)'
                });
                $('.sec_03 .leaf_07').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(-55deg)',
                });
                $('.sec_04 h2').css({
                    'opacity': '.2',
                    'transition': 'all 1.5s ease-in-out 0s',
                    'transform': 'translateX(0%)'
                });
                $('.sec_04 .imgbox_05').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translateX(0)',
                });
                $('.sec_04 .imgbox_05 .img_05').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.2) translateX(0)',
                });
                $('.sec_05 .leaf_08').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(85deg)',
                });
            }
            if (n === 5) {
                $('#header .statusbox .status').css({
                    'transform': 'scaleX(.5)'
                });
                $('.sec_04 h2').css({
                    'opacity': '1',
                    'transition': 'all 1.5s ease-in-out 0s',
                    'transform': 'translateX(43%)'
                });
                $('.sec_05 .leaf_08').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(55deg)',
                });
                $('.sec_04 .imgbox_05').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translateX(30%)'
                });
                $('.sec_04 .imgbox_05 .img_05').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.2) translateX(15%)',
                });
                $('.sec_05 h3').find('span').each(function (i) {
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
                $('.sec_05 p').css({
                    'transition': 'all 1.5s ease-in-out 0s',
                    'transform': 'translateX(0)'
                });
                $('.sec_06 .leaf_09').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(62deg)',
                });
                $('.sec_06 .imgbox_06 .img_06').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.4) translateX(15%)',
                });
            }
            if (n === 6) {
                $('#header .statusbox .status').css({
                    'transform': 'scaleX(.625)'
                });
                $('.sec_04 h2').css({
                    'opacity': '1',
                    'transition': 'all 1.5s ease-in-out 0s',
                    'transform': 'translateX(102%)'
                });
                $('.sec_05 .leaf_08').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(85deg)',
                });
                $('.sec_05 p').css({
                    'transition': 'all 1.5s ease-in-out 0s',
                    'transform': 'translateX(80%)'
                });
                $('.sec_06 h2').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translateX(0)',
                });
                $('.sec_06 .leaf_09').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(32deg)',
                });
                $('.sec_06 .imgbox_06 .img_06').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.2) translateX(0%)',
                });
                $('.sec_06 .imgbox_07').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translateX(0)',
                });
                $('.sec_06 .imgbox_07 .img_07').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.4)',
                });
                $('.sec_07 .leaf_10').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(90deg)',
                });
                $('.sec_07 .leaf_11').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(65deg)',
                });
            }
            if (n === 7) {
                $('#header .statusbox .status').css({
                    'transform': 'scaleX(.75)'
                });
                $('.sec_06 h2').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translateX(63%)',
                });
                $('.sec_06 .leaf_09').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(62deg)',
                });
                $('.sec_06 .imgbox_06 .img_06').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1) translateX(-15%)',
                });
                $('.sec_06 .imgbox_07').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'translateX(85%)',
                });
                $('.sec_06 .imgbox_07 .img_07').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.2)',
                });
                $('.sec_07 h3').find('span').each(function (i) {
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
                $('.sec_07 .leaf_10').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(120deg)',
                });
                $('.sec_07 .leaf_11').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(35deg)',
                });
                $('.sec_08 .imgbox_08 .img_08').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.4)',
                });
                $('.sec_08 .imgbox_09 .img_09').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.4)',
                });
            }
            if (n === 8) {
                $('#header .statusbox .status').css({
                    'transform': 'scaleX(.875)'
                });
                $('.sec_07 .leaf_10').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(90deg)',
                });
                $('.sec_07 .leaf_11').css({
                    'transition': 'transform 2s ease-in-out 0s',
                    'transform': 'rotate(65deg)',
                });
                $('.sec_08 .imgbox_08 .img_08').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.1)',
                });
                $('.sec_08 .imgbox_09 .img_09').css({
                    'transition': 'transform 1.5s ease-in-out 0s',
                    'transform': 'scale(1.1)',
                });
                $('.sec_08 h3').find('span').each(function (i) {
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
            }
            if (n === 9) {
                $('#header .statusbox .status').css({
                    'transform': 'scaleX(1)'
                });
                $('.sec_09 h3').find('span').each(function (i) {
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
});
