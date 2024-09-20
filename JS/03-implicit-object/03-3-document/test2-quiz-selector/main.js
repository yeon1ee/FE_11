"use strict"

let resultNode = document.getElementById('result');
let formNode = document.getElementById('form');

function printResult(msg) {
    resultNode.innerHTML = msg;
}

formNode.addEventListener('submit', (e) => {
    e.preventDefault();

    //user 입력 데이터 가져오기
    let nameNode = document.getElementById('name');
    let hobbyNode = document.querySelectorAll('input[id="hobby"]:checked');
    let genderNode = document.querySelector('input[name="gender"]:checked');

    let hobbyResult = '';
    hobbyNode.forEach((item) => {
        hobbyResult += `${item.value}`
    });

    let genderResult = '';
    if(genderNode) {
        genderResult = genderNode.value;
    } else {
        alert('성별을 선택해주세요');
    }

    let msg = `name: ${nameNode.value} <br> 취미: ${hobbyResult} <br> 성별: ${genderResult}`;

    printResult(msg);

});