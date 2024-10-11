class SuperClass {
    //매개변수는 로컬 variable
    //생성자에 한해서만
    //매개변수에 접근제한자를 추가하면 곧 멤버 변수가 된다.
    //원래 로컬 변수에는 접근 제한자를 추가하지 못한다.
    constructor(public id: string, public age: number, private address: string) {}

    email = 'a@a.com';
    private phone = '111';
    protected url = 'http://www.google.com';

    some() {
        console.log(this.id, this.age, this.address);
    }
}

let superObj = new SuperClass('kim', 10, 'seoul');
superObj.some();
superObj.age = 20;
//superObj.address = 'seoul'    //error: private로 선언되어 있기 때문에 접근 불가
//superObj.url = '~'; //error: protected로 선언되어 있기 때문에 하위 클래스까지만 접근 가능하다.

class SubClass extends SuperClass {
    some() {
        this.age = 30;
        this.url = '~'; //하위 클래스임으로 사용 가능
        //this.address = 'aaa'    //하위 클래스여도 private임으로 접근 불가능
    }
}