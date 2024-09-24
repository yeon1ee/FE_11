"use strict"

/*
메세지
시간
이름
아이디
프로필 사진
이모지 아이디
이모지 카운트
이모지 추가한 멤버들
*/ 

let message = {
    msg: '디버깅 용도입니다.',
    date: '2024.09.04 오전 10:32',
    member: {
        id: jangyj,
        nickname: 장유진,
        photo: 'jangyj.png'
    },
    emojis: [
        {
            id: 'thumbsup',
            count: 3,
            members: ['lee', 'kim', 'park'],
            add: function(id) {
                this.count++;
                this.members.push(id);
            }
        }
    ],

    addEmoji: function(emojiId, memberId) {
        if(this.emojis.every (item => item.id !== emojiId)) {
            //신규 이모지 추가
            this.emojis.push({
                id: 'thumbsup',
                count: 3,
                members: ['lee', 'kim', 'park'],
                add: function(id) {
                    this.count++;
                    this.members.push(id);
                }
            });
        } else {
            //기존에 추가되어 있던 이모지를 누군가에게 추가시키고자 함
            //배열에서 이 이미지 id의 객체가 몇 번째에 있는지 획득 해야 함
            let index = this.emojis.findIndex((item) => item.id === emojiId) 
            this.emojis[index].add(memberId);
        }
    }
}

console.log(message);

//기존 이모지에 kim이 추가했다고 가정하기
message.addEmoji('thumbsup', 'kim');
console.log(message);

//ok라는 이모지를 lee가 추가했다고 가정하기
message.addEmoji('ok', 'lee');
console.log(message);
