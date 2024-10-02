"use strict"

function sayHello() {
    //시간 측정
    console.timeEnd();
    console.log('Hello');
}

console.time(); //timeEnd에서 걸린 시간 출력
//즉시 실행
//setTimeout(sayHello);

//1초 후에 실행
setTimeout(sayHello, 1000);

//데이터 전달
//함수를 직접 실행시키는 것이 아니라 의뢰하는 것임.
//의뢰 내용에 데이터를 전달해야 한다.
// function sayHello2(arg1, arg2, arg3) {
//     console.log(`Hello, ${arg1}, ${arg2}, ${arg3}`);
// }

// setTimeout(sayHello2, 1000, '홍길동', 10, true);

//의뢰 취소
// function sayHello3() {
//     console.log(`Hello`);
// }

// //취소를 하기 위해서는 식별자가 필요하다
// // let id = setTimeout(sayHello3, 1000);
// // clearTimeout(id);

// //interval
// // function fun1(name) {
// //     console.log(`fun1, ${name}`);
// // }

// // let id = setInterval(fun1, 1000, '홍길동');

// // setTimeout((id) => clearInterval(id), 3000);

// //0.5초 걸리는 업무를 진행하는 함수를 1초마다 반복 호출
// //일부러 시간을 지연시키기 위해서
function sleep(sec) {
    return new Promise(resolve => setTimeout(resolve, sec));
}

let beforeTime = performance.now();
// let sayHello = async () => {
//     let nowTime = performance.now();
//     console.log(nowTime - beforeTime);
//     beforeTime = nowTime;
//     await sleep(500)    //0.5초 쉬기
// }

// let id = setInterval(sayHello, 1000);
// setTimeout(() => clearInterval(id), 3000);
//-> 업무가 1초마다 실행된 것이 아니라, 함수 호출 자체가 1초에 한 번씩 되는 것


//0.5초 걸리는 업무를 진행한 후 에 1초 후에 다시 업무 실행
let id = 0;
let sayHello = async () => {
    let nowTime = performance.now();
    console.log(nowTime - beforeTime);
    beforeTime = nowTime;
    await sleep(500);   //0.5초 업무 진행
    //밑줄이 실행되었다는 것은 윗줄의 실행이 끝났다는 뜻
    setInterval(sayHello, 1000);
}

setTimeout(sayHello, 1000);
