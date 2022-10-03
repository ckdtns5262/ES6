//폭탄이 있는 위치를 나타내는 배열
//DOM이 로드가 되면 반복문을 이용하여 [0,0,0,0,0,0,0,0,1]로 초기화
let num = [0, 0, 0, 0, 0, 0, 0, 0, 1];


 //박스를 선택한 순서를 기록하는 배열
 let selNum = [];

 // //박스를 선택한 개수를 기록하는 변수
 let cnt = 0;

 //폭탄이 섞였는지 체크하는 flag변수
 let shuffleFlag = false;

//폭탄 섞기
const boxShuffle = () => {
    shuffle();
    
   
   


}

// 셔플 함수
const shuffle = () => {
    for (let i = 0; i < num.length; i++) {
        let idx1 = Math.floor(Math.random() * 9);
        let idx2 = Math.floor(Math.random() * 9);
        
        if (idx1 != idx2) {
            let temp = num[idx1];
            num[idx1] = num[idx2];
            num[idx2] = temp;
        }
    }
    console.log(num)
}

// show 함수 누를때
const show = (idx) => {
    if(shuffleFlag = true){
        showImg(idx);
      
    }else{
        console.log(alert("폭탄을 섞어주세요"))
        
      
    }
   
}
// show 눌렀을때 이미지 보여주는 함수
const showImg = (idx)=>{
    if (num[idx - 1]) {                                         // 1이면 폭탄사진
        console.log(alert("폭탄입니다 꽝"))
        let tag = `<img src="/pj3/images/boom.png">`
        document.getElementById(`box${idx}`).innerHTML = tag;

    } else {
        let tag = `<img src="/pj3/images/hart.png">`            // 1이 아니면 하트사진
        document.getElementById(`box${idx}`).innerHTML = tag;
        cnt += 1
    }
    if (cnt == 8) {
        for (let i = 1; i <= 9; i++) {                          // 하트사진이 8개면 
            let tag = `<img src="/pj3/images/hart.png">`
            document.getElementById(`box${i}`).innerHTML = tag;
            console.log(("성공입니다 대박👍"))
        }
    }
}






/* DOM이 로드된 후에 클릭이벤트 연결*/
document.addEventListener("DOMContentLoaded", () => {


});



