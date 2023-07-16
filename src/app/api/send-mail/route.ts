const nodemailer = require("nodemailer");
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const message = {
        from: req.body.email,
        to: process.env.GMAIL_EMAIL_ADDRESS,
        name: req.body.name,
        text: req.body.message,
        html: `<p>${req.body.message}</p>`,
    };

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_EMAIL_ADDRESS,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    if (req.method === "POST") {
        transporter.sendMail(
            message,
            (err: { address: any }, info: { accepted: any }) => {
                if (err) {
                    res.status(404).json({
                        error: `Connection refused at ${err.address}`,
                    });
                } else {
                    res.status(250).json({
                        success: `Message delivered to ${info.accepted}`,
                    });
                }
            }
        );
    }
}
