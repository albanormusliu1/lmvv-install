let puntoret = JSON.parse(localStorage.getItem("puntoret")) || [];

let tabela = document.getElementById("listaPuntoreve");


puntoret.forEach((puntor, index) => {

    tabela.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${puntor.emri}</td>
        <td>${puntor.telefoni}</td>
        <td>${puntor.pozita}</td>
    </tr>
    `;

});
