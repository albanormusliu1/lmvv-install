let klientet = JSON.parse(localStorage.getItem("klientet")) || [];

let tabela = document.getElementById("listaKlienteve");


klientet.forEach((klienti,index)=>{


tabela.innerHTML += `

<tr>

<td>${index + 1}</td>

<td>${klienti.emri}</td>

<td>${klienti.telefoni}</td>

<td>${klienti.adresa}</td>


<td>

<button onclick="editoKlient(${index})">
✏️ Edit
</button>


</td>

</tr>

`;

});



function editoKlient(index){

localStorage.setItem(
"klientEdit",
index
);


window.location.href="edit-klient.html";


}
