// app/api/send-email/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, eventType, details } = data;

    // 1. Configure the email transporter
    // (You will need to use a Gmail App Password, not your regular password)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'rakshashpoojary@gmail.com', // Replace with your Gmail
        pass: process.env.APP_PASSWORD     // Replace with your 16-character App Password
      }
    });

    // 2. Set up the email data
    const mailOptions = {
      from: 'rakshashpoojary@gmail.com',
      to: 'rakshashpoojary@gmail.com', // Send it to yourself
      subject: `New Booking Inquiry: ${eventType} from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Event Type: ${eventType}
        
        Details:
        ${details}
      `,
      replyTo: email // This lets you hit "reply" and email the user back directly!
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), { status: 500 });
  }
}