import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: process.env["NODEMAILER_HOST"],
  port: 2525,
  auth: {
    user: process.env["NODEMAILER_USER"],
    pass: process.env["NODEMAILER_PASS"],
  },
});

export class NodeMailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedged <oi@feedget.com>",
      to: "Patric Pires <patric.pires@outlook.com",
      subject,
      html: body,
    });
  }
}
