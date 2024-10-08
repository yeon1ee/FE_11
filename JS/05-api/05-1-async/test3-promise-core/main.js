"use strict"

//test1: 동기 실행
/* function myFun() {
    console.log('done..');
    return 10;
}

console.log('step1');
let result = myFun();
console.log('step2');
console.log('step2: ' + result); */

//step1
//done
//step2
//step2: 10
//-> step1이 실행된 후 함수 호출, 함수의 실행이 끝나야 step2 출력

//test2: 비동기 실행
function myFun() {
    //호출되자마자 Promise 객체를 리턴시켜서 함수를 호출한 곳이 대기상태가 되지 않게 한다.
    //promise의 매개변수는 함수.. 시간이 오래 걸리는 업무를 처리하는 함수
    return new Promise((resolve, reject) => {
        //1초 후에 10 데이터 발생
        setTimeout(() => resolve(10), 1000)
    });
}

console.log('step1');
let promise = myFun();
//promise의 비동기 업무에 의한 결과가 발생할 때 실행될 함수를 등록한다.
//결과를 받을 함수를 등록만 한거고 실행을 시킨 것은 아니다. 실행은 비동기 업무에서 결과가 발생할대 알아서 실행된다.
promise.then(result => {    //매개 변수가 promise가 발생시민 데이터
    console.log(`result: ${result}`);
});

console.log('step2');

//step1
//step2
//result: 10