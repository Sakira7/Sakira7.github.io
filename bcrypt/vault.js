var bcrypt = require("bcrypt");
const passwordField = document.getElementById("pw");
const togglePassword = document.querySelector(".password-toggle-icon i");

togglePassword.addEventListener("click", function () {
if (passwordField.type === "password") {
    passwordField.type = "text";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");
} else {
    passwordField.type = "password";
    togglePassword.classList.remove("fa-eye-slash");
    togglePassword.classList.add("fa-eye");
}
});

let submit = document.getElementById("submit_btn");
let typed_pw = passwordField.value;
let hash = "$2b$10$y6d2yvZxTv6vRWSbdUruWeh1bLWC/c3910bwIMICT8CuPmHu5rqIe";


submit.addEventListener("click", ()=>{


    typed_pw = bcrypt.hashSync(hash, 10);
    bcrypt.compare(typed_pw, hash, (err, result)=>{
        if(err){
            return;
        }
        console.log(result);
    });



})