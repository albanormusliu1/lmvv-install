import { db } from "./firebase.js";

import {
collection,
addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const forma = document.getElementById("formaKlientit");



forma.addEventListener("submit", async (e)=>{


e.preventDefault();



let klienti = {

emri: document.getElementById("emri").value,

telefoni: document.getElementById("telefoni").value,

adresa: document.getElementById("adresa").value,

data: new Date()

};



try {


await addDoc(

collection(db,"klientet"),

klienti

);



alert("Klienti u ruajt me sukses!");



window.location.href="klientet.html";



}

catch(error){


alert("Gabim gjatë ruajtjes: " + error.message);


}



});
