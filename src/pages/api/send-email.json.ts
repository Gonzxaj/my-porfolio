import nodemailer from 'nodemailer';
import type { APIRoute } from "astro"

const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_SENDER_USER_DF,
            pass: process.env.MAIL_SENDER_PASS
        }
    });


export const POST: APIRoute = async({params, request})=> {
    
    const body = await request.json();
    const {from,to,subject,text} = body;
    console.log({from,to,subject,text});

    if (!to || !from || !subject || !text) {
        return new Response(null, {
          status: 404,
          statusText: "Did not provide the right data",
        });
    }

    const mailOptions = {
                from: 'yonzalo19@gmail.com',
                to: process.env.MAIL_RECEIVER_USER, // Reemplaza con tu dirección de correo electrónico de destino
                subject,
                text,
        };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return new Response(null,{
                status:500,
                statusText:error.toString()
            })
        }
        return new Response(null,{
            status:200,
            statusText:'Correo enviado: ' + info.response,
        })
    });
}