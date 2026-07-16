function ruajMaterial() {

    let emri = document.getElementById("emriMaterialit").value;
    let sasia = document.getElementById("sasia").value;
    let cmimi = document.getElementById("cmimi").value;


    let materiali = {
        emri: emri,
        sasia: sasia,
        cmimi: cmimi
    };


    let materialet = JSON.parse(localStorage.getItem("materialet")) || [];


    materialet.push(materiali);


    localStorage.setItem("materialet", JSON.stringify(materialet));


    alert("Materiali u ruajt me sukses!");


    window.location.href = "materialet.html";

}
