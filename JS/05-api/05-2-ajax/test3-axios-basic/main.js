"use strict"

function printResult(result) {
    const resultDom = document.getElementById('result');
    resultDom.innerHTML = result;
}

function axios_basic() {
    const num = document.getElementById('num').value;
    axios ({
        method: 'get',
        //로컬 컴퓨터를 지칭하는 ip: 127.0.0.1
        //로컬 컴퓨터를 지칭하는 도메인: localhost
        url: 'http://localhost:3000/sum/${num}'
    })
    .then(response => {
        printResult(response.data.result);
    });
}
function axios_get() {
    const num = document.getElementById('num').value;
    axios.get(`http://localhost:3000/sum/${sum}`);
    then(response => {
        printResult(response.data.result);
    });
}

function axios_post() {
    //http request method
    //header 정보: get(default), post, put, delete, patch, head, option
    //CRUD
    //get: 데이터 줘 read/만약 데이터를 서버에 넘기겠다면 header 정보로 넘기는 방식
    //url에 데이터를 추가해서 url은 request header 정보이다.
    //url path에 추가해서 넘기거나 
    //url search 문자열
    //post: 데이터 저장 - create
    //put: 데이터 수정  - update
    //delete: 데이터 삭제   - delete

    axios.post(`http://localhost:3000/post_test`, {
        //post 방식이다. request body 데이터
        name: '홍길동',
        age: 20
    })
    .then(response => {
        printResult(response.data.msg)
    });

}