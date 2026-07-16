let klientet = JSON.parse(localStorage.getItem("klientet")) || [];


let index = localStorage.getItem("klientEdit");



if(index === null){

window.location.href="klientet.html";

}



let klienti = klientet[index];



document.getElementById("emri").value = klienti.emri;

document.getElementById("telefoni").value = klienti.telefoni;

document.getElementById("adresa").value = klienti.adresa;



document.getElementById("formaEdit").addEventListener("submit",function(e){


e.preventDefault();



klientet[index] = {

emri: document.getElementById("emri").value,

telefoni: document.getElementById("telefoni").value,

adresa: document.getElementById("adresa").value

};



localStorage.setItem(

"klientet",

JSON.stringify(klientet)

);



localStorage.removeItem("klientEdit");



alert("Klienti u ndryshua me sukses!");



window.location.href="klientet.html";



});
