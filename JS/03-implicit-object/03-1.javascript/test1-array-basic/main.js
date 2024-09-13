"use strict"

//[]기법으로 배열 선언
let product1 = ['book1', 'book2'];
let product2 = [];

//instanceof 연산자: true or false가 나온다
//왼쪽 객체가 오른쪽 타입인지 판단
console.log(product1 instanceof Array);
console.log(product2 instanceof Array);

//new Arrya()로 배열 선언
let product3 = new Array('book3', 'book4');
let product4 = new Array();

console.log(product3 instanceof Array); //true
console.log(product4 instanceof Array); //true

//length
// . : 객체.멤버 (변수, 함수)
// . : 객체 멤버 접근 연산자
console.log(product1.length);

//배열 객체가 가지고 있는 모든 데이터를 순차적으로 획득해서 로직을 돌리기
//for문 사용
for (let i = 0; i < product1.length; i++) {
    console.log(`array[${i}] = ${product1[i]}`);
}

//forEach 
//매개 변수에 전달한 개발자 함수를 배열의 갯수만큼 호출한다.
//호출하면서 순차적으로 배열에 담긴 데이터: index를 개발자 함수의 매개변수로 지정한다.
product1.forEach((value, index) => {
    console.log(`array[${index}] = ${value}`);
});

//배열 데이터 수정
product1[0] = 10;
product1[1] = 20;

console.log(product1);  //[10, 20]

//배열에 데이터 추가
product1.push(30);
product1.push(40);
console.log(product1);  //[10, 20, 30, 40]


