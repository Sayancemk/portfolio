'use server';

const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  auth: {
    user: process.env.GMAIL_APP_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function (name:string, email:string, message:string) {
  const mailOptions = {
    from: {
      name: "Portfolio Contact Form",
      address: process.env.GMAIL_APP_USER
    },
    to: email,
    subject: `${name} sent you a message`,
    text: message,
  };

  transporter.sendMail(mailOptions,(err:any,info:any)=>{
    if (err) {
      console.log("error in sending Email",err);
      return false;
    } else {
      return true;
    }
  })
};

