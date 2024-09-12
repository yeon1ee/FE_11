"use strict"
/*
//내 코드

let form = document.getElementById('form');
let result = document.getElementById('result');


function printResult(msg) {
    result.innerHTML = msg;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let tel = document.getElementById('tel').value;
    let job = document.getElementById('job').value;

    printResult(`이름: ${name} <br></br> 전화번호: ${tel} <br></br> 직업: ${job}`);
});

form.addEventListener('reset', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let tel = document.getElementById('tel').value;
    let job = document.getElementById('job').value;

    printResult(`이름: ${name} <br></br> 전화번호: ${tel} <br></br> 직업: ${job}`);
});*/

let resultNode = document.getElementById('result');
let formNode = document.getElementById('myForm');

function printResult(msg) {
    resultNode.innerHTML = msg;
}

formNode.addEventListener('submit', (e) => {
    e.preventDefault();

    let nameNode = document.getElementById('name');
    let phoneNode = document.getElementById('phone');
    let jobNode = document.getElementById('job');

    let msg = `name: ${nameNode.value} <br> phone: ${phoneNode.value} <br> job: ${jobNode.value}`

    printResult(msg);
}); 