//selects
const goToSignUp = document.querySelector("#go-to-signup")
const signUpContainer = document.querySelector("#signup-container")
const logInContainer = document.querySelector("#login-container")
const goToLogIn = document.querySelector("#go-to-login")
const signUpForm = document.querySelector("#signup-form")
const signUpName = document.querySelector("#signup-name")
const signUpEmail = document.querySelector("#signup-email")
const signUpUsername = document.querySelector("#signup-username")
const signUpPassword = document.querySelector("#signup-password")
const signUpCpassword = document.querySelector("#signup-cpassword")
const loginForm = document.querySelector("#login-form")
const logInUserName = document.querySelector("#login-username")
const loginPassword = document.querySelector("#login-password")


//events
goToSignUp.addEventListener("click", openSignUp)
goToLogIn.addEventListener("click", openLogIn)
signUpForm.addEventListener("submit", validate)
loginForm.addEventListener("submit", loginUser)


//functions

function validate(e){
    e.preventDefault()
    const signUpNameVal = signUpName.value.trim();
    const signUpEmailVal = signUpEmail.value.trim()
    const signUpUsernameVal = signUpUsername.value.trim()
    const signUpPasswordVal = signUpPassword.value.trim()
    const signUpCpasswordVal = signUpCpassword.value.trim()

    if(signUpNameVal === ""){
        setError(signUpName, "Name can not be blank!")
    }else{
        console.log(`${signUpNameVal} is your name`)
    }
    
    if(signUpEmailVal===""){
        setError(signUpEmail, "Email can not be blank!")
    }else{
        console.log(`${signUpEmailVal} is your Email`)
    }

    if(signUpUsernameVal===""){
        setError(signUpUsername, "Username can not be blank!")
    }else if(signUpUsernameVal.length <=2){
        setError(signUpUsername, "Username can not be less than 3 letters.")
    }else{
        console.log(`${signUpUsernameVal} is your username`)
    }

    if(signUpPasswordVal===""){
        setError(signUpPassword, "Password can not be blank!")
    }else if(signUpPasswordVal.length <=7){
        setError(signUpPassword, "Password must be at least 8 character!")
    }else{
        console.log("you added your password")
    }

    if(signUpCpasswordVal===""){
        setError(signUpCpassword, "Confirm password can not be blank!")
    }else if(signUpCpasswordVal != signUpPasswordVal){
        setError(signUpCpassword, "It's not matched with the password")
    }else{
        console.log("you added your confirm password")
    }
}

function loginUser(e){
    e.preventDefault();
    const username = logInUserName.value;
    const password = loginPassword.value;
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        const user = users.find(user => user.username == username && user.email == password)
        if(user){
            alert(`Welcome ${user.name} !!`)
        } else {
            alert("Username or password is invalid!")
        }
    })
    .catch(error => {
        alert(error)
    })
}

function openSignUp(e){
    e.preventDefault();
    signUpContainer.classList.remove("hidden")
    logInContainer.classList.add("hidden")
}

function openLogIn(e){
    e.preventDefault();
    signUpContainer.classList.add("hidden")
    logInContainer.classList.remove("hidden")
}

function setError(element, errorMsg){
    const inputControl = element.parentElement;
    const error = inputControl.querySelector(".error")
    error.innerText = errorMsg;
}