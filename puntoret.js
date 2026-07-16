function ruajPuntor() {

    let emri = document.getElementById("emri").value;
    let telefoni = document.getElementById("telefoni").value;
    let pozita = document.getElementById("pozita").value;


    let puntori = {
        emri: emri,
        telefoni: telefoni,
        pozita: pozita
    };


    let puntoret = JSON.parse(localStorage.getItem("puntoret")) || [];


    puntoret.push(puntori);


    localStorage.setItem(
        "puntoret",
        JSON.stringify(puntoret)
    );


    alert("Punëtori u ruajt me sukses!");


    window.location.href = "punetoret.html";

}
