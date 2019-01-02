'use strict';

$(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
});

//해더
$('#header .util_menu .list .item > a').on('mouseenter focus', function () {
    if ($(window).width() <= 850) return false;
    if ($(this).parent().find('li').length > 0) {
        $('#header .util_menu .list .item .depth2_menu').css({
            'display': 'none'
        });
        $(this).next().children('.depth2_menu').css({
            'display': 'block'
        });
    } else {
        $('#header .util_menu .list .item .depth2_menu').css({
            'display': 'none'
        });
    }
});
$('header .util_menu .list .item > a').on('mouseleave', function () {
    if ($(window).width() <= 850) return false;
    $('#header .util_menu .list .item .depth2_menu').css({
        'display': 'none'
    });
});

//슬라이드
$.fn.setImageSlide = function (options) {
    var settings = $.extend({
        slideFirst: 1,
        isTimerOn: true,
        timerSpeed: 3000
    }, options);

    this.each(function () {
        var $selector = $(this);
        var numSlide = $selector.find('ul.slide li').length;
        var slideNow = 0;
        var slideNext = 0;
        var slidePrev = 0;
        var slideFirst = settings.slideFirst;
        var timerId = '';
        var timerSpeed = settings.timerSpeed;
        var isTimerOn = settings.isTimerOn;
        var onPlaying = false;
        var startX = 0;
        var startY = 0;
        var delX = 0;
        var delY = 0;
        var offsetX = 0;
        var isDrag = false;
        var direction = '';

        // 초기화
        if (isTimerOn === true) {
            $selector.find('p.control a.play').addClass('on');
        } else {
            $selector.find('p.control a.play').removeClass('on');
        }

        showSlide(slideFirst);

        $selector.find('p.control a.prev').on('click', function () {
            $(this).stop(true).animate({
                'left': '5px'
            }, 50).animate({
                'left': '10px'
            }, 100);
            showSlide(slidePrev, 'prev');
        });
        $selector.find('p.control a.next').on('click', function () {
            //console.log('h')
            $(this).stop(true).animate({
                'right': '5px'
            }, 50).animate({
                'right': '10px'
            }, 100);
            showSlide(slideNext, 'next');
        });
        $selector.find('p.control a.play').on('click', function () {
            if (isTimerOn === true) {
                clearTimeout(timerId);
                isTimerOn = false;
                $(this).removeClass('on');
            } else {
                timerId = setTimeout(function () {
                    showSlide(slideNext, 'next');
                }, timerSpeed);
                isTimerOn = true;
                $(this).addClass('on');
            }
        });

        // mobile swipe
        $selector.find('ul.slide').on('touchstart', function (e) {
            isDrag = true;
            clearTimeout(timerId);
            startX = e.originalEvent.touches[0].clientX;
            startY = e.originalEvent.touches[0].clientY;
            //console.log(startX + ' / ' + startY);
        });

        document.addEventListener('touchmove', function (e) {
            if (isDrag === false) return false;
            delX = e.touches[0].clientX - startX;
            delY = e.touches[0].clientY - startY;
            if (direction === '') {
                console.log('none'); //아직 아무것도 아닌 상태
                if (Math.abs(delX) > 5 && Math.abs(delY) < 5) {
                    direction = 'horizon';
                } else if (Math.abs(delX) < 5 && Math.abs(delY) > 5) {
                    direction = 'vertical';
                }
            } else if (direction === 'vertical') {
                console.log('vertical');
                delX = 0;
                delY = 0;
            } else if (direction === 'horizon') {
                console.log('horizon');
                console.log(delX)
                //                if ((delX < 0 && slideNow === numSlide) || (delX > 0 && slideNow === 1)) {
                //                    delX = delX / 5;
                //                }
                $selector.find('ul.slide').css({
                    'left': (offsetX + delX) + 'px'
                });

            }
        }, {
            passive: false
        });

        $(document).on('touchend', function () {
            if (isDrag === true) {
                if (delX < -10) {
                    showSlide(slideNext, 'next');
                } else if (delX > 10) {
                    showSlide(slidePrev, 'prev');
                } else {
                    showSlide(slideNow);
                }
            }
            isDrag = false;
            direction = '';
        });

        // 공통함수
        function showSlide(n, type) {
            if (slideNow === n || onPlaying === true) return false;
            clearTimeout(timerId);
            onPlaying = true;
            if (slideNow === 0) {
                reArrange(n);
            } else {
                onPlaying = true;
                $selector.find('ul.slide li').removeClass('on')
                if (type === 'next') {
                    $selector.find('ul.slide').stop(true).animate({
                        'left': '-100%'
                    }, 500, function () {
                        reArrange(n);
                    });
                    $selector.find('ul.slide li:eq(' + (slideNext - 1) + ')').addClass('on')
                } else if (type === 'prev') {
                    $selector.find('ul.slide').stop(true).animate({
                        'left': '100%'
                    }, 500, function () {
                        reArrange(n);
                    });
                    $selector.find('ul.slide li:eq(' + (slidePrev - 1) + ')').addClass('on')
                }
            }

            function reArrange(n) {
                slideNow = n;
                slideNext = (n + 1) > numSlide ? 1 : n + 1;
                slidePrev = (n - 1) < 1 ? numSlide : n - 1;
                $selector.find('ul.slide').css({
                    'left': 0
                });
                $selector.find('ul.slide li:eq(' + (slidePrev - 1) + ')').css({
                    'left': '-100%'
                });
                $selector.find('ul.slide li:eq(' + (slideNow - 1) + ')').css({
                    'left': 0
                });
                $selector.find('ul.slide li:eq(' + (slideNext - 1) + ')').css({
                    'left': '100%'
                });
                if (isTimerOn === true) {
                    timerId = setTimeout(function () {
                        showSlide(slideNext, 'next');
                    }, timerSpeed);
                }
                onPlaying = false;
            }
        }

    }); // end of each
} // end of jquery function

$('#main-visual').setImageSlide({
    slideFirst: 1,
    isTimerOn: true,
    timerSpeed: 4000
});


//scroll
$.fn.setCheckShow = function (options) {
    var settings = $.extend({
        classPrefix: 'scroll'
    }, options);

    this.each(function () {
        var $selector = $(this)
        var scrollTop = 0;
        var offsetTop = 0;
        var windowHeight = 0;
        var elementHeight = 0;
        var startShow = 0;
        var endShow = 0;
        var classPrefix = settings.classPrefix;
        var isCounted = false;

        checkShow();
        $(window).on('scroll resize', function () {
            checkShow();
        });

        function checkShow() {
            scrollTop = $(document).scrollTop();
            offsetTop = $selector.offset().top;
            windowHeight = $(window).height();
            elementHeight = $selector.outerHeight();
            startShow = offsetTop - windowHeight;
            endShow = offsetTop + elementHeight;
            if (scrollTop > startShow) { //아래
                $selector.addClass(classPrefix + '-show');
            }
            if (scrollTop > endShow) { //위
                $selector.removeClass(classPrefix + '-show');
            }
        }
    }); // end of each
} // end of definition of method      

$('section').setCheckShow();

//푸터
$('#footer .seomenu_wrap .menu_list_wrap > li h2').on('click', function (e) {
    if ($(this).parent().find('li').length > 0 && $(window).width() <= 850) {
        e.preventDefault();
        var height = 0;
        $(this).parent().find('> ul > li').each(function () {
            height += $(this).outerHeight();
        });
        //console.log(height)
        $(this).parent().toggleClass('open');
        if ($(this).parent().attr('class') === 'open') {
            $(this).parent().find('> ul').css({
                'height': height + 'px'
            });
        }
        if ($(this).parent().attr('class') !== 'open') {
            $(this).parent().find('> ul').css({
                'height': 0
            });
        }
    }
});
