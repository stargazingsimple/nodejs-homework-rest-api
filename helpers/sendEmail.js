const sendMail = require('@sendgrid/mail');

const { SENDGRID_API_KEY } = process.env;

sendMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async data => {
    const mail = { ...data, from: 'shparukbodya@gmail.com' };
    try {
        await sendMail.send(mail);
        return true;
    } catch (error) {
        return error;
    }
};

module.exports = sendEmail;
