function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    let perdoruesit = JSON.parse(localStorage.getItem("perdoruesit")) || [];


    let perdoruesi = perdoruesit.find(
        user => user.username === username && user.password === password
    );


    if (perdoruesi) {

        localStorage.setItem(
            "perdoruesAktiv",
            JSON.stringify(perdoruesi)
        );

        window.location.href = "dashboard.html";

    } else {

        alert("Username ose fjalëkalimi është gabim!");

    }

}
