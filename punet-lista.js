let punet = JSON.parse(localStorage.getItem("punet")) || [];


let tabela = document.getElementById("listaPuneve");



punet.forEach((pune,index)=>{


tabela.innerHTML += `

<tr>

<td>${index + 1}</td>

<td>${pune.klienti}</td>

<td>${pune.puntori}</td>

<td>${pune.lloji}</td>

<td>${pune.statusi}</td>


<td>

<button onclick="editoPune(${index})">

✏️ Edit

</button>

</td>


</tr>

`;

});




function editoPune(index){


localStorage.setItem(

"puneEdit",

index

);


window.location.href="edit-pune.html";


}
