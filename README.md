# JavaScript 메모

## JavaScript

+ script 태그사용
  + 내부
    + head 태그 영역
    + body 태그 어디든 가능
  + 외부
    + src 속성
+ 화살표 함수

```javascript
  const function = (매개변수(파라미터))=> {
    return값 (`${n}번클릭`)
  }
```

+ DOM이 생성이 되고 난 후에 요소를 CRUD해야한다.

```
  document.addEventListener("DOMContentLoaded",콜백함수);
  document.addEventListener("DOMContentLoaded",function() {});
  document.addEventListener("DOMContentLoaded",()=>{});
```

+ 요소 생성

```
   const bt = document.createElement("button")
   document.getElementById("bt").append(bt);
```

+ 요소 찾기
  + 결과 HTML Collection

```
   const bts1 = document.getElementsByClassName("bt1");
   console.log(bts1)   
   const bts2 = document.getElementsByTagName("button");
   console.log(bts2)
  
  결과
  const bts3 = document.querySelector(".bt1");
  console.log(bts3)

  결과 Nodelist
  const bts4 = document.querySelectorAll(".bt1");
  console.log(bts4)
```
