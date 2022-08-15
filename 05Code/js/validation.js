//forgotPass
new Vue({
    el:".container-fluid",
    data:{        
        form:{
            type:0, // 0 = Login , 1 = Registro 2- Recuperar contraseña
            email:"",
            password:"", 
            passwordos:""}
    },
    methods:{
        sendForm(){
            if(this.validaType()){
                console.log(this.form);
            }
        },
        validaType(){
            if(this.form.type==0 && !this.validaEmail && !this.validaPassword){
                return true;
            }
            else if(this.form.type==1 && !this.validaEmail && !this.validaRepetirPassword){
                return true;
            }
            else if(this.form.type==2 && !this.validaEmail){
                return true;
            }
            return false;
        }
    },
    computed:{
        validaEmail(){
            var exp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if(exp.test(this.form.email)){
                return false;
            } else{
                return true;
            }
        },
        validaPassword(){
            var exp = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;
            if(exp.test(this.form.password)){
                return false;
            } else{
                return true;
            }
        },
        validaRepetirPassword(){
            if(this.form.password==this.form.passwordos){
                return false;
            } else{
                return true;
            }
        },
        title(){
            return (this.form.type==0)?'Login':(this.form.type==1)?'Registro':'Recuperar contraseña';
        }
    }
});
var txtSoloNumeros = document.getElementById("txtCellphone")
txtSoloNumeros.addEventListener("input", function (event) {
    validarTextoEntrada(this, "[0-9]")
})
var txtSoloLetras = document.getElementById("txtfullname")
txtSoloLetras.addEventListener("input", function (event) {
    validarTextoEntrada(this, "[a-z ]")
})
var txtPersonalizado = document.getElementById("txtAddress")
txtPersonalizado.addEventListener("input", function (event) {
    validarTextoEntrada(this, "[0-9a-z]")
})