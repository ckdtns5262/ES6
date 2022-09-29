
const show1 = () => {
  const msgId = document.getElementById("msgId")
  const inputId = document.getElementById("inpu");
  const bt1Id = document.getElementById("#t1");
  const bt2Id = document.getElementById("bt2");
  //주사위 그림 숨기기//

  inputId.style.display="none"
  //input
  bt1Id.style.display="none";
  

  //태그 만들기
 
  //1. 태그만들기
  let tag = "";
  
  let tag2 ="";

  
  for(let j=1; j<=6; j++){
  tag2 = tag2+`<span><input type="radio">${j}</span>`
  console.log(tag2);
}
  
  //2.DOM에서 태그를 넣을 요소 선택
  const msgDiv = document.querySelector('#msg');
  const inpDiv = document.querySelector('#inpu');

  //3.선택된 요소의 HTML 변경
  msgDiv.innerHTML = tag;
  inpDiv.innerHTML = tag2;
  
  //4.동적으로 생성된 HTML요소도 스타일 변경 가능
  // let msgImg = document.querySelector('#msgImg') 
  // msgImg.style.maxWidth = "100px" ;
  // msgImg.style.maxheight = "100px" ;

}
  

/* DOM 요소가 생성된 후에 실행*/
document.addEventListener("DOMContentLoaded", () => {
  function getHide(){
    document.querySelector("#bt2").style.display="none"
    document.querySelector(tag)
  } 

  
});
// 