let count = 0; // 초기 카운트 값 설정

const intervalId = setInterval(function() {
    // 카운트를 1씩 증가시킴
    count++;

    // 현재 카운트 값을 id가 counter인 요소에 출력
    document.querySelector("#counter").innerText = count;

    // 카운트가 5가 되면
    if (count === 5) {
        console.log("종료"); // '종료' 메시지 출력
        clearInterval(intervalId); // setInterval 종료
    }
}, 1000); // 1초 간격으로 실행

console.log(12345);