//variables
const email=document.querySelector('#email'),
     asunto=document.querySelector('#asunto'),
     mensaje=document.querySelector('#mensaje'),
     form=document.querySelector('#enviar-mail'),
     enviar=document.querySelector('#enviar'),
     spinner=document.querySelector('#spinner'),
     emailSended=document.querySelector('#email-sended');
     resetBtn=document.querySelector('#resetBtn');


//listenner
eventListener();

function eventListener() {
         document.addEventListener('DOMContentLoaded',inicioApp);
         email.addEventListener('blur',checkFunction);
         asunto.addEventListener('blur',checkFunction);
         mensaje.addEventListener('blur',checkFunction);
         resetBtn.addEventListener('click',inicioApp);
         form.addEventListener('submit',(e)=>{
               
            console.log(e)
            enviandoCorreo();
            
        });
     }

//funciones
function checkFunction() {
    validarCampo(this);
    if (this.type==="email") {
        emailValidate(this); 
    }

   if (email.value.length!==0 && mensaje.value.length!==0 && asunto.value.length!==0) {  
       if (document.querySelectorAll('.error').length===0) {
           enviar.disabled=false;
          
       }
   }
    
}


function inicioApp() {
    form.reset();
    enviar.disabled=true;
}
function validarCampo(campo) {
    //si el valor del campo es mayor a vacio
     if (campo.value.length>0) {
         //agrega clase error y bordebottom verde
         campo.classList.remove('error');
         campo.style.borderBottomColor='green';
        
        
    } else {
      campo.classList.add('error');  
    }
 
 }
 const emailValidate=(campo)=>{
const reg=new RegExp("@");

     if (reg.test(campo.value)) {
        campo.classList.remove('error');
         campo.style.borderBottomColor='green';
     }else{
        campo.classList.add('error'); 
     }
 }
const enviandoCorreo =()=>{
    asunto.value
    email.value
    mensaje.value
    spinner.style.display="block";
    setTimeout(()=>{
        spinner.style.display="none";
        emailSended.style.display="block";
        setTimeout(()=>{
            emailSended.style.display="none";
            form.reset();
            inicioApp();
        },3000)

    },3000);
}

