"use server";

import { FormData, formSchema } from "@/libs/validation";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (formData: FormData) => {
  const parsed = formSchema.safeParse(formData);
  if (!parsed.success)
    return { success: false, message: "バリデーションエラー" };

  try {
    const userMail = {
      from: "noreply@tet.com",
      to: formData.email,
      subject: "お問い合わせありがとうございます",
      text: `この度はお問い合わせいただきありがとうございます。以下の内容でお問い合わせいたしました。\n\n氏名: ${formData.yourName}\nメール: ${formData.email}\n内容: ${formData.message}`,
    };
    const adminMail = {
      from: "noreply@tet.com",
      to: "parfumdelapeche@gmail.com",
      subject: "新しいお問い合わせ",
      text: `tetポートフォリオサイトから、以下の内容でお問い合わせがありました。\n\n氏名: ${formData.yourName}\nメール: ${formData.email}\n内容: ${formData.message}`,
    };
    await resend.emails.send(userMail);
    await resend.emails.send(adminMail);

    return { success: true };
  } catch (error) {
    console.error("メール送信エラー", error);
    return { success: false, message: "メールの送信に失敗しました" };
  }
};
