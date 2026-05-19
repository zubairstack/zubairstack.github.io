import axios from "axios";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactBody {
  name?: string;
  email?: string;
  message?: string;
  token?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const { name, email, message, token } = body;

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
    if (turnstileSecret) {
      if (!token) {
        return NextResponse.json({ error: "Captcha token missing" }, { status: 400 });
      }

      const verifyUrl = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
      const result = await axios.post(verifyUrl, {
        secret: turnstileSecret,
        response: token,
      });

      if (!result.data.success) {
        return NextResponse.json({ error: "Captcha validation failed" }, { status: 400 });
      }
    }

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const isBrevo =
        process.env.SMTP_HOST.includes("brevo.com") ||
        process.env.SMTP_HOST.includes("sendinblue.com");
      const smtpPort = Number(process.env.SMTP_PORT) || 587;
      const isSecurePort = smtpPort === 465;

      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure: isSecurePort,
        auth: {
          user: process.env.SMTP_USER.trim(),
          pass: process.env.SMTP_PASS.trim(),
        },
        ...(isBrevo && {
          tls: { ciphers: "SSLv3", rejectUnauthorized: false },
          requireTLS: !isSecurePort,
        }),
        ...(!isBrevo && {
          tls: { rejectUnauthorized: false },
        }),
      });

      await transporter.sendMail({
        from:
          process.env.SMTP_FROM ||
          `Portfolio Contact <${process.env.SMTP_USER}>`,
        to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
        replyTo: email,
        subject: `Portfolio contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <h3>New portfolio message</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 503 }
    );
  } catch (error: unknown) {
    console.error("Contact error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
