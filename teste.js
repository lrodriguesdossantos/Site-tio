class FormSubmit{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formenviar = document.querySelector(settings.enviar);
        if (this.form) {
           this.url = this.form.getAttribute("action");
        }
    }
    displaySuccess(){
       this.form.innerHTML = this.settings.Success;
    }

displayError(){
   this.form.innerHTML = this.settings.error; 
}

init(){
    if(this.form) this.enviar.addEventListener("click", () => this.displaySuccess());
    return this;
}

}
const formSubmit = new FormSubmit({
    form: "[data-form]",
    enviar: "[data-button]",
    Success: "<h1 class='success'>Mensagem enviada!</h1>",
    Error: "<h1 class='erro'>Não foi possivel enviar sua mensagem.</h1>",
});


formSubmit.init();
