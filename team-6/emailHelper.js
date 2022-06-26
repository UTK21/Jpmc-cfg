const nodemailer=require('nodemailer');

const mailHelper =async (options) => 
{
    const transporter = nodemailer.createTransport({
        // @ts-ignore
        host : process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth:{
            user: process.env.SMTP_USER,
            pass:process.env.SMTP_PASS,
        },
    });

    const message ={
        from: '"GUSEC_STARTUPS.dev"', // sender address
        to: options.email, // list of receivers
        subject: options.subject, // Subject line
        text: options.message, // plain text body
        
      };

      await transporter.sendMail(message);
    }

    // await mailHelper({
    //     email : forgot_pass_user.email,
    //     subject : "For your recent regestration in GUSEC regisration portal",
    //     message : We are Highly oblieged to let you know that your startup funding request has been registerd succesfully,
    //    });
module.exports = mailHelper;