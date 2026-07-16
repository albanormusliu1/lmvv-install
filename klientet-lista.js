import { db } from "./firebase.js";


import {

collection,

getDocs

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



let tabela = document.getElementById("listaKlienteve");



async function shfaqKlientet(){


let klientet = await getDocs(

collection(db,"klientet")

);



let numer = 1;



klientet.forEach((doc)=>{


let klienti = doc.data();



tabela.innerHTML += `

<tr>

<td>${numer}</td>

<td>${klienti.emri}</td>

<td>${klienti.telefoni}</td>

<td>${klienti.adresa}</td>

</tr>

`;



numer++;


});


}



shfaqKlientet();
