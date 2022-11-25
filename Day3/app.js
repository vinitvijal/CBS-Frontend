function check(){

    var user= document.loginform.username.value
    var password=document.loginform.password.value
    if ((user.length>0 && user.length<30) && (password.length>8)){
        alert("LOGGED IN SUCCESSFUL")
    } else if ((user.length>0 && user.length<30) && (password.length<8)){
        alert("PASSWORD IS INCORRECT") 
    } else if ((us))
}