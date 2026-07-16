let klientet = JSON.parse(localStorage.getItem("klientet")) || [];

let tabela = document.getElementById("listaKlienteve");

klientet.forEach((klient, index) => {

    tabela.innerHTML += `
    <tr>
        <td>${index + 1}</td>
        <td>${klient.emri}</td>
        <td>${klient.telefoni}</td>
        <td>${klient.adresa}</td>
        <td>${klient.puna}</td>
    </tr>
    `;

});
