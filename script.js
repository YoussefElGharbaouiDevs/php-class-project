document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Veuillez remplir tous les champs requis.");
        event.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        event.preventDefault();
    } else {
        alert("Formulaire soumis avec succès !");
    }
});
