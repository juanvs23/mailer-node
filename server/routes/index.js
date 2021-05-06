const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");
const { DIR } = require("../../helpers");

module.exports = function () {
  router.get("/", (req, res) => {
    res.sendFile(DIR + "/public/index.html");
  });
  router.post("/sendmail", async (req, res) => {
    const { nombre, asunto, email, mensaje } = req.body;

    const emailHtml = `
        <h1>Nuevo mensaje</h1>
        <ul>
        <li><b>Nombre: </b>${nombre}</li>
        <li><b>Email: </b>${email}</li>
        </ul>
        <p>${mensaje}</p>
        `;
    const stmpConfig = {
      host: process.env.SMTP,
      port: process.env.PORT_SMT,
      secure: true, // use SSL
      auth: {
        user: process.env.MAIL,
        pass: process.env.PASS,
      },
    };

    // configura el hosting
    const transporter = nodemailer.createTransport(stmpConfig);
    const info = await transporter.sendMail({
      from: "Formulario de contacto", // sender address
      to: process.env.MAIL, // list of receivers
      subject: asunto, // Subject line

      html: emailHtml, // html body
    });
    res.send("ok!");
  });
  return router;
};
