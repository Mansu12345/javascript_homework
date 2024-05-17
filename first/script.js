//1번 문제 
document.querySelector("#container").addEventListener("click", function(event)  {

       if (event.target.classList.contains("box")) {
        event.target.classList.add("clicked");
     
     
    }
})


//2번 문제
function getSquare(number) {
    return number**2
}

const result = getSquare(5);
console.log(result);



/* 트러블 발생했던 코드
 if ( event.currentTarget === event.target) {
        document.querySelector(".box").classList.add("clicked");
        event.stopPropagation();
    }else {
        return 
    }
    */