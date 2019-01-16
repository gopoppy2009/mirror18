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