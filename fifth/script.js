console.log("1번문제")
//문제1
const data = [
    {
     이름 : "철수",
     나이 : 19,
     성별 : "남",   
    },
    {
    이름 : "짱구",
    나이 : 20,
    성별 : "남",
    },
    {
     이름 : "유리",
     나이 : 21,
     성별 : "여", 
       }
]

console.log(data);

console.log("2번문제 페이지 참고")

//문제2
const dataContainer = document.querySelector(".data-container");



data.forEach(function(data) {
    let template = `<div class = "data-container">
                    <h3 class="name"> 이름:  ${data.이름}</h3>            
                    <h3 class="age"> 나이: ${data.나이}</h3>
                    <h3 class="gender">성별: ${data.성별}</h3>
    </div>`;
    dataContainer.insertAdjacentHTML("beforeend", template);
})


//문제3 
console.log("3번 문제")

const findGirl = data.find((person) => {
    return person.성별 === "여"
})

console.log(findGirl);


//문제4 
console.log("4번문제")

const filters = data.filter((abc) => {
    return abc.성별 === "남"
})
console.log(filters)



console.log("5번문제")

//문제5 
const mapping = data.map((object) => {
    return {
        이름 : object.이름,
        나이 : object.나이 + 10,
        성별 : object.성별,    }
})
console.log(data)
console.log(mapping)

//6번 문제 ***안됨
console.log("6번문제")


const clone = [...data]

clone.sort((a,b) => {
    return b.나이 - a.나이
})

console.log(clone)
console.log(data)


// 7번 문제 
console.log("7번문제")

const user = {
    이름:"병수",
    나이: 20,
    주소: "시골",
}

const call = user.이름;
const old = user.나이;
const home = user.주소;

console.log(call);
console.log(old);
console.log(home);

//8번 문제

localStorage.setItem("user", JSON.stringify(user))

const searchItem = localStorage.getItem("user")
if (searchItem) {
    const search = JSON.parse(searchItem)
    console.log(search)
}

if (searchItem) { 
    const search = JSON.parse(searchItem)
    search.나이 = 30
    localStorage.setItem("user", JSON.stringify(search))
}

localStorage.removeItem("user")

const deleteItem = localStorage.getItem("user")
console.log(deleteItem)


///5-1번 문제
const options = {
    method: 'GET',
    }

function url() {
    const url = 'https://jsonplaceholder.typicode.com/posts'



fetch(url, options)
    .then((response) => response.json())
    .then((data) => console.log(data))

}

console.log(url)
