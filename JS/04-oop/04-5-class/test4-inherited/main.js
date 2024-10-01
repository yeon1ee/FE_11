"use strict"

//test1: 상속
class Shape {
    name = '도형';
    x = 0;
    y = 0;
    
    draw() {
        console.log(`${this.name}을 ${this.x}, ${this.y}에 그립니다.`);
    }
}

class Rect extends Shape {
    width = 0;
    height = 0;
}

let rect = new Rect();

rect.name = '사각형';
rect.x = 10;
rect.y = 10;
rect.width = 100;
rect.height = 100;
rect.draw();

//test2: private, static 상속 관계
class Super {
    data1 = 10;
    #data2 = 20;
    static data3 = 30;
}

class Sub extends Super {
    static data4 = 40
    subFun() {
        console.log(this.data1);
        //console.log(this.#data2);   //error -> private은 자신의 클래스 내에서만 사용 가능함
    }
}

let obj = new Sub();
obj.subFun();

console.log(Super.data3);
console.log(Sub.data3); //30 -> 가능하다. 상위 static 멤버를 하위 클래스명으로 이용 가능

//test3: 생성자 연결 관계
//생성자를 개발자가 명시적으로 선언하지 않은 경우이다.
//default 생성자가 자동으로 추가된다
//ok: 별 문제 없이 객체 생성 된다
// class Super1 {

// }
// class Sub1 extends Super1 {

// }

// let obj1 = new Sub1();

//개발자가 명시적으로 생성자를 추가한다.

class Super1 {
    constructor() {}
}
class Sub1 extends Super1 {
    //아래처럼 생성자를 명시적으로 선언하면 에러가 발생한다.
    //constructor() {}
    //아래처럼 개발자가 명시적으로 생성자를 추가했고, 상위 클래스가 명시되어 있다면 생성자 내에서 꼭 상위 생성자를 호출해야 한다.
    constructor() {
        super();    //상위 생성자 호출 구문. 생성자 내에서만 작성 가능하다. 생성자 내에서 첫 줄에 한 번만 선언한다.
        //1: 상위 생성자 호출, 2: 자신 멤버 메모리 할당
        this.data = 10;
    }
}

let obj1 = new Sub1();

//test3: 상위 생성자 호출
class Super2 {
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }
}

class Sub2 extends Super2 {
    constructor(name, x, y, width, height) {
        super(name, x, y);   //상위 생성자 호출하면서 매개 변수 전달
        this.width = width;
        this.height = height
    }
}

let obj2 = new Sub('rect2', 20, 20, 200, 200);

//test4: override
//상위에 선언된 멤버를 동일 이름으로 하위 클래스에서 재정의
//상위 멤버 상속은 안된다.
//변수 오버라이드: 하위에서 데이터 초기화를 다시 진행 하는 것
//함수 오버라이드: 알고리즘을 교체하는 것
//이름을 다르게 해서 멤버를 선언하면 동일 행동, 데이터를 가지는 멤버가 두 개
class Shape2 {
    data = 10;
    constructor(name, x, y) {
        this.name = name;
        this.x = x;
        this.y = y;
    }

    calcArea() {
        console.log(`${this.name}의 면적을 계산합니다.`);
    }
}

class Rect2 extends Shape2 {
    //변수 오버라이드
    data = 20;
    constructor(name, x, y, width, height) {
        super(name, x, y);
        this.width = width;
        this.height = height;
    }
    //함수 오버라이드
    calcArea() {
        //상위 멤버 상속이 안된다. 명시적으로 상위 함수를 호출하겠다면
        super.calcArea();
        console.log(`넓이는 ${this.width} * ${this.height}`);
    }
}

let rect3 = new Rect2('사각형', 10, 10, 20, 20);
console.log(rect3.data);
rect3.calcArea();   //사각형의 면적을 계산합니다 넓이는 400