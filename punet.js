function ruajPune() {

    let klienti = document.getElementById("klienti").value;
    let punetori = document.getElementById("punetori").value;
    let lloji = document.getElementById("lloji").value;
    let statusi = document.getElementById("statusi").value;


    let puna = {
        klienti: klienti,
        punetori: punetori,
        lloji: lloji,
        statusi: statusi
    };


    let punet = JSON.parse(localStorage.getItem("punet")) || [];

    punet.push(puna);

    localStorage.setItem("punet", JSON.stringify(punet));


    alert("Puna u ruajt me sukses!");

    window.location.href = "punet.html";

}
