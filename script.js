
function darkMode() {
    document.body.classList.toggle("dark");
}

function menu() {
    document.getElementById("navLinks")
        .classList.toggle("show");
}

function submitForm() {
    let name = document.getElementById("username").value.trim();
    let result = document.getElementById("result");

    if (name === "") {
        result.innerText = "Please enter your name!";
        result.style.color = "red";
    } else {
        result.innerText = "Welcome, " + name + "! Thanks for visiting.";
        result.style.color = "green";
    }
}

