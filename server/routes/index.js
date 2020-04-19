const  {Router}=require('express'),
router=Router();
const nodemailer = require("nodemailer");

router.post('/emailsend',function(req,res){
let {asunto,email,mensaje}=req.body;


contentHTML=`
<h1>Información desde el formulario</h1>
<b>Correo:</>${email}<br>
<b>Asunto</>${asunto}<br>
<h4>Mensaje<h4>
<p>
${mensaje}
</p>
`;

const transporter=  nodemailer.createTransport({
    name:"tusweb.cl",
    host:'mail.tusweb.cl',
    port:587,
    secure:false,
    secureConnection:false,
    auth:{
        user: "prueba@tusweb.cl",
        pass: ",Nu];SObyya("
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
      }
});
let mailOptions = {
from: "Desde node corre <prueba@tusweb.cl>",
to:'prueba@tusweb.cl',
subject:"Correo desde node",
html:contentHTML
};

res.send('hola');
return transporter.sendMail(mailOptions, function (err, info) {
    if (err)
    console.log(err);
    else
    console.log(info);
});
//console.log('send message', info.messageId);
});
module.exports={router};