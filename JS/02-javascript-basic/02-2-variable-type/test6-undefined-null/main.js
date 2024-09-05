let data1 = null;
console.log(data1, `type is ${typeof data1}`);  //type is object

//객체 타입
let user1 = {
    name: '홍길동',
    age: 25,
    address: 'seoul'
}

//null
let user2 = null;
console.log(typeof user1, typeof user2);

//undefined
let data2;
console.log(data2, typeof data2);

//error
/*
console.log(data3);
ReferenceError: data3 is not defined
-> data3 라는 변수가 선언되지 않았다고 알려주는 메세지
*/

/*
user2.name = '김길동'   
TypeError: Cannot set properties of null (setting 'name') 
-> 객체 변수의 멤버에 접근하고 있지만 객체 자체가 null이라고 알려주는 메세지
*/

/*
let user4;
user4.name = '김길동';
TypeError: Cannot set properties of undefined (setting 'name')
변수는 선언되었으나, 타임 유추가 되지 않음
*/
