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