"use strict"

/*
메세지
    메세지 보낸 사람
    메세지 내용
시간
이름
    닉네임
    아이디
    프로필 사진
이모지 
    이모지 아이디
    이모지 카운트
    이모지 추가한 멤버들
*/ 

//반복적으로 생성될 객체를 노출한다.
//객체가 가지는 데이터를 
function Member(id, nickname, photo) {
    this.id = id;
    this.nickname = nickname;
    this.photo = photo;
}

function Emoji(emojiId) {
    this.emojiId = emojiId;
    this.count = 0;
    this.members = [];
    this.add = function(memberId) {
        this.count++;
        this.members.push(memberId);
    }
}

function Message(msg, member) {
    this.msgId = ++msgId;
    this.msg = msg;
    this.member = member;
    this.date = new Date().toLocaleString();
    this.emojis = [];
    this.addEmoji = function (emojiId, memberId) {
        if(this.emojis.every (item => item.emojiId !== emojiId)) {
            //신규 이모지 추가
            this.emojis.push(new Emoji(emojiId));
        } else {
            //기존에 추가되어 있던 이모지를 누군가에게 추가시키고자 함
            //배열에서 이 이미지 id의 객체가 몇 번째에 있는지 획득 해야 함
            let index = this.emojis.findIndex((item) => item.emojiId === emojiId) 
            this.emojis[index].add(memberId);
        }
    }
}

//메세지가 여러개 생성되는 구조이다.
//전체 메세지를 담기 위한 배열
//메세지 객체 여러개를 담는 배열
let messages = [];

//메세지 객체가 여러개가 유지된다.
//각각의 메세지 객체를 식별하기 위해 사용해야 하낟.
//메세지 식별자로 사용하기 위한 변수 -> 메세지 객체가 만들어질 때 마다 1씩 증가시켜 사용
let msgId = 0;

//test1: 신규 메세지 발생1
let member1 = new Member('kim', '김길동', 'kim.png');
let message1 = new Message('첫 번째 메세지', member1);
messages.push(message1);
console.dir(messages);

//test1: 신규 메세지 발생2
let member2 = new Member('lee', '이길동', 'lee.png');
let message2 = new Message('두 번째 메세지', member2);
messages.push(message2);
console.dir(messages);

//park이 첫 번째 메세지에 이모지 ok를 추가했다는 가정
message1.addEmoji('ok', 'park');
console.dir(messages);

//choi가 첫 번째 메세지에 thumbsup 이모지 추가
message1.addEmoji('thumbsup', 'choi');
console.dir(messages);

//jeong이 첫 번째 메세지에 ok 이모지 추가
message1.addEmoji('ok', 'jeong');
console.dir(messages);