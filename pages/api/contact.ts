import { mailOptions, transporter } from "../../config/nodemailer";

const CONTACT_MESSAGE_FIELDS: Record<string, string> = {
    name: "Name",
    email: "Email",
    message: "Message"
}

const generateEmailContent = (data: Record<string, string>) => {

    const stringData = Object.entries(data).reduce(
        (str, [key, value]) => 
            (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n ${value} \n \n`), 
            ""
        );

    const htmlData = Object.entries(data).reduce(
        (str, [key, value]) => 
            (str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1><p>${value}</p>`), 
            ""
        );



    return {
        text: stringData,
        html : htmlData
    }
}

const handler = async (req: any, res: any) =>{
    if(req.method === "POST"){
        const data = req.body
        if(!data.name || !data.email || !data.message){
            return res.status(400).json({ message: "Bad Request" });
        }
        try {
            await transporter.sendMail({
                ...mailOptions,
                ...generateEmailContent(data),
                subject: data.subject,
            })
            return res.status(200).json({ success: true });
        } catch (error) {
            console.log(error);
            return res.status(400).json({ message: error });
        }
    }
    return res.status(400).json({ message: "Bad Request" });
}

export default handler;