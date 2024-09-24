"use strict"

//일반 함수 선언 (this로 멤버가 준비되지 않은 경우)
function User1(arg1, arg2) {
    //함수 내에 변수 및 함수가 선언되어 있다.
    //함수 scope 내에 선언된 함수의 로컬 멤버이다.
    let name = arg1;
    let age = arg2;

    let sayHello = function() {
        console.log(`User1, ${name}, ${age}`);
    }

    sayHello();
}

//일반 함수로 호출 -> 정상적으로 실행된다. 
User1('홍길동', 20);

//객체 생성으로 호출
//new를 사용했기 때문에 this는 준비된다. (메모리가 준비된다는 뜻)
//하지만 this에 아무것도 추가되지 않은 상태임으로 this.~는 사용이 불가능하다.

let obj1 = new User1('홍길동', 30);
console.log(`${obj1.name}, ${obj1.age}`);   //undefined, undefined
//obj1.sayHello()   //error

//생성자 함수로 준비하기
function User2 (name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function() {
        console.log(`${this.name}, ${this.age}`)
    }
}

//일반 함수로 이용
//new를 이용하지 않았음으로 this가 준비되지 않았다. 이 상태에서 this를 사용하면 error가 발생한다.
//User2('홍길동', 20);

//객체 생성으로 이용
//모형(생성자 함수)를 선언하고, 모형을 통해 동일 구조의 객체를 반복 생성한다.
let user1 = new User2('홍길동', 25);
let user2 = new User2('김길동', 30);

user1.sayHello();   //홍길동, 25
user2.sayHello();   //김길동, 30

//생성자 함수와 리턴
//생성자 함수가 new로 후출이 되면 함수 내에서 명시적으로 return 시키지 않아도 생성된 객체가 return 된다.
//명시적으로 기초 데이터를 리턴 시킨 경우
function User3(name, age){
    this.name = name;
    this.age = age;
    return 10;
}

let user3 = new User3('홍길동', 30);
console.log(user3); //User3 {name: '홍길동', age: 30}
//=> 기초 데이터를 리턴시키면 무시되고 생성된 객체가 반환된다.

//명시적으로 코드에서 준비한 다른 객체를 리턴시킨다면
function User4(name, age) {
    this.name = name;
    this.age = age;
    return {
        prodNo: 1,
        prodName: '에어조던'
    }
}

let user4 = new User4('홍길동', 30);
console.log(user4); //{prodNo: 1, prodName: '에어조던'}
//객체를 리턴시키면 생성된 객체는 무시하고 코드에서 리턴시킨 객체가 반환된다.

//외부에서 객체 멤버 추가
console.dir(user1);
console.dir(user2);

user1.address = 'seoul';
user1.helloFun = function() {
    console.log('hello');
}

//추가한 객체에만 멤버가 존재한다.
//동일한 생성자 함수로 생성된 객체라도 하더라도 외부에서 멤버를 추가하기 시작하면 객체별 멤버가 다르게 된다.
console.dir(user1);
console.dir(user2);