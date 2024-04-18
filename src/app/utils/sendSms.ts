import sgMail from '@sendgrid/mail';
import twilio from 'twilio';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sendSms = async ({ subject, to, text, email }: any,) => { // subject = name/eigentlich der Email Subject, to = email, message = text

    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const accountSID = process.env.TWILIO_SID;
    const client = twilio(accountSID, authToken);

    client.messages
        .create({
            from: "+18556955208",
            to: "+19732707126",
            body: "Enes says: " + "\n" + email + "\n\n" + subject + "\n"  + text,
        })
        //Send back a response
        .then((message) => {
            // 
            console.log("Sent sms successfully.");
        })
        .catch((err) => {
            // res.status(500).json({ err: err.message });
            console.log("SMS not sent." + err);
        });
}

export default sendSms;