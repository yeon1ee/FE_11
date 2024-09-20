"use strict"

let area1 = document.getElementById('area1');
let area2 = document.getElementById('area2');
let area3 = document.getElementById('area3');

//event handler 등록, bubbling 단계에서 실행할 handler
//내부로 들어갈수록 중첩돼서 출력됨
area1.addEventListener('click', function() {
    console.log('bubbling area1 event handler');
    //bubbling area1 event handler
});
area2.addEventListener('click', function() {
    console.log('bubbling area2 event handler');
    //bubbling area2 event handler
    //bubbling area1 event handler
});
area3.addEventListener('click', function(event) {
    console.log('bubbling area3 event handler');
    //bubbling area3 event handler
    //bubbling area2 event handler
    //bubbling area1 event handler
    event.stopPropagation();
    //capturing area1에서 event.stopPropagation이 선언되기 전
    //bubbling area3 event handler
    //선언된 후
    //capturing area1 event handler
}); 

//event handler, capturing
area1.addEventListener('click', function(event) {
    console.log('capturing area1 event handler');
    //capturing area1 event handler
    event.stopPropagation();
    //capturing area1 event handler
}, true);
area2.addEventListener('click', function() {
    console.log('capturing area2 event handler');
    //capturing area1 event handler
    //capturing area2 event handler

    //event.stopPropagation()에 의해 capturing area1 event handler만 출력된다.

}, true);
area3.addEventListener('click', function() {
    console.log('capturing area3 event handler');
    //capturing area1 event handler
    //capturing area2 event handler
    //capturing area3 event handler
}, true); 

//동시에 실행
//capturing부터 1-2-3, bubbling은 3-2-1 순으로 출력됨

let link1 = document.getElementById('link1');
let form1 = document.getElementById('form1');

link1.addEventListener('click', function(e) {
    console.log('link click');
    //js code에서 ajax로 서버 연동처리
    e.preventDefault();
});

form1.addEventListener('click', function(e) {
    console.log('form click');
    //browser form의 이벤트 처리보다는 개발자 js code에서 ajax로 서버 연동
    e.preventDefault();
});