"use strict"

let resultNode;

function printResult(msg){
    resultNode.innerHTML = msg;
}

addEventListener('load', () => {
    resultNode = document.getElementById('result');
    printResult('load event');
});

addEventListener('resize', () => {
    printResult(`resize, width: ${innerWidth}, height: ${innerHeight}`);
});

addEventListener('copy', (e) => {
    //유저가 복사한 문자열에 우리가 원하는 문자열을 추가하기
    let thisURL = document.URL;

    //복사라고 하면 우리가 이벤트 처리하지 않아도 자동으로 선택한 문자열이 복사 문자열로 저장된다. 이런 기본 이벤트 처리가 되지 않게 해주는 것.
    e.preventDefault();

    //'text/plain', "image/*", "audio/mp3", "image/jpeg" -mime type
    //데이터 타입
    //document.getSelection(): 브라우저에서 유저가 선택한 문자열
    e.clipboardData.setData('text/plain', `${document.getSelection()} - 출처: ${thisURL}`);
});

addEventListener('paste', () => {
    printResult('paste');
});