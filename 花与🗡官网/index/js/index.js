
let num = false
$("#share-right-a").click(function () {

    if (num == false) {
        $("#share-right-a").animate({ "left": "0px" }, 1000)
        $(".share-right-one").animate({
            "right": "-80px"
        }, 1000)
        num = true
    }
    else {
        $("#share-right-a").animate({ "left": "80px" }, 1000)
        $(".share-right-one").animate({
            "right": "-210px"
        }, 1000)
        num = false
    }
})
// 分享出现和隐藏
let cont = false
$(".share-right-two").click(function () {
    if (cont == false) {

        $(".share-right-two-to>i").css({
            " animate": " name duration timing-function delay iteration-count direction fill-mode"

        })
        console.log(1111)
        cont = true
    }
})
// 图片旋转动画

var rotation2 = function () {
    $(".subject-two").rotate({
        angle: 0,
        animateTo: 360,
        callback: rotation2,
        easing: function (x, t, b, c, d) {        // t: current time, b: begInnIng value, c: change In value, d: duration
            return c * (t / d) + b;
        }
    });
}
rotation2();



