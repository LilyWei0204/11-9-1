$(function() {
/*    var box=$(".bannerBox")[0];
    var banner=$(".banner")[0];
    var imgs=$("li",banner);
    var btn=$(".btn")[0];
    var btnleft=$(".left",btn)[0];
    var btnright=$(".right",btn)[0];

    var now = 0;
    var next = 0;

    function ch(type) {
        type = type || "right";
        if (type == "left") {
            next--;
            if (next <= -1) {
                next = imgs.length - 1;
            };
            imgs[next].style.left = "-1400px";
            animate(imgs[now], {left: 1400});
        }
        else if (type == "right") {
            next++;
            if (next >= imgs.length) {
                next = 0;
            }
            imgs[next].style.left = "1400px";
            animate(imgs[now], {left: -1400});
        }
        animate(imgs[next], {left: 0});
       /!* lis[next].className = "btns_active";
        lis[now].className = "";*!/
        now = next;
    }

    box.onmouseover = function () {
        btnleft.style.display = "block";
        btnright.style.display = "block";
        clearInterval(t);
    }
    box.onmouseout = function () {
        btnleft.style.display = "none";
        btnright.style.display = "none";
        t = setInterval(ch, 2000);
    }
    btnleft.onclick = function () {
        ch("left")
    }

    btnright.onclick = function () {
        ch("right")
    }

    var t = setInterval(ch, 2000);*/

})