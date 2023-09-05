import nodemailer from 'nodemailer';

const email = process.env.EMAIL
const passw = process.env.EMAILPASS

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: passw
    }
})

export const mailOptions = {
    from: email,
    to: email
}