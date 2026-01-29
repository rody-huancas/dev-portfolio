import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend     = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
const EMAIL_TO   = process.env.NEXT_PUBLIC_RESEND_EMAIL_TO as string;
const EMAIL_FROM = process.env.NEXT_PUBLIC_RESEND_EMAIL_FROM as string;

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from   : `Portafolio <${EMAIL_FROM}>`,
      to     : [EMAIL_TO],
      subject: `🚀 Nuevo mensaje de ${name}`,
      html   : `
        <div style="background-color: #0f0f0f; padding: 40px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #ffffff;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #1a1a1a; padding: 30px; border-radius: 16px; border: 1px solid #333; box-shadow: 0 10px 20px rgba(0,0,0,0.5);">
            <h2 style="color: #ffffff; font-size: 22px; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px; display: inline-block;">
              Nuevo mensaje de el formulario de contacto de tu portafolio
            </h2>
            
            <div style="margin-bottom: 25px;">
              <p style="color: #9ca3af; text-transform: uppercase; font-size: 11px; font-weight: bold; letter-spacing: 1px; margin-bottom: 8px;">Remitente</p>
              <p style="font-size: 16px; margin: 0; color: #f3f4f6;">
                <strong style="color: #ffffff;">${name}</strong> 
                <span style="color: #6b7280;">(${email})</span>
              </p>
            </div>

            <div style="margin-bottom: 25px;">
              <p style="color: #9ca3af; text-transform: uppercase; font-size: 11px; font-weight: bold; letter-spacing: 1px; margin-bottom: 8px;">Mensaje</p>
              <div style="background-color: #262626; padding: 20px; border-radius: 12px; color: #d1d5db; line-height: 1.6; border-left: 4px solid #3b82f6;">
                ${message.replace(/\n/g, '<br/>')}
              </div>
            </div>

            <hr style="border: 0; border-top: 1px solid #333; margin: 30px 0;" />
            
            <p style="font-size: 11px; color: #4b5563; text-align: center; font-style: italic;">
              Este es un correo automático generado desde el formulario de tu sitio web.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
