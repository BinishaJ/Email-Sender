const nodemailer = require("nodemailer");
require("dotenv/config");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.SENDER_MAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

const mailOptions = {
  from: process.env.SENDER_MAIL,
  to: process.env.RECEIVER_MAIL,
  subject: "Test Mail",
  text: "Hello! This is a test mail",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) return console.log(error);
  return console.log(info.response);
});
