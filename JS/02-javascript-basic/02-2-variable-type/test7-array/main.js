//데이터 여러개를 모두 변수로 선언해서 사용하는 법
let user1 = '홍길동';
let user2 = '김길동';
let user3 = '이길동';

//모든 데이터를 배열에 담아서 사용하는 것은 좋은 방법이 아니다.
//데이터끼리 상이한 성격이라면 배열로 묶는 것보다 정확한 변수명으로 구분을 해 이용되게 하는 것이 좋다.
//동일한 성격의 데이터가 여러개가 유지되어야 하거나, 데이터의 갯수가 예측이 안될 때 배열로 선언하여 데이터를 사용한다.

let users = ['홍길동','김길동','이길동'];
console.log(users.length);  //3
console.log(users[0], users[1], users[2]);  //홍길동 김길동 이길동
console.log(users[3]);  //undefined
console.log(users)  //배열의 데이터를 한꺼번에 보기 -> ['홍길동','김길동','이길동']

//배열 데이터 변경하기
users[1] = '박길동';
console.log(users); //['홍길동', '박길동', '이길동']

//신규 데이터 추가
users.push('최길동');
users.push('정길동');
console.log(users); //['홍길동', '박길동', '이길동', '최길동', '정길동']

//배열에 있는 데이터 삭제
users.pop();
users.pop();
users.pop();
console.log(users); //['홍길동', '박길동']

//push() 와 pop()에 의해 배열에 데이터 추가, 제거는 맨 마지막 요소를 기준으로 된다.