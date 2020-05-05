
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
// 轮播图
let ul = document.querySelector(".news-two-lunbo-one>ul")
// console.log(ul)
let li = document.querySelectorAll(".news-two-lunbo-there>li")
let sliderWidth = "320px"
// console.log(li)
for (var u = 0; u < li.length; u++) {
    li[u].dataset.index = u
    li[u].onclick = function () {
        // console.log(11111)
        for (var i = 0; i < li.length; i++) {
            li[i].classList.remove("new-two-lunbo-two1")
            li[i].classList.add("new-two-lunbo-two")
        }
        this.classList.add("new-two-lunbo-two1")
        console.log(this.dataset.index)
        let index = this.dataset.index
        animate(ul, {
            marginLeft: -index * 320
        })
    }
}

// 点击切换的轮播图
let LunboShi = document.querySelector(".lunboshixian")
console.log(LunboShi)
let LunboDianji = document.querySelectorAll(".news-two-dianji>div")
console.log(LunboDianji)
for (var u = 0; u < LunboDianji.length; u++) {
    LunboDianji[u].dataset.index = u
    LunboDianji[u].onclick = function () {

        console.log(this.dataset.index)
        if (this.dataset.index == 0) {
            LunboDianji[0].classList.remove("news-two-dianji-one")
            LunboDianji[1].classList.remove("news-two-dianji-there1")
            LunboDianji[2].classList.remove("news-two-dianji-two1")
            LunboDianji[0].classList.add("news-two-dianji-one")

        }
        else if (this.dataset.index == 1) {
            LunboDianji[0].classList.remove("news-two-dianji-one")
            LunboDianji[1].classList.remove("news-two-dianji-there1")
            LunboDianji[2].classList.remove("news-two-dianji-two1")
            LunboDianji[1].classList.add("news-two-dianji-there1")

        }
        else if (this.dataset.index == 2) {
            LunboDianji[0].classList.remove("news-two-dianji-one")
            LunboDianji[1].classList.remove("news-two-dianji-there1")
            LunboDianji[2].classList.remove("news-two-dianji-two1")
            LunboDianji[2].classList.add("news-two-dianji-two1")
        }
        let index = this.dataset.index
        animate(LunboShi, {
            marginLeft: -index * 320
        })
    }
}
// 最难的地方
var prev = document.querySelector(".figure-one-two-one")
var next = document.querySelector(".figure-one-two-two")
// 获取需要变化的元素
var people = document.querySelectorAll(".figure-two-one>div")
var jianshao = document.querySelectorAll(".figure-two-two-one>div")
for (var i = 0; i < people.length; i++) {
    people[i].dataset.index = i;
    jianshao[i].dataset.index = i
    prev.onclick = function () {
        var show = document.querySelector(".show")
        var show1 = document.querySelector(".show1")
        // console.log(show.dataset.index)
        if (show.dataset.index == 0) {
            // 获取
            var prev1 = document.querySelector(".figure-two-one-nigth")
            var jianshaoprev = document.querySelector(".figure-two-two-one-ningth")
            //   隐藏
            show.classList.remove("show")
            show1.classList.remove("show1")
            // 显示
            prev1.classList.add("show")
            jianshaoprev.classList.add("show1")

        }
        else {
            // 赋值
            let prev2 = show.dataset.index - 1
            console.log(prev2)
            let jianshaoprev1 = show1.dataset.index - 1
            // 隐藏
            show.classList.remove("show")
            show1.classList.remove("show1")
            // 显示
            people[prev2].classList.add("show")
            jianshao[jianshaoprev1].classList.add("show1")
        }
    }
    next.onclick = function () {
        var show = document.querySelector(".show")

        var show1 = document.querySelector(".show1")

        if (show.dataset.index == 8) {
            // 获取
            var prev1 = document.querySelector(".figure-two-one-one ")
            var jianshaoprev = document.querySelector(".figure-two-two-one-one")
            //   隐藏
            show.classList.remove("show")
            show1.classList.remove("show1")
            // 显示
            prev1.classList.add("show")
            jianshaoprev.classList.add("show1")

        }
        else {
            // 赋值
            let prev2 = Number(show.dataset.index) + 1
            let jianshaoprev1 = Number(show.dataset.index) + 1
            console.log(jianshaoprev1, prev2)
            // 隐藏
            show.classList.remove("show")
            show1.classList.remove("show1")
            // 显示
            people[prev2].classList.add("show")
            jianshao[jianshaoprev1].classList.add("show1")
        }
    }
}
// 页面滑动显示隐藏
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
var louceng1 = $('.news').eq(0).offset().top;
var louceng2 = $('.hujianyuan').eq(0).offset().top;
var louceng3 = $('.figure').eq(0).offset().top;
var louceng4 = $('.United').eq(0).offset().top;
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
    // $('.gudin22').click(function () {
    //     // 获取被点击的li的索引
    //     var num = $(this).index();
    //     // 通过索引找到对应的楼层的距离文档的位置
    //     var v = $('.jd').eq(num).offset().top;
    //     $('html,body').animate({
    //         scrollTop: v
    //     }, 200, 'linear');
    // }
}
