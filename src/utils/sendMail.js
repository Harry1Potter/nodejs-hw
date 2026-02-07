import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        password: process.env.SMTP_PASSWORD
    }
})
export const sendEmail = async (options) => {
    transporter.sendMail({options})
}