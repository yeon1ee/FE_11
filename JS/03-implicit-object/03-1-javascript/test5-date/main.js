"use strict"

//현재 시간, 날짜
//new: 객체 생성(선언) 연산자, 모든 객체는 new로 생성해야된다.
let date1 = new Date();
console.log(date1.toString());  //Thu Sep 19 2024 10:17:22 GMT+0900 (한국 표준시)
console.log(date1.toLocaleString());    //2024. 9. 19. 오전 10:17:22

//특정 시간을 지정해서 객체 생성
let date2 = new Date('2024-09-19 10:14:10');
console.log(date2.toLocaleString());    //024. 9. 19. 오전 10:14:10

let date3 = new Date(2024, 9, 19, 10, 10, 10);
console.log(date3.toLocaleString());    //2024. 10. 19. 오전 10:10:10 ; 9월을 입력하고 싶다면 9-1을 작성해야함

//특정 데이터만 추출
console.log('year', date1.getFullYear());
console.log('month', date1.getMonth());
console.log('date', date1.getDate());
console.log('day', date1.getDay());
console.log('seconds', date1.getSeconds());
console.log('timestamp', date1.getTime());

//date 비교
//이벤트 시간 가정
let eventStartDate = new Date('2024-09-01T00:00:00');
let eventEndDate = new Date('2024-09-3001T23:59:59');

//예약 시간
let regDate = new Date('2024-09-19T14:00:00');

//비교
if (regDate.getTime() < eventStartDate.getTime()) {
    console.log('예약하신 시간은 이벤트 시작 전입니다.');
} else if (regDate.getTime() > eventEndDate.getTime()) {
    console.log('예약하신 시간은 이벤트 종료 후 입니다.');
} else {
    console.log(`${regDate.toLocaleString()}로 예약이 완료 되었습니다.`);
}