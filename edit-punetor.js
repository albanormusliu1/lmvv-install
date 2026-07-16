let puntoret = JSON.parse(localStorage.getItem("puntoret")) || [];


let index = localStorage.getItem("puntorEdit");



if(index === null){

window.location.href="punetoret.html";

}



let puntori = puntoret[index];



document.getElementById("emri").value = puntori.emri;

document.getElementById("telefoni").value = puntori.telefoni;

document.getElementById("pozita").value = puntori.pozita;




document.getElementById("formaEdit").addEventListener("submit",function(e){


e.preventDefault();



puntoret[index] = {


emri: document.getElementById("emri").value,


telefoni: document.getElementById("telefoni").value,


pozita: document.getElementById("pozita").value


};



localStorage.setItem(

"puntoret",

JSON.stringify(puntoret)

);



localStorage.removeItem("puntorEdit");



alert("Punëtori u ndryshua me sukses!");



window.location.href="punetoret.html";



});
