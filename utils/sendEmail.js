import nodemailer from 'nodemailer';

const sendEmail = (recipient, subject, body) => {
    const transporter = nodemailer.createTransport({
        service: process.env.EMAIL_SERVICE,
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: `"SheCanCODE Bootcamp" <${process.env.EMAIL_ADDRESS}>`,
        to: recipient,
        subject: subject,
        text: body,
        replyTo: "education@igirerwanda.org",
        // html: `
        //     <div style="color: #333; background-color: #eee; padding: 20px; border-radius: 5px;">
        //     <h1>${subject}</h1>
        //     <p>${body}</p>
        //     <br />
        //     <p>
        //         Reply to: <a href="mailto:education@igirerwanda.org">education@igirerwanda.org</a>
        //     </p>
        //     </div>
        // `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

export default sendEmail;