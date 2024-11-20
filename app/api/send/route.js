// import nodemailer from "nodemailer";
const nodemailer = require("nodemailer");

export const POST = async (req, res) => {

  const body = await req.json()
  const { email, subject, message } = body;

 
  try {
    const transporter = nodemailer.createTransport({
      host:process.env.HOST,
      // service:process.env.SERVICE,
      // secure:false,
      port:process.env.PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER, 
      to: [process.env.SMTP_USER, email], 
      subject: subject,
      text: `From: ${email}\n\n${message}`,
    };


    await transporter.sendMail(mailOptions);

    // Use `res.status()` to set status code and return the JSON response
    return new Response(
            JSON.stringify({ success: true, message: "Email sent successfully" }),
            {status: 200}
          );  }
           catch (error) {
                return new Response(
                  JSON.stringify({ success: false, message: "Failed to send email" }),
                  { status: 500 })
  }
};
