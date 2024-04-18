import { NextApiRequest, NextApiResponse } from 'next';
import sendEmail from '@/app/utils/sendEmail';
import sendSms from '@/app/utils/sendSms';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    const { name, email, message } = req.body;

    const ALAN_EMAIL = process.env.TO_EMAIL; 

    const form = {
        subject: name,
        to: process.env.TO_EMAIL,
        text: message,
        email: email
    }

    console.log(form);

    try {
        await sendSms(form);
        res.status(200).json({ message: 'Email sent successfully' })
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'INTERNAL ERROR' })
    }
}

export default handler;
