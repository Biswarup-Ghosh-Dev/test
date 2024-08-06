const button = document.getElementById("button");
const result = document.getElementById("result");

function validate(e) {
    const pass = document.getElementById("pass").value;
    const conPass = document.getElementById("con-pass").value;
    
    if (pass === conPass) {
        result.innerHTML = "Done";
    } else {
        result.innerHTML = "Failed";
    }
    console.log(pass, conPass);
}

button.addEventListener("click", validate);