let punet = JSON.parse(localStorage.getItem("punet")) || [];

let tabela = document.getElementById("listaPuneve");


punet.forEach((pune, index) => {

    tabela.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${pune.klienti}</td>
        <td>${pune.punetori}</td>
        <td>${pune.lloji}</td>
        <td>${pune.statusi}</td>
    </tr>
    `;

});
