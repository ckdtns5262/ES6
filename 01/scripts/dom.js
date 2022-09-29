//랜덤수
let ranNum;
// 사용자가 선택한 수
let userNum;

// 화면 보기 함수
const dispDom = (msgP, inNumP, bt1P, bt2P) => {
  //DOM 제어
  document.getElementById("msg").style.display = msgP;
  document.getElementById("inNum").style.display = inNumP;
  document.getElementById("bt1").style.display = bt1P;
  document.getElementById("bt2").style.display = bt2P;
};

// 주사위
const diceShow = () => {
  //랜덤수 생성
  ranNum = Math.floor(Math.random() * 6) + 1;
  console.log(`주사위 랜덤수 => ${ranNum}`);

  //DOM 제어
  dispDom("none", "block", "none", "block");
};
// 확인
const okShow = () => {
  userNum = form1.num.value;
  console.log(`사용자 선택 확인 수 => ${userNum}`);
  //DOM 제어
  dispDom("block", "none", "block", "none");

  // 주사위 그림
  let tag = `<img src="/images/${ranNum}.png">`;
  document.getElementById("msg").innerHTML = tag;
  
  
  //ox 그림
  let ox;
  if (ranNum == userNum) {
    tag = `{tag}<img src="/images/o.png">`;
  } else {
    tag = `{tag}<img src="/images/x.png">`;
  }
};

//DOM이 생성이 되고 난 후에 요소를 CRUD 해야함.
document.addEventListener("DOMContentLoaded", () => {
  // 주사위 버튼만 보여야 함

  document.getElementById("msg").style.display = "none";
  document.getElementById("inNum").style.display = "none";
  document.getElementById("bt2").style.display = "none";
});
