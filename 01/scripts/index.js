// 기존 함수 선언
 
// function funPrint(){
//   alert("반갑습니다");
//   console.log("버튼1클릭");
// }
// function funPrint(){
//   alert("수고하셨습니다");
//   console.log("버튼2클릭");
// }

//ES6 : 화살표 함수
const funPrint = (n) => {
  // console.log( n+"번 클릭");
    console.log(`${n}번클릭`)  
}

//변수

// let x = 100;
// x = 100 * 2;
// console.log(x);

// JQuery
// $document.ready(){

// }

// DOM이 생성이 되고 난 후에 요소를 CRUD해야한다.
// document.addEventListener("DOMContentLoaded",콜백함수);
// document.addEventListener("DOMContentLoaded",function() {});
// document.addEventListener("DOMContentLoaded",()=>{});
  
  document.addEventListener("DOMContentLoaded",()=> {
  // console.log(document.getElementById("bt").innerHTML);
  
  /*요소 생성*/
  // const bt = document.createElement("button")
  // document.getElementById("bt").append(bt);

  //요소 찾기//
  //결과 HTML Collection
  // const bts1 = document.getElementsByClassName("bt1");
  // console.log(bts1)
  
  // 결과 HTML Collection
  // const bts2 = document.getElementsByTagName("button");
  // console.log(bts2)
  
  // 결과
  // const bts3 = document.querySelector(".bt1");
  // console.log(bts3)

  //결과 Nodelist
  const bts4 = document.querySelectorAll(".bt1");
  // console.log(bts4)

  // console.log(bts4[0].innerHTML);
  // console.log(bts4[0].innerText);
  // console.log(bts4[1].textContent);

  /* 반복문 for */
  //  결과 Nodelist를 반복으로 가져오기
      // for(let i=0; i < bts4.length; i ++){
      //   console.log(bts4[i]);
        // bts4[i].innerHTML= `myButton${i+1}`
        
      // }
  /* 반복문 for in => key값만 가지고 옴*/
      // for(let i in bts4) {
      //   console.log(i)
      // }
  /* 반복문 forEach 메소드형식 중간에 종료할 수 없음 */
    bts4.forEach((item)=>{
      console.log(item.innerHTML);
    });    
    bts4.forEach((item,a)=>{
      console.log(`${a} : ${item.innerHTML}`);
    });    
  /* 반복문 for of*/
    for(let item of bts4){
      console.log(item);
    }
    for(let [a , item]of bts4.entries()){
      console.log(`${a} : ${item.innerHTML}`);
      break;
    }
    


 });
