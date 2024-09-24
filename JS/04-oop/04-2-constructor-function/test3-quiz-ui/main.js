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

//전체 채팅 메세지가 저장되는 배열, Message 객체 여러개가 저장
let messages = [];

//채팅 메세지를 식별해야 이모지를 어디다 추가 할 것인지 결정할 수 있어서 msgId를 부여해 1씩 증가시키면서 구분한다.
let msgId = 0;

//필요한 dom node 획득하기
let nicknameInputNode = document.getElementById('nicknameInput');
let idInputNode = document.getElementById('idInput');
let msgInputNode = document.getElementById('msgInput');
//최종 동적으로 양상된 채팅 글이 찍힐 위치
let chatMainNode = document.getElementById('chat-main');

//매개 변수로 전달된 객체의 내용을 node를 만들어서 출력시키는 역할
function printMessage(message) {

}

function send(e) {
    //유저 입력 데이터 추출
    e.preventDefault();

    let id = idInputNode.value;
    let nickname = nicknameInputNode.value;
    let msg = msgInputNode.value;

    //유효성 검증
    if (id.trim().length == 0 || nickname.trim().length == 0) {
        alert('아이디, 닉네임과 메세지를 입력해야 합니다.');
        return;
    } else {
        
    }
    //화면에 동적 노드 만들어서 출력하기
}

function printEmoji(emoji) {

}

//이모지 추가 클릭 이벤트 처리
function emojiClick() {
    //동적으로 이모지를 메세지에 출력
}