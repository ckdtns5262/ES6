//function 키워드로 함수 생성
//  function show(){
//   console.log("show");
// }

// 화살표 함수형식으로 생성 : 함수 내 명령이 하나이면 {} 생략가능
//                          return문 하나이면 return도 생략가능
// const show = ()=> console.log("show 중괄호 생략")

// 화살표 함수형식으로 생성
const show = () => {

  const msgId = document.querySelector("#msg");
  // msgId.innerHTML=("<h2>페이스북</h2>");
  // console.log(msgId.innerHTML);

  // msgId.innerText="<h2>페이스북</h2>"
  // console.log(msgId.innerText);

  // msgId.innerContent ="<h2>페이스북</h2>";
  // console.log(msgId.innerContent);

  //태그 만들기
 
  //1. 태그만들기
  let tag = "";
  /*
  for(let i=1; i <= 6; i++) { 
    //tag = tag + '<div class="divMsg">' + i + '</div>' ;
    //템플릿문자열
    tag = tag + `<div class="divMsg"><img src="./images/${i}.png" id="msdImgId${i}"></div>`
  }
  */

  let i = Math.floor(Math.random() * 6) + 1;
  tag = `<div class="divMsg"><img src="/images/${i}.png" id="msgImg"></div>`
  console.log(tag);

  //2.DOM에서 태그를 넣을 요소 선택
  const msgDiv = document.querySelector('#msg');

  //3.선택된 요소의 HTML 변경
  msgDiv.innerHTML = tag;
  
  //4.동적으로 생성된 HTML요소도 스타일 변경 가능
  let msgImg = document.querySelector('#msgImg') 
  msgImg.style.maxWidth = "100px" ;
  msgImg.style.maxheight = "100px" ;
  }

/* DOM 요소가 생성된 후에 실행*/
document.addEventListener("DOMContentLoaded", () => {
  
  
});
// 