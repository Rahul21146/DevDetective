const loginButton=document.getElementById("login_btn");
const heroSecetion=document.getElementById("hero_secetion");
const mainSecetion=document.getElementById("main");
const signupSecetion=document.getElementById("signup_page");
const signUpButton=document.getElementById("sign_up_btn");
const iconChange=document.getElementById("mode");
const menuList=document.querySelector(".main_content_feature");
const logInNavbar=document.querySelector(".login_navbar");
const mainContent=document.querySelector(".main_content_navbar_div");



//when we click the log-in  Button then this function will work;
function loginButtonClickFunction(){
    let enterEmail="";
    let enterPassword="";
    enterEmail=document.getElementById("login_email").value;//fetch the element fron the emailbox
    enterPassword=document.getElementById("login_password").value;//fetch the element fron the pasword box

    if(enterEmail==="" && enterPassword===""){
        alert("Plese enter the  Email and Password");
    }

    console.log("Email:", enterEmail);
    console.log("Password:", enterPassword);

    //password and the email matching if match then it move to the main content secetion
    if(enterEmail === 'rahulsingh@gmail.com' && enterPassword === 'rahulwwer123#'){ 
        heroSecetion.classList.add("active");
        logInNavbar.classList.add("active");
        signupSecetion.classList.remove("active");
        signUpButton.classList.add("active");
        mainContent.classList.add("active");
        
    }

    else{
        alert("Plese enter the valid Email and Password");
    }
}



//when we click the sign-in  Button then this function will work;
function signUpButtonClickFunction(){
    heroSecetion.classList.add("active");
    //mainSecetion.classList.remove("active");
    signupSecetion.classList.add("active");
    signUpButton.classList.add("active");
    mainContent.classList.remove("active");
}



//when we click the register  Button then this function will work;
function registerButtonClickFunction(){
    heroSecetion.classList.remove("active");
    //mainSecetion.classList.remove("active");
    alert("Enter the Email ans password to logIn in the devdetective.");
    signupSecetion.classList.remove("active");
    signUpButton.classList.add("active");
    mainContent.classList.remov("active");
}


let threeDots=true;
function menuswap(){
    if(threeDots==true){
        iconChange.className="fa-solid fa-xmark";
        threeDots=false;
        menuList.classList.add("active");
    }
    else{
        iconChange.className="fa-solid fa-bars";
        threeDots=true;
        menuList.classList.remove("active");
    }
}


iconChange.addEventListener("click",()=>{
    menuswap();
});
menuList.addEventListener("click",()=>{
    menuswap();
});





