"use server";

import { FormData, formSchema } from "@/libs/validation";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_TET_PORTFOLIO);

export const send = async (formData: FormData) => {
  const parsed = formSchema.safeParse(formData);
  if (!parsed.success) {
    return { success: false, message: "バリデーションエラー" };
  }

  try {
    const userMail = {
      from: "数井 哲 <info@number07.net>",
      to: formData.email,
      subject: "お問い合わせありがとうございます",
      text: `\
    ${formData.yourName} 様

    この度はお問い合わせいただき、誠にありがとうございます。
    以下の内容でお問い合わせを承りました。

    ----------------------------------------
    【お名前】 ${formData.yourName}
    【メールアドレス】 ${formData.email}
    【お問い合わせ内容】
    ${formData.message}
    ----------------------------------------

    内容を確認のうえ、担当者より折り返しご連絡いたします。
    何卒よろしくお願いいたします。

    `,
    };

    const adminMail = {
      from: "数井 哲 <info@number07.net>",
      to: "number191707@gmail.com",
      subject: "新しいお問い合わせ",
      text: `ポートフォリオサイトから、以下の内容でお問い合わせがありました。\n\n氏名: ${formData.yourName}\nメール: ${formData.email}\n内容: ${formData.message}`,
    };

    const userResponse = await resend.emails.send(userMail);
    const adminResponse = await resend.emails.send(adminMail);

    // 送信後のエラー確認（error プロパティが含まれている場合）
    if (userResponse.error || adminResponse.error) {
      return {
        success: false,
        message:
          userResponse.error?.message ||
          adminResponse.error?.message ||
          "メール送信に失敗しました",
      };
    }

    return { success: true };
  } catch (error: unknown) {
    // error が unknown 型なので、型ガードで扱う
    if (error instanceof Error) {
      console.error("メール送信エラー", error.message);
      return { success: false, message: error.message };
    }
    console.error("メール送信エラー", error);
    return { success: false, message: "予期しないエラーが発生しました" };
  }
};
