'use strict';


const homeLi = document.querySelectorAll('.gallery>ul>li.home>ul>li')
{
    let i = -1;

    function autoHome() {
        if (i >= homeLi.length - 1)i = -1;
        i++;
        homeLi.forEach((el, idx) => {
            if (idx == i) {
                el.classList.add('homeLiOn');
            } else {
                el.classList.remove('homeLiOn');
            }
        })
        if (i >= homeLi.length - 1) i = -1;
    }
    //인터벌 설정
    let galInt = setInterval(autoHome, 10000);

    //로드되자마자 실행
    (() => autoHome())();
}