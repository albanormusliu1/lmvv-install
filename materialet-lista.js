let materialet = JSON.parse(localStorage.getItem("materialet")) || [];

let tabela = document.getElementById("listaMaterialeve");


materialet.forEach((material, index) => {

    tabela.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${material.emri}</td>
        <td>${material.sasia}</td>
        <td>${material.cmimi} €</td>
    </tr>
    `;

});
