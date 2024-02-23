class FormSubmit{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formenviar = document.querySelector(settings.enviar);

        if(this.form){
            this.url = this.form.getAttribute("action");     
        }
        this.sendForm = this.sendForm.bind(this);
    } 
    


    displaySuccess(){
        this.formen.innerHTML = this.settings.success;
    }

    displayError(){
        this.form.innerHTML = this.settings.error;
    }

    getFormObject() {
        const formObject = {};
        const fields = this.form.querySelectorAll("[name]");
        fields.forEach((field)=>{
            formObject[field.getAttribute("name")] = field.value;
        });
        return formObject;
    }

    onSubmission(event){
        event.preventDefault();
        event.target.disabled = true;
        event.target.innerText = "Enviando";  
    }

   if

    async sendForm(event) {
        try{
            this.onSubmission(event);
       await fetch(this.url,{
           method: "POST",
           headers: {
            "Content-Type": "application/josn",
            Accept: "application/json",
           } ,
           body: JSON.stringify(this.getFormObject()),
        });
        this.displaySuccess();
    } catch(error){
        this.displayError();
        throw new Error(error);
    }
}


    init(){
        if (this.form) this.formenviar.addEventListener("click", this.sendForm);
        
        return this;
    }
}

const FormSubmit = new FormSubmit({
    form: "[data-form]",
    enviar: "[data-button]",
    Success: "<h1 class='success'>Mensagem enviada!</h1>",
    Error: "<h1 class='erro'>Não foi possivel enviar sua mensagem.</h1>",
});


formSubmit.init();












