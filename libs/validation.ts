import { z } from "zod";

export const formSchema = z.object({
  category: z
    .enum(["企業", "個人"], {
      message: "お客様区分を選択してください。",
    })
    .default("個人"),
  companyName: z.string().optional(),
  name: z.string().min(1, "氏名を入力してください。"),
  email: z.string().email("正しいメールアドレスを入力してください。"),
  message: z.string().min(1, "お問い合わせ内容を入力してください。"),
  agree: z.boolean().refine((val) => val === true, {
    message: "プライバシーポリシーに同意してください。",
  }),
});

export type FormData = z.infer<typeof formSchema>;
