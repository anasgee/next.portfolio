import nodemailer from "nodemailer";

export const POST = async (req, res) => {
  const body = await req.json()
  const { email, subject, message } = body;


  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: parseInt(process.env.PORT), // Ensure PORT is correctly parsed as an integer
      secure: process.env.PORT === "465", // Use secure connection only for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER, // Sender's email address
      to: [process.env.SMTP_USER, email], // Send to both yourself and the provided email
      subject: subject,
      text: `From: ${email}\n\n${message}`, // Include sender's email in the message body
    };

    await transporter.sendMail(mailOptions);

    // Use `res.status()` to set status code and return the JSON response
    return new Response(
            JSON.stringify({ success: true, message: "Email sent successfully" }),
            { status: 200 }
          );  }
           catch (error) {
                return new Response(
                  JSON.stringify({ success: false, message: "Failed to send email" }),
                  { status: 500 })
  }
};
