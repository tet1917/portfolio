// app/api/sendMail/route.ts
import { send } from "@/app/features/contact/actions/send";

export async function POST(req: Request) {
  try {
    const formData = await req.json(); // リクエストボディを JSON として取得
    const response = await send(formData); // 送信関数を呼び出し

    if (response.success) {
      return new Response(JSON.stringify({ message: "メールが正常に送信されました。" }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ message: response.message || "送信エラー" }), { status: 500 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ message: "サーバーエラー", error }), { status: 500 });
  }
}
