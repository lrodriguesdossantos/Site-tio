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
            await fetch(this.url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(this.getFormObject()),
            });

            // Redireciona após sucesso
            window.location.href = "index.html"; // coloque sua página aqui

        } catch (error) {
            this.displayError();
        }
    }

    init() {
        if (this.form) {
            this.form.addEventListener("submit", this.sendForm);
        }
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    success: "<h1 class='success'>Mensagem enviada!</h1>",
    error: "<h1 class='erro'>Não foi possível enviar sua mensagem.</h1>",
});

formSubmit.init();
