class FormSubmit {
    constructor(settings) {
        this.settings = settings;
        this.form = document.querySelector(settings.form);

        if (this.form) {
            this.url = this.form.getAttribute("action");
        }

        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess() {
        this.form.innerHTML = this.settings.success;
    }

    displayError() {
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field) => {
            formObject[field.name] = field.value;
        });
        return formObject;
    }

   async sendForm(event) {
    event.preventDefault();

    try {
        const response = await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(this.getFormObject()),
        });

        const data = await response.json();

        if (data.success === "true" || data.success === true) {
            // Redireciona para a página desejada
            window.location.href = "index.html"; // coloque aqui sua página
        } else {
            this.displayError();
        }

    } catch (error) {
        this.displayError();
    }
}
    if (data.success === "true" || data.success === true) {
    this.displaySuccess();
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}
