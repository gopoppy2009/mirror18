//slides1
var nowIdx = 0;
var width = $(".slides1 > ul > li").width();
setInterval(function () {
    if (nowIdx > 1) {
        nowIdx = 0;
    } else {
        nowIdx++;
    }
    $(".slides1 > ul > li >.table_cell>p").removeClass("w3-animate-top");
    $(".slides1 > ul").animate({
        left: -nowIdx * width
    }, 1000).children('li').eq(nowIdx).find("p").addClass("w3-animate-top");
}, 4000);


//slides2
var nowIdx2 = 0;
setInterval(function () {
    $(".slides2 > ul > li").eq(nowIdx2).fadeOut(500);
    $(".slides2 > ul > li >.table_cell>p").removeClass("w3-animate-zoom");
    if (nowIdx2 > 1) {
        nowIdx2 = 0;
    } else {
        nowIdx2++;
    }
    $(".slides2 > ul > li").eq(nowIdx2).fadeIn(1000).find("p").addClass("w3-animate-zoom");
}, 4000);

//slides3
var $indicator = $(".slides-pagination > li > a");

var nowIdx3 = 0;
var oldIdx3 = nowIdx;

var setIndicator = function () {
    $indicator.eq(nowIdx3).parent().addClass("on").siblings().removeClass("on");
};

var moveFromRight = function () {
    setIndicator();

    $(".slides3 > ul > li").eq(nowIdx3).css({
        "left": "100%",
        "z-index": "300"
    });

    $(".slides3 > ul > li .table_cell").removeClass("w3-animate-btm")

    $(".slides3 > ul > li").eq(nowIdx3).stop().animate({
        left: 0
    }, 1000, function () {

        $(this).css({
            "z-Index": "200"
        });

        $(this).siblings().css({
            "left": "100%"
        });
    });

    $(".slides3 > ul > li").eq(nowIdx3).find(".table_cell").addClass("w3-animate-btm");
};

var moveFromLeft = function () {
    setIndicator();

    $(".slides3 > ul > li").eq(nowIdx3).css({
        "left": "-100%",
        "z-index": "300"
    });

    $(".slides3 > ul > li .table_cell").removeClass("w3-animate-btm")

    $(".slides3 > ul > li").eq(nowIdx3).stop().animate({
        left: 0
    }, 1000, function () {

        $(this).css({
            "z-Index": "200"
        });

        $(this).siblings().css({
            "left": "100%"
        });  
    });

    $(".slides3 > ul > li").eq(nowIdx3).find(".table_cell").addClass("w3-animate-btm");
};

var autoPlay = function () {
    intervalID = window.setInterval(function () {

        if (nowIdx3 > 1) {
            nowIdx3 = 0;
        } else {
            nowIdx3++;
        }

        moveFromRight();
    }, 4000);
};

var autoStop = function () {
    window.clearInterval(intervalID);
};

autoPlay();

$indicator.on("click", function (evt) {
    var tmpIdx3 = $indicator.index(this);

    oldIdx3 = nowIdx3;
    nowIdx3 = tmpIdx3;

    if (nowIdx3 > oldIdx3) {
        moveFromRight();
    } else if (nowIdx3 < oldIdx3) {
        moveFromLeft();
    }

    evt.preventDefault();

    autoStop();
});


// 2019-01-17 slide04
var slides4 = (function() {
    var root = $('.slides4');
    var item = $('.slides4__item');
    var indicator = $('.slides4__indicator');
    var idx = 0;
    var timer;
    var interval = 4000;

    (function init() {
        play();
        addEvent();
    })();

    function addEvent() {
        root.on('click', '.slides4__indicator', onClick);
        root.on('focusin', '.slides4__indicator, .slides4__button', onFocusin);
        root.on('focusout', '.slides4__indicator, .slides4__button', onFocusout);
    }

    function onClick(e) {
        var index = $(this).index();

        goto(index);

        e.preventDefault();
    }

    function onFocusin() {
        stop();
    }

    function onFocusout() {
        play();
    }

    function play() {
        timer = setInterval(next, interval);
    }

    function stop() {
        clearInterval(timer);
    }

    function next() {
        if(idx < item.length) {
            idx++
        } else {
            idx = 0;
        }

        draw();
    }

    function goto(number) {
        idx = number;

        draw();
    }

    function draw() {
        item.eq(idx).addClass('-active').siblings().removeClass('-active');
        indicator.eq(idx).addClass('-active').siblings().removeClass('-active');
    }

    return {
        play: play,
        stop: stop,
        next: next,
        goto: goto
    }
})();

/* tab */ 
$('.tabs').on('click', '.tabs__tab', function(e){
    e.preventDefault();
    var idx =  $(this).index();
    $(this).addClass('-active').siblings().removeClass('-active');
    $(this).parent().next().children().eq(idx).addClass('-active').siblings().removeClass('-active');

    $('.js-more-preview').each(function(index, el) {
        $(el).slick('refresh');
        $('.js-more-thumb').eq(index).slick('refresh');
    });

    $('.js-room-preview').each(function(index, el) {
        $(el).slick('refresh');
        $('.js-room-thumb').eq(index).slick('refresh');
    });
});

/* 슬라이드 */
$('.js-more-preview').each(function(key, item) {
    var previewId = 'more-preview-' + key;
    var thumbId = 'more-thumb-' + key;

    $(this).attr('id', previewId);
    $('.js-more-thumb').eq(key).attr('id', thumbId);

    $('#' + previewId).slick({
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '#' + thumbId,
        prevArrow: $('.pagination__button.-prev'),
        nextArrow: $('.pagination__button.-next')
    });

    $('#' + thumbId).on('init', function(event, slick) {
        $('.pagination__current').text(slick.currentSlide + 1);
        $('.pagination__total').text(slick.slideCount);
    })
    .slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#' + previewId,
        focusOnSelect: true
    })
    .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.pagination__current').text(nextSlide + 1);
    });
});

/* 룸페이지 슬라이드 */
$('.js-room-preview').each(function(key, item) {
    var previewId = 'room-preview-' + key;
    var thumbId = 'room-thumb-' + key;

    $(this).attr('id', previewId);
    $('.js-room-thumb').eq(key).attr('id', thumbId);

    $('#' + previewId).slick({
        swipe: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '#' + thumbId,
        nextArrow:'false',
        prevArrow:'false'
    });
    $('#' + thumbId).slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '#' + previewId,
        focusOnSelect: true
    });
});