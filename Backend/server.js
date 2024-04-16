const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT;

// Middleware para parsear los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuración de Nodemailer (reemplaza con tus propias credenciales de correo electrónico)
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_SENDER_USER,
        pass: process.env.MAIL_SENDER_PASS
    }
});

// Ruta para manejar el envío del formulario
app.post('/send-mail', (req, res) => {
    const { name, email, tel, message } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.MAIL_RECEIVER_USER, // Reemplaza con tu dirección de correo electrónico de destino
        subject: 'Nuevo mensaje de contacto de ' + name,
        text: `Nombre: ${name}\nCorreo: ${email}\nTeléfono: ${tel}\nMensaje:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Correo enviado: ' + info.response);
    });
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
