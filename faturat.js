function ruajFature() {

    let klienti = document.getElementById("klienti").value;
    let pershkrimi = document.getElementById("pershkrimi").value;
    let materialet = document.getElementById("materialet").value;
    let totali = document.getElementById("totali").value;
    let statusi = document.getElementById("statusi").value;


    let fatura = {
        klienti: klienti,
        pershkrimi: pershkrimi,
        materialet: materialet,
        totali: totali,
        statusi: statusi
    };


    let faturat = JSON.parse(localStorage.getItem("faturat")) || [];


    faturat.push(fatura);


    localStorage.setItem("faturat", JSON.stringify(faturat));


    alert("Fatura u ruajt me sukses!");


    window.location.href = "faturat.html";

}
