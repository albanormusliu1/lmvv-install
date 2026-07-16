let klientet = JSON.parse(localStorage.getItem("klientet")) || [];
let puntoret = JSON.parse(localStorage.getItem("puntoret")) || [];
let punet = JSON.parse(localStorage.getItem("punet")) || [];
let materialet = JSON.parse(localStorage.getItem("materialet")) || [];
let faturat = JSON.parse(localStorage.getItem("faturat")) || [];

// Kartat

document.getElementById("klientet").innerHTML = klientet.length;
document.getElementById("puntoret").innerHTML = puntoret.length;
document.getElementById("punet").innerHTML = punet.length;
document.getElementById("materialet").innerHTML = materialet.length;
document.getElementById("faturat").innerHTML = faturat.length;

// Tabela

document.getElementById("rKlientet").innerHTML = klientet.length;
document.getElementById("rPuntoret").innerHTML = puntoret.length;
document.getElementById("rPunet").innerHTML = punet.length;
document.getElementById("rMaterialet").innerHTML = materialet.length;
document.getElementById("rFaturat").innerHTML = faturat.length;
