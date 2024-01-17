function validLogin() {
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;

    if (email === "marielle@gmail.com" && pass === "mariellepretty") {
        alert("Login Successfully");
        document.getElementById("pass").value = "";
        document.getElementById("email").value = "";
    } else {
        alert("Wrong Password");
        document.getElementById("pass").value = "";
    }
}