import type { APIRoute } from "astro"
import { Resend } from "resend"



const resend = new Resend(process.env.API_KEY_RESEND)

export const POST: APIRoute = async({params, request})=> {
    
    
    const body = await request.json();
    const {from,to,subject,text} = body;
    
    if (!to || !from || !subject || !text) {
        return new Response(null, {
          status: 404,
          statusText: "Did not provide the right data",
        });
    }


    const send = await resend.emails.send({
        from,
        to,
        subject,
        text,
    })


    if (send.data) {
        return new Response(
            JSON.stringify({
                message: send.data,
            }),
            {
                status: 200,
                statusText: "OK",
            }
    );
    } else {
    return new Response(
        JSON.stringify({
            message: send.error,
        }),
        {
            status: 500,
            statusText: "Internal Server Error",
        }
    );}
    
  }