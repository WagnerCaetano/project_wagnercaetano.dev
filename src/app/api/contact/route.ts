import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  let nodemailer = require('nodemailer');
  let transporter = nodemailer.createTransport({
    port: 465,
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
    logger: true,
    debug: true,
    secureConnection: false,
    tls: {
      rejectUnAuthorized: true,
    },
  });

  const body = await req.json();

  const mailData = {
    from: process.env.EMAIL_ADDRESS,
    to: process.env.EMAIL_TARGET,
    subject: `Message From ${body.name} a ${body.area}`,
    text: `${body.phone} - ${body.email} - ${body.message}`,
    html: `<div><p>${body.phone}</p><p>${body.email}</p>${body.message}</div>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  return NextResponse.json({ message: 'Ok', status: 200 });
}
