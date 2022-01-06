let correct_pass = "azerty123";
let correct_email = "test@test.fr";

document.getElementById("login-form1").addEventListener('submit', function(evt){
    evt.preventDefault();
    let pass = document.getElementById("input-pass").value;
    let email = document.getElementById("input-email").value;

    if (correct_email === email) {
        if (correct_pass === pass) {
            document.location.href = "admin-panel.html";
        } else {
            console.log("incorrect password");
        }
    } else {
        console.log("incorrect email");
    }
})







