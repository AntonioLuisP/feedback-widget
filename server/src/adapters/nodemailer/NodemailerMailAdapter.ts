import { MailAdapter, SendMailData } from "./../MailAdapter"
import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "df759abc12066c",
    pass: "7431bded499a97"
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Antonio <antonioluisp97@gmail.com>",
      subject,
      html: body
    })
  }
}
