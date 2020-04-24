
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
// let ol = document.querySelector(".news-two-lunbo>ol")
// let ul = document.querySelector(".news-two-lunbo>ul")
// for (let i = 0; i < ul.children.length - 1; i++) {
//     // 4.2.1 通过createElement()方法来创建li
//     let li = document.createElement('li');
//     li.dataset.index = i;
//     // 4.2.2 把创建出来的li添加到ol中去
//     if (i == 0) {
//         li.classList.add('new-two-lunbo-two');
//     }
//     // 把创建好的li添加到ol中去
//     ol.appendChild(li);

//     li.addEventListener('click', function () {
//         // console.log(this);
//         // 排他
//         for (let j = 0; j < ol.children.length; j++) {
//             ol.children[j].classList.remove('active');
//         }
//         // 自己添加active
//         this.classList.add('active');

//         // 点击谁 就把谁的索引拿出来
//         let index = this.dataset.index;
//         // console.log(index);
//         animate(ul, {
//             left: -index * sliderWidth
//         })
//     })
// }

let ul = document.querySelector(".news-two-lunbo-one>ul")
console.log(ul)
let li = document.querySelectorAll(".news-two-lunbo-there>li")
let sliderWidth = "320px"
console.log(li)
for (var u = 0; u < li.length; u++) {
    li[u].dataset.index = u
    li[u].onclick = function () {
        console.log(11111)
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






