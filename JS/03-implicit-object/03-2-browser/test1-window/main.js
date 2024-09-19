"use strict"

//window의 기본 정보 추출
console.log(window.innerWidth, window.innerHeight);
console.log(window.outerWidth, window.outerHeight);
console.log(window.screenLeft, window.screenTop);

//스크린 정보는 스크롤 이벤트가 발생한 경우만 유지
window.addEventListener('scroll', () => {
    console.log(window.scrollX, window.scrollY);
});

//새로운 tap으로 새 창이 뜬다.
//target을 지정하지 않으면 default는 _blank이다. 새 창이 뜸
function myOpen1() {
    window.open('http://www.google.com');
}

function myOpen2() {
    window.open('http://www.google.com', '_self')
}

//자식창 지칭 객체 (닫히는 창을 지정하기 위해 변수 선언함)
let childWindow;

function myOpen3() {
    childWindow = window.open(
        'http://naver.com', //google은 CORS 로 안됨
        '_blank',
        'left=100, top=100, width=300, height=400'
    )

    if(childWindow == null) {
        alert('팝업이 차단되었습니다. 해제해 주세요.');
    }
}

//동작x
function myClose() {
    childWindow.close();
}

function myScroll() {
    window.scrollBy(100, 100);
}