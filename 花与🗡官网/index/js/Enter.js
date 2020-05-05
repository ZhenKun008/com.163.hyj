
var rotation2 = function () {
    $(".Share-eight>i").rotate({
        angle: 0,
        animateTo: 360,
        callback: rotation2,
        easing: function (x, t, b, c, d) {        // t: current time, b: begInnIng value, c: change In value, d: duration
            return c * (t / d) + b;
        }
    });
}
rotation2();

var rotation2 = function () {
    $(".warp-2-1-1").rotate({
        angle: 0,
        animateTo: 360,
        callback: rotation2,
        easing: function (x, t, b, c, d) {        // t: current time, b: begInnIng value, c: change In value, d: duration
            return c * (t / d) + b;
        }
    });
}
rotation2();


let one = document.querySelectorAll(".warp-4-five-one-two>.bn")
let two = document.querySelectorAll(".Warp-4-five-one-five>.vn")
// console.log(one)
for (let i = 0; i < one.length; i++) {
    one[i].onclick = function () {
        for (var u = 0; u < one.length; u++) {
            one[u].classList.remove("bn1");
            two[u].classList.add("bn2")
            two[u].classList.remove("bn3")
        }
        this.classList.add("bn1")
        two[i].classList.add("bn3")
    }

}
function getTop() {
    var top = $(document).scrollTop();
    if ($(document).scrollTop() > 500) {
        $(".gudin1").show();
        $(".gudin2").show()
    } else {
        $(".gudin1").hide();
        $(".gudin2").hide()
    }
    setTimeout(getTop);
}

getTop();

// 楼梯导航

let LOL = document.querySelectorAll(".gudin22")
for (var i = 0; i < LOL.length; i++) {
    LOL[i].onclick = function () {
        for (var u = 0; u < LOL.length; u++) {
            LOL[u].classList.remove("dn")
        }
        this.classList.add("dn")
    }
    LOL[0].onclick = function () {
        $('html,body').animate({
            scrollTop: 0
        }, 200, 'linear');
    }
    LOL[1].onclick = function () {
        $('html,body').animate({
            scrollTop: 1300
        }, 200, 'linear');
    }
    LOL[2].onclick = function () {
        $('html,body').animate({
            scrollTop: 2700
        }, 200, 'linear');
    }
    LOL[3].onclick = function () {
        $('html,body').animate({
            scrollTop: 4300
        }, 200, 'linear');
    }
    LOL[4].onclick = function () {
        $('html,body').animate({
            scrollTop: 5500
        }, 200, 'linear');
    }
    $(window).scroll(function () {
        var v = $(this).scrollTop();
        console.log(
            v
        )
        if (v >= 0) {
            $('.gudin2>.gudin22').eq(0).addClass('dn').siblings().removeClass('cn');
        }
        if (v >= 1300) {
            $('.gudin2>.gudin22').eq(1).addClass('dn').siblings().removeClass('cn');
        }
        if (v >= 2700) {
            $('.gudin2>.gudin22').eq(2).addClass('dn').siblings().removeClass('cn');
        }
        if (v >= 4300) {
            $('.gudin2>.gudin22').eq(3).addClass('dn').siblings().removeClass('cn');
        }
        if (v >= 5500) {
            $('.gudin2>.gudin22').eq(4).addClass('dn').siblings().removeClass('cn');
        }
    })
}


