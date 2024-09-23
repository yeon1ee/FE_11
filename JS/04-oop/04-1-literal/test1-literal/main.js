"use strict"

//object literal 기법으로 객체 선언하기
let user = {
    name: '홍길동',
    age: 20,
    isMember: true,
    //객체 내 객체
    order: {
        productId: 2,
        count: 2
    },
    //함수 멤버 -> 메서드
    sayHello: function () {
        console.log(`Hello, ${this.name}`);
    },

    sayHello1: function () {
        //객체 내에서 자신의 다른 멤버 (변수, 함수)를 이용하려면 this 예약어를 사용해야 한다. (this: 어떤 객체 내에서 자기 자신을 지칭하는 예약어)
        console.log(`Hello, ${this.name} - ${age}`);
    },

    sayHello2: () => {
        //객체 내에 화살표 함수는 문제가 되지 않는다. 하지만 화살표 함수 내 this가 객체 자신을 지칭하지 못한다.
        //화살표 함수는 간단하게 함수를 선언해서 이용하는 경우에 주로 사용한다. this를 사용하지 않는 경우에 사용할 것을 권장한다.
        console.log(`Hello`);
        //console.log(`Hello, ${this.name}`); //Hello, undefined
    }
}
//선언된 객체 멤버 접근 -> 접근은 .로 한다
console.log(user.name); //홍길동
console.log(user.order.productId);  //2
user.sayHello();    //Hello, 홍길동
user.sayHello1();   //Hello, 홍길동 - undefined
user.sayHello1();   //Hello

//축약형으로 멤버 선언하기
let name = '김길동';
let age = 30;

let user1 = {
    //첫 번째 방법
    /*
    name: name,
    age: age*/

    //두 번째 방법
    name,
    age,
    
    sayHello: function () {
        console.log(`${this.name}, ${this.age}`);
    }
}

user1.sayHello();   //김길동, 30

//객체 선언시 없던 멤버를 추후에 추가 가능하다.
user1.address = 'seoul';
user1.sayHello2 = function() {
    console.log(`${this.name}, ${this.age}, ${this.address}`);
}

user1.sayHello2();  //김길동, 30, seoul