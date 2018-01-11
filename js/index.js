window.onload = function () {
    let banner = document.querySelector('.banner'),
        Imgbox = document.querySelector('.Imgbox'),
        img = Imgbox.querySelectorAll('img'),
        dianbox = document.querySelector('.dianbox'),
        dian = dianbox.querySelectorAll('.dian');
    let now = 0;
    let time = setInterval(t,3000);
    function t(){
// 自动轮播
        img.forEach(function (ele,index){
            ele.style.opacity = 0;
            dian[index].classList.remove("dian-active");
        });
        img[now].style.opacity = 1;
        dian[now].classList.add("dian-active");
        now++;
        if(now===img.length){
            now = 0;
        }
    };
    // 移入停止，移出继续播放
    banner.onmouseenter = function () {
        clearInterval(time);
    };
    banner.onmouseleave = function () {
        time = setInterval(t,3000);
    }
    // 轮播点控制
    dian.forEach(function(ava,index){
        ava.addEventListener('click',function(){
            img.forEach(function(ss,index1){
                ss.style.opacity=0;
                dian[index1].classList.remove("dian-active");
            })
            img[index].style.opacity=1;      /* 给点击的轮播点index，添加'dian-active'效果。*/
            this.classList.add("dian-active");
            now = index;
        });
    });
}

