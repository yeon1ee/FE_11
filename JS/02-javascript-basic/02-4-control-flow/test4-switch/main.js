"use strict"

/* 함수 소개
- 난수 발생 함수 .random
- 반올림 함수 .round
- *3 의 의미: 0 ~ 3 사이의 난수 발생, 다른 숫자도 가능 */

let data = Math.round(Math.random() * 3);
console.log (`random: ${data}`);

switch (data % 3) {
    case 0: {
        console.log('나머지는 0입니다.');
        break;
    }
    case 1: {
        console.log('나머지는 1입니다.');
        break;
    }
    case 2: {
        console.log('나머지는 2입니다.');
        break;
    }
    default: {
        console.log('default가 실행되었습니다.');
        break;
    }
}