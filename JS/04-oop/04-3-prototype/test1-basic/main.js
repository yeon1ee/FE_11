"use strict"

//test1: 함수와 프로토타입
function myFun(arg1, arg2) {
    console.log(arg1, arg2);
}

//일반 함수로 준비
//myFun 내에 prototype 변수를 선언한 적이 없는데 에러가 발생하지 않았다.
//constructor()를 가지고 나머지 멤버는 없는 빈 상태의 객체가 자동 준비된다.
//생성자 함수가 아닌 모든 함수내에 준비된다.
console.log(myFun.prototype);

//test2: 생성자 함수와 프로토타입
function User(name, age, address) {
    //this.xxx -> 객체가 생성될 때마다 객체의 메모리에 유지된다.
    this.name = name;
    //프로토타입에 멤버 선언 -> 객체가 몇 개 생성되든 상관없이 한 곳에만 유지된다. (객체간 공유)
    User.prototype.age = age;
    User.prototype.address = address;
}

let user1 = new User('홍길동', 20, 'seoul');
console.log(user1.name, user1.age, user1.address);  //홍길동, 20, seoul

//프로토타입에 선언된 값은 공유하는 값이다.
//user2에서 age와 address가 덮어씌워지게됨
let user2 = new User('김길동', 30, 'busan');
console.log(user2.name, user2.age, user2.address);  //김길동, 30, busan
console.log(user1.name, user1.age, user1.address);  //홍길동, 30, busan

console.dir(user1);
console.dir(user2);

//test3: prototype의 변수에 객체로 값을 대입해서 바꾸면
user1.age = 40;
user1.address = 'incheon';
//prototype에 선언된 변수 값을 객체에서 변경을 시키면 prototype의 데이터가 변경되지 않고 그 객체내의 동일 변수가 선언된다. 그러므로 user2에는 영향이 가지 않음!
console.log(user1.name, user1.age, user1.address);  //홍길동, 40, incheon
console.log(user2.name, user2.age, user2.address);  //김길동, 30, busan

console.dir(user1);
console.dir(user2);

//생성자 함수 내에서만 prototype 멤버가 추가되는 것이 아니라 외부에서 추가 가능하다.
User.prototype.email = 'a@a.com'
console.log(user1.name, user1.age, user1.address, user1.email);

//객체의 멤버명과 프로토 타입의 멤버명이 동일할 수도 있다.
//우선적으로 객체의 멤버가 이용된다.
//명시적으로 이름이 동일할 때 프로토타입의 멤버를 참조하게 하고 싶다면
console.log(user1.age, user1.__proto__.age);    //40 30