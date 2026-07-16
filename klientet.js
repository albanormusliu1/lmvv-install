function ruajKlient() {

    let emri = document.getElementById("emri").value;
    let telefoni = document.getElementById("telefoni").value;
    let adresa = document.getElementById("adresa").value;
    let puna = document.getElementById("puna").value;

    let klienti = {
        emri: emri,
        telefoni: telefoni,
        adresa: adresa,
        puna: puna
    };

    let klientet = JSON.parse(localStorage.getItem("klientet")) || [];

    klientet.push(klienti);

    localStorage.setItem("klientet", JSON.stringify(klientet));

    alert("Klienti u ruajt me sukses!");

    window.location.href = "klientet.html";
}
