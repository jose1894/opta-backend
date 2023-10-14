const nodemailer = require('nodemailer');

const sendEmail = async (req, res = response) => {
    const { recipient, subject, message } = req.body;


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'testemailop768@gmail.com',
            pass: 'opta123456789'
        },
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: false
    });

    const mailOptions = {
        from: 'testemailop768@gmail.com',
        to: recipient,
        subject: subject,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({
                msg: `Error al enviar el correo ${error}`
            })
        } else {
            return res.status(200).json({
                msg: `Email enviado correctamente`,
                response: info.response
            })
        }
    });

}

module.exports = {
    sendEmail
}