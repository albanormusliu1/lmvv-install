let perdoruesit = [

    {
        username: "admin",
        password: "1234",
        roli: "admin"
    },

    {
        username: "punetor1",
        password: "1234",
        roli: "punetor"
    }

];


if (!localStorage.getItem("perdoruesit")) {

    localStorage.setItem(
        "perdoruesit",
        JSON.stringify(perdoruesit)
    );

}
