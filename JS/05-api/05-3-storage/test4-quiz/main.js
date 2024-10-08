"use strict"

let idNode = document.getElementById('id');

let loginFormNode = document.getElementById('loginForm');
let loginOkNode = document.getElementById('loginOk');

function changeShowHide(show, hide) {
    hide.setAttribute('class', 'hide');
    show.removeAttribute('class');
}

function login() {
    let id = document.getElementById('idInput').value;
    let pw = document.getElementById('pwInput').value;

    if(id.trim() === pw.trim()) {
        alert('로그인에 성공하셨습니다.');
        idNode.innerHTML = id;
        localStorage.setItem('loginId', id);
        changeShowHide(loginOkNode, loginFormNode)
    } else {
        alert('로그인 실패');
    }
}

function logout() {
    localStorage.removeItem('loginId');
    changeShowHide(loginFormNode, loginOkNode);
}

//html 로딩 되자마자 (최초), storage 데이터를 보고 어느 화면이 나와야 하는지 판단한다.
window.onload = function () {
    let id = localStorage.setItem('loginId');
    if(id) {
        idNode.innerHTML = id;
        changeShowHide(loginOkNode, loginFormNode);
    } else {
        changeShowHide(loginFormNode, loginOkNode);
    }
}
// if (userId.value.length == 0 || userPw.value.length == 0 ) {
//     alert('ID와 PW를 입력해주세요');
// } else if (userId.value === userPw.value) {
//     localStorage.setItem('id', userId.value);
//     localStorage.setItem('pw', userPw.value);

//     loginScreen.style.visibility = none;

// } else {
//     alert('ID와 PW가 동일해야 합니다.');
// }