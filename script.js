/* 문제 2번 ) DOM 조작과 이벤트 */
document.querySelector(".btn").addEventListener("click", function () {
    document.querySelector(".title").innerHTML = "제목아니다";
 })


 /* 문제 3번) 함수 */
 function sum(num1, num2) {
    const result = num1 + num2
    console.log(result);
 }

 sum(1,2);

 
 /* 문제 4번) 조건문 */ 
 function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("짝수입니다.")
    }else {
        console.log("홀수입니다.")
    }
 }

 isEvenOrOdd(8);
 isEvenOrOdd(9);


 /* 문제 5번) 변수 */ 
  const name = "병수" ;
  const age = 20 ;

  console.log ("이름: "+ name);
  console.log("나이: " + age);

  

