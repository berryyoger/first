const lang = document.getElementById("lang")
const login = document.getElementById("login")
const todo = document.getElementById("todo")

const translateToEng = () =>{
    login.placeholder = ("What is your name?")
    todo.placeholder = ("Write To Do and Press Enter")
    console.log(lang.value)
}

const translateToKr = () =>{
    login.placeholder = ("이름을 입력해주세요.")
    todo.placeholder = ("할 일을 작성하고 엔터키를 누르세요.")
    console.log(lang.value)
}

const translate = () => {
    if(lang.value == "english"){
        translateToEng()  
    }
    else if(lang.value == "korean"){
        translateToKr()
    }
}

lang.addEventListener("click", translate)