import axios from "axios";

const sendEmail = async (email: string, name: string, message: string) => {
    return axios({
        method: "POST",
        url: "/api/send-mail",
        data: {
            email: email,
            name: name,
            message: message,
        },
    });
};

export default sendEmail;
