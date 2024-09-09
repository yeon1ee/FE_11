"use strict"

let age = 23;
let address = '서울';

//if문
if (age <= 10) {
    //조건문이 true일시 실행
    console.log(`age: ${age}, 당신의 나이는 조건에 만족합니다.`)
}

//if-else문
if (age <= 10) {
    console.log(`age: ${age}, 당신의 나이는 조건에 만족합니다.`);
} else {
    console.log(`age: ${age}, 당신의 나이는 조건에 만족하지 않습니다.`);
}

//if-elseif-else문
if (age < 30 && address === '서울') {
    console.log(`age: ${age}, address: ${address}, 나이조건에 만족하고 서울에 거주합니다.`);
} else if (age < 30 && address === '부산') {
    console.log(`age: ${age}, 나이조건에 만족하고 부산에 거주합니다.`);
} else {
    console.log(`age: ${age}, address: ${address}, 나이, 지역 조건에 만족하지 않습니다.`);
}

//if, else block이 한 줄이라면 {} 생략 가능
if (age < 30)
    console.log('조건에 만족합니다.');
else
    console.log('조건에 만족하지 않습니다.');

//js는 다양한 타입의 데이터가 true/false로 판단될 수 있다.
let data = 1;

if (data) {
    console.log('data is true');    //실행
} else {
    console.log('data is false');
}

//만약 숫자, 문자 등의 데이터가 들어오면 boolean으로 변형시켜 판단한다. (true/false)
console.log(Boolean(1));    //true
console.log(Boolean(0));    //false
console.log(Boolean(10));    //true
console.log(Boolean(-1));    //true
console.log(Boolean('hello'))   //true
console.log(Boolean('null'))   //false
console.log(Boolean('undefined'))   //false

if ('hello') {
    console.log('...true'); //실행
} else {
    console.log('...false');
}

let data1 = null;
if (data1) {

} else {

}

let data2;
if (data2) {

} else {
    
}