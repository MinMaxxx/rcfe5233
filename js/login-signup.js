function account(state){
    if(state === "login"){
        document.getElementById("login").style.display = "block";
        document.getElementById("signup").style.display = "none";
    }

    if(state === "signup"){
        document.getElementById("login").style.display = "none";
        document.getElementById("signup").style.display = "block";
    }
}