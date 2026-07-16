let faturat = JSON.parse(localStorage.getItem("faturat")) || [];


let fatura = faturat[faturat.length - 1];


if(fatura){


document.getElementById("nr").innerHTML =
"#" + (faturat.length);



document.getElementById("klienti").innerHTML =
fatura.klienti;



document.getElementById("pershkrimi").innerHTML =
fatura.pershkrimi;



document.getElementById("materialet").innerHTML =
fatura.materialet;



document.getElementById("totali").innerHTML =
fatura.totali;



document.getElementById("statusi").innerHTML =
fatura.statusi;



}
