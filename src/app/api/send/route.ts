import nodemailer from "nodemailer";

export const dynamic = "force-dynamic"; // never cache this route
export const runtime = "nodejs"; // nodemailer requires Node.js runtime

const isValidEmail = (s: string) =>
  typeof s === "string" && /\S+@\S+\.\S+/.test(s);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, productName, message } =
      await request.json();

    // ── Validate required fields ──────────────────────────────────
    if (!name || !email || !phone) {
      return Response.json(
        { message: "Missing required fields: name, email or phone" },
        { status: 400 }
      );
    }
    if (!isValidEmail(email)) {
      return Response.json(
        { message: "Invalid email address" },
        { status: 400 }
      );
    }

    // ── Validate env vars ─────────────────────────────────────────
    const mailUser = process.env.MAIL_USER;
    const mailPass = process.env.MAIL_PASS;

    if (!mailUser || !mailPass) {
      console.error("Missing MAIL_USER or MAIL_PASS environment variables");
      return Response.json(
        { message: "Server configuration error" },
        { status: 500 }
      );
    }

    // ── Create transporter (Gmail + App Password) ─────────────────
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: mailUser,
        pass: mailPass,
      },
    });

    // ── Build & send mail ─────────────────────────────────────────
    const subjectLine = `New Inquiry${productName ? " – " + productName : ""
      } from ${name}`;

    await transporter.sendMail({
      from: mailUser,
      replyTo: email,
      to: "jpelectricalcontrols@gmail.com, sales@jpelectricalcontrols.com, yourtrickster.kg@gmail.com",
      subject: subjectLine,
      html: `
        <h2>New Contact Form Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject || "-"}</p>
        <p><strong>Product:</strong> ${productName || "-"}</p>
        <p><strong>Message:</strong><br/>${message || "-"}</p>
      `,
    });

    return Response.json({ message: "Email sent successfully!" });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown error";
    console.error("Email error:", errorMessage, err);
    return Response.json(
      { message: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
