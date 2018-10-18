// var btnSubmit = document.getElementById("btnSubmit");
// btnSubmit.onclick = funtion(){
//     var  txtUsername = document.getElementById("txtUsername");
//     var msgError = document.getElementById("msg-error");
//     // var txtPassword = document.getElementById("txtPassword");
//     // var txtEmail = document.getElementById("txtEmail");
//     // var txtFullname = document.getElementById("txtFullname");
//     if (txtUsername.value.length < 5){
//         msgError.innerHTML = "* Tên của bạn quá ngắn.";
//         msgError.classList.remove("Hidden-text");
//     } else if (txtUsername.value.length > 20){
//         msgError.innerHTML = "* Tên của bạn quá dài.";
//         msgError.classList.remove("Hidden-text");
//     } else {
//         msgError.innerHTML="Tên hợp lệ";
//         msgError.classList.remove("Hidden-text");
//         msgError.classList.remove("Danger-text");
//         msgError.classList.add("Success-text");
//     }
// }
var btnSubmit = document.forms["register-form"]["btn-submit"];
btnSubmit.onclick = function () {
    var txtUsername = document.forms["register-form"]["username"];
    var msgUsername = txtUsername.nextElementSibling;
    if (txtUsername == null || txtUsername.value.length == 0) {
        msgUsername.innerHTML = "*Vui lòng nhập tên của bạn.";
        msgUsername.classList.remove("hidden-text");
    }
    else if (txtUsername.value.length<5){
        msgUsername.innerHTML="*Tên của bạn quá ngắn";
        msgUsername.classList.remove("hidden-text");
    }
    else if (txtUsername.value.length > 20){
        msgUsername.innerHTML="*Tên của ban quá dài";
        msgUsername.classList.remove("hidden-text");
    } else {
        msgUsername.innerHTML="Tên hợp lệ";
        msgUsername.classList.remove("hidden-text");
        msgUsername.classList.remove("danger-text");
        msgUsername.classList.add("success-text");
    }

    var txtPassword = document.forms["register-form"]["password"];
    var msgPassword = txtPassword.nextElementSibling;
    if (txtPassword == null || txtPassword.value.length == 0){
        msgPassword.innerHTML = "* Vui lòng nhập password của bạn.";
        msgPassword.classList.remove("hidden-text");
    }else{
        msgPassword.innerText = "Password hợp lệ";
        msgPassword.classList.remove("hidden-text");
        msgPassword.classList.remove("danger-text");
        msgPassword.classList.add("success-text")
    }
    var txtFullname = document.forms["register-form"]["fullName"];
    var msgFullname = txtFullname.nextElementSibling;
    if (txtFullname == null || txtFullname.value.length == 0){
        msgFullname.innerHTML = "*Vui lòng nhập password của bạn.";
        msgFullname.classList.remove("hidden-text");
    }
    else if (txtFullname.value.length <5){
        msgFullname.innerHTML = "ten cua ban qua ngan";
        msgFullname.classList.remove("hidden-text");
    }
    else if (txtFullname.value.length >20){
        msgFullname.innerHTML = "ten cua ban qua dai";
        msgFullname.classList.remove("hidden-text");
    }
    else{
        msgFullname.innerText = "Tên hợp lệ";
        msgFullname.classList.remove("hidden-text");
        msgFullname.classList.remove("danger-text");
        msgFullname.classList.add("success-text")
    }
    var txtEmail = document.forms[0]["email"];
    var msgEmail = txtEmail.nextElementSibling;
    var a=txtEmail.value.includes("@");
    if (txtEmail == null || txtEmail.value.length == 0) {
        msgEmail.innerHTML ="*Vui lòng nhập email của bạn.";
        msgEmail.classList.remove("hidden-text");
    }
    else if (a==false){
        msgEmail.innerHTML = "Sai cú pháp email!";
        msgEmail.classList.remove("success-text");
        msgEmail.classList.add("danger-text");
        msgEmail.classList.remove("hidden-text");
    }
    else{
        msgEmail.innerHTML = "Email hợp lệ.";
        msgFullname.classList.remove("hidden-text");
        msgFullname.classList.remove("danger-text");
        msgFullname.classList.add("success-text");
    }
}
