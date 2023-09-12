//selects
const goToSignUp = document.querySelector("#go-to-signup")
const signUpContainer = document.querySelector("#signup-container")
const logInContainer = document.querySelector("#login-container")
const goToLogIn = document.querySelector("#go-to-login")


//events
goToSignUp.addEventListener("click", openSignUp)
goToLogIn.addEventListener("click", openLogIn)


//functions
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