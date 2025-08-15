const key = import.meta.env.PUBLIC_EMAILJS_KEY;
const service = import.meta.env.PUBLIC_EMAILJS_SERVICE;
const template = import.meta.env.PUBLIC_EMAILJS_TEMPLATE;

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    // prevent event listener to happen twice
    form.addEventListener("submit", handleSubmit, { once: true });
});

emailjs.init({
  publicKey: key,
});

function handleSubmit(event) {
    event.preventDefault();

    // variable corresponding to the inputs, to format the mail
    let parameters = {
        name: document.getElementById("name").value,
        time: new Date().toLocaleString(),
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    // allows to send an email via the emailjs api
    emailjs.send(service, template, parameters)
        .then(() => alert("Email envoyé avec succès."))
        .catch((error) => {
            console.error("Erreur EmailJS :", error);
            alert("Une erreur est survenue : " + error);
        });
}