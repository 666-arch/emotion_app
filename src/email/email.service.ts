import { Injectable } from "@nestjs/common";
import { createTransport, Transporter } from "nodemailer";

@Injectable()
export class EmailService {
  transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: "",
      port: 587,
      secure: false,
      auth: {
        user: "",
        pass: "你的授权码"
      }
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: "系统邮件",
        address: "xx@xx.com"
      },
      to,
      subject,
      html
    });
  }
}
