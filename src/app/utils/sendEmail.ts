import sgMail from '@sendgrid/mail';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sendEmail = async ({ subject, to, text, email }: any,) => { // subject = name/eigentlich der Email Subject, to = email, message = text


    sgMail.setApiKey(SENDGRID_API_KEY!);
    
    
    subject = `${subject} needs help`
    text = `Email: ${email} \n 
            Message: ${text}`;

    const msg = {
        to,
        from: 'info@alan-precise-lawn-care.com',
        subject,
        text
    }

    try {
        await sgMail.send(msg);
        console.log(`Email sent to ${to}`)
    } catch (err) {
        console.error(err);
    }
}

export default sendEmail;