"use strict";

const ifTest = () => {
  let resultNode = document.querySelector('#result')
  let month = prompt('월을 숫자로 입력하세요.')
  if(month == null){
    resultNode.innerHTML = '입력하지 않았습니다.'
  }else if(isNaN(month) || month <1 || month > 12){
    resultNode.innerHTML = '잘못 입력하였습니다. '
  }else {
    //계절 판단
    let season
    month = parseInt(month)
    if(month === 12 || month === 1 || month === 2){
      season = '겨울'
    }else if(month === 3 || month === 4 || month === 5){
      season = '봄'
    }else if(month === 6 || month === 7 || month === 8){
      season = '여름'
    }else if(month === 9 || month === 10 || month === 11){
      season = '가을'
    }
    //결과 화면 출력
    resultNode.innerHTML = `입력하신 월은 ${month}이며, ${season}입니다.`
  }
}

const switchTest = () => {
    let resultNode = document.querySelector('#result')
    let month = prompt('월을 숫자로 입력하세요.')
    if(month == null){
      resultNode.innerHTML = '입력하지 않았습니다.'
    }else if(isNaN(month) || month <1 || month > 12){
      resultNode.innerHTML = '잘못 입력하였습니다. '
    } else {
        month = parseInt(month);
        switch(month){
            case 12:
            case 1: 
            case 2: {
                resultNode.innerHTML = `입력하신 월은 ${month}이며, 겨울입니다.`
                break;
            }
            case 3: 
            case 4: 
            case 5: {
                resultNode.innerHTML = `입력하신 월은 ${month}이며, 봄입니다.`
                break;
            }
            case 6: 
            case 7: 
            case 8: {
                resultNode.innerHTML = `입력하신 월은 ${month}이며, 여름입니다.`
                break;
            }
            case 9: 
            case 10: 
            case 11: {
                resultNode.innerHTML = `입력하신 월은 ${month}이며, 가을입니다.`
                break;
            }
            default: {
                resultNode.innerHTML = 'default가 실행 되었습니다.'
                break;
            }
        } 
    }

    
 
}