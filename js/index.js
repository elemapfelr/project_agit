'use strict';

const audio = document.querySelector('.rcon>.sound>.audio');
const sound = document.querySelector('.rcon>.sound');
const soundPulse = document.querySelectorAll('.rcon>.sound>span');
const soundP = document.querySelector('.rcon>.sound>p');
const soundOnImg = document.querySelector('.sound>img.soundOn');
const soundOffImg = document.querySelector('.sound>img.soundOff');

//배경음악 재생
let soundI = 0;
sound.addEventListener('click', () => {
    if (soundI == 1) {
        audio.pause();
        soundI = 0;
        soundOnImg.style.opacity = "0";
        soundOffImg.style.opacity = "1";
        soundPulse[0].style.border = "0";
        soundPulse[1].style.border = "0";
    } else {
        audio.play();
        soundI = 1;
        soundOnImg.style.opacity = "1";
        soundOffImg.style.opacity = "0";
        soundPulse[0].style.border = "1px solid #aaa";
        soundPulse[1].style.border = "1px solid #aaa";
    }
})

function soundPOn() {
    soundP.style.transition = 'all 0.3s';
    soundP.style.scale = '1.1';
}

//gnb버튼 클릭시 이벤트
const gnbshow = document.querySelector('.gnbshow')
const gnbtopLine = document.querySelector('.gnbshow>span.topline')
const gnbbottomLine = document.querySelector('.gnbshow>span.bottomline')
const gnb = document.querySelector('.gnb')
const gnbUl = document.querySelector('.gnb>ul')
const gnbLi = document.querySelectorAll('.gnb>ul>li')

let gnbI = 0;
gnbshow.addEventListener('click', () => {
    //gnb버튼 변환
    if (gnbI == 0) {
        gnbtopLine.style.width = '40px';
        gnbtopLine.style.transform = 'rotate(45deg) translate(2.5px,7.5px)';
        gnbbottomLine.style.width = '40px';
        gnbbottomLine.style.transform = 'rotate(-45deg) translate(2.5px,-7.5px)';
        gnbI = 1;
        gnb.style.left = '0';
    } else {
        gnbtopLine.style.width = '30px';
        gnbtopLine.style.transform = 'rotate(0) translate(0)';
        gnbbottomLine.style.width = '30px';
        gnbbottomLine.style.transform = 'rotate(0) translate(0)';
        gnbI = 0;
        gnb.style.left = '-100vw';
    }
})

gnbshow.addEventListener('mouseover', () => {
    gnbtopLine.style.boxShadow = "0px 0px 10px 1px #fff"
    gnbbottomLine.style.boxShadow = "0px 0px 10px 1px #fff"
})
gnbshow.addEventListener('mouseout', () => {
    gnbtopLine.style.boxShadow = "";
    gnbbottomLine.style.boxShadow = "";
})

const galleryHome = document.querySelector('.gallery>ul>li.home')
const galleryAbout = document.querySelector('.gallery>ul>li.aboutAgit')
const galleryComponents = document.querySelector('.gallery>ul>li.components')

const galleryLi = document.querySelectorAll('.gallery>ul>li')
const galleryUl = document.querySelector('.gallery>ul')
const gallery = document.querySelector('.gallery')

const scrollBox = document.querySelector('.scrollBox')

let locI = 0;
$(window).bind('mousewheel', function (event) {

    if (event.originalEvent.wheelDelta >= 0) {
        locI--;
        if (locI < 0) locI = 0;
        console.log(locI);

        gallery.style.top = (-20 * locI) + 'vh';
        galleryLi.forEach((el, idx) => {
            if (idx == locI) {
                el.classList.add('pageOn')
            } else {
                el.classList.remove('pageOn')
            }
        })
        bconLiOn(locI);
        if (locI == 0) {
            scrollBox.style.opacity = '1';
        }
    } else {
        locI++;
        if (locI >= galleryLi.length - 1) locI = galleryLi.length - 1
        console.log(locI);

        gallery.style.top = (-20 * locI) + 'vh';
        galleryLi.forEach((el, idx) => {
            if (idx == locI) {
                el.classList.add('pageOn')
            } else {
                el.classList.remove('pageOn')
            }
        })
        bconLiOn(locI);
        if (locI > 0) {
            scrollBox.style.opacity = '0';
        }
    }
});

gnbUl.addEventListener('click', () => {
    let _target = event.target;
    gnbLi.forEach((el, idx) => {
        if (el == _target) {
            bconLiOn(idx);
            gallery.style.top = (-20 * idx) + 'vh';
            galleryLi.forEach((el, idx2) => {
            if (idx2 == idx) {
                el.classList.add('pageOn')
            } else {
                el.classList.remove('pageOn')
            }
        })
        }
    })
    gnbshow.click();
});

const bconLi = document.querySelectorAll('.bconBox>.bcon>ul>li')
const bconLiOn = key => {
    bconLi.forEach((el, idx) => {
        if (idx == key) {
            el.classList.add('on');
        } else {
            el.classList.remove('on');
        }
    });
};

const arrowLeft = document.querySelector('li.aboutAgit>.arrowbtn>span.arrowLeft')
const arrowRight = document.querySelector('li.aboutAgit>.arrowbtn>span.arrowRight')
const liAzone = document.querySelector('li.aboutAgit>ul>li.A');
const liBzone = document.querySelector('li.aboutAgit>ul>li.B');


arrowRight.addEventListener('click', () => {
    liAzone.classList.remove('zoneOn')
    liBzone.classList.add('zoneOn')
    arrowLeft.classList.add('arrowOn')
    arrowRight.classList.remove('arrowOn')
})
arrowLeft.addEventListener('click', () => {
    liBzone.classList.remove('zoneOn')
    liAzone.classList.add('zoneOn')
    arrowRight.classList.add('arrowOn')
    arrowLeft.classList.remove('arrowOn')
})

const compLi = document.querySelectorAll('.components>.compGal>ul>li')

const bgArr = [];
for (let i = 0; i < compLi.length; i++) {
    bgArr.push('url(img/components_' + i + '.png) no-repeat 50% /cover');
    compLi[i].style.background = bgArr[i];
}

{
    const compBconUl = document.querySelector('.compBcon>ul')
    const compBconLi = document.querySelectorAll('.compBcon>ul>li')
    const compBconOn = key => {
        compBconLi.forEach((el, idx) => {
            if (idx == key) {
                el.classList.add('compBconOn');
            } else {
                el.classList.remove('compBconOn');
            }
        });
    };

    //페이드
    const FadeOn = key => {
        compLi.forEach((el, idx) => {
            if (idx == key) {
                el.classList.add('compOn');
            } else {
                el.classList.remove('compOn');
            }
        });
    };


    //자동갤러리
    let i = -1;

    function autoComp() {
        if (i >= compLi.length - 1) i = -1;
        i++;
        FadeOn(i);
        compBconOn(i);
        if (i >= compLi.length - 1) i = -1;
    }
    //인터벌 설정
    let autoCompInt = setInterval(autoComp, 8000);

    (() => autoComp())();

    //수동갤러리
    compBconUl.addEventListener('click', () => {
        let _target = event.target;
        compBconLi.forEach((el, idx) => {
            if (el == _target) {
                el.classList.add('compBconOn');
                FadeOn(idx);
                compBconOn(idx);
                i = idx;
            } else {
                el.classList.remove('compBconOn');
            }
        })
    })

    const pgBar = document.querySelector('.components>.progressbar');
    const pgBar_sub = document.querySelector('.components>.progressbar>.progressbar_sub');

    let barWidth = 1;
    setInterval(barFrame, 80);

    function barFrame() {
        if (barWidth >= 100) {
            barWidth = 1;
        } else {
            barWidth++;
            pgBar_sub.style.width = barWidth + "%";
        }
    }

    (() => barFrame())();
}

const mainVideo = document.querySelector('#mainVideo')
const mainPlayBtn = document.querySelector('button.videoPlay')
const mainPauseBtn = document.querySelector('button.videoPause')

mainPlayBtn.addEventListener('click', () => {
    mainVideo.play();
    mainPlayBtn.classList.remove('buttonOn');
    mainPauseBtn.classList.add('buttonOn');
})
mainPauseBtn.addEventListener('click', () => {
    mainVideo.pause();
    mainPlayBtn.classList.add('buttonOn');
    mainPauseBtn.classList.remove('buttonOn');
})

const startLightBox=$('.startLightBox')
function startBox(){
    startLightBox.delay(1500).fadeOut(1500)
}

(()=>startBox())();