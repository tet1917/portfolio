"use client";

import { useFormData } from "../context/FormProvider";
import { useForm } from "react-hook-form";
import { formSchema, FormData } from "@/libs/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "../contact.module.css";
import Link from "next/link";
import { useStep } from "../context/StepProvider";
const {
  container,
  inputArea,
  formArea,
  radioBox,
  checkBox,
  required,
  error,
  button,
  note,
} = styles;

export const Input = () => {
  const { formData, setFormData } = useFormData();
  const { setStep } = useStep();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: formData,
  });

  const onSubmit = (data: FormData) => {
    setFormData(data);
    setStep("confirm");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit)();
      }}
      className={`${formArea} ${container}`}
    >
      <div className={inputArea}>
        <legend>
          お客様区分<span className={required}>*</span>
        </legend>
        <fieldset>
          <label className={radioBox}>
            <div>
              <input type="radio" {...register("category")} value="企業" />
            </div>
            企業
          </label>
          <label className={radioBox}>
            <div>
              <input type="radio" {...register("category")} value="個人" />
            </div>
            個人
          </label>
        </fieldset>
        <p className={error}>{errors.category?.message}</p>
      </div>

      <div className={inputArea}>
        <label htmlFor="company">会社名</label>
        <input type="text" id="company" {...register("companyName")} />
      </div>

      <div className={inputArea}>
        <label htmlFor="name">
          氏名<span className={required}>*</span>
        </label>
        <input type="text" {...register("yourName")} />
        <p className={error}>{errors.yourName?.message}</p>
      </div>

      <div className={inputArea}>
        <label htmlFor="email">
          メールアドレス<span className={required}>*</span>
        </label>
        <input type="email" id="email" {...register("email")} />
        <p className={error}>{errors.email?.message}</p>
      </div>

      <div className={inputArea}>
        <label htmlFor="message">
          お問い合わせ内容<span className={required}>*</span>
        </label>
        <textarea id="message" {...register("message")} rows={8} />
        <p className={error}>{errors.message?.message}</p>
      </div>

      <div className={inputArea}>
        <label className={checkBox}>
          <div>
            <input type="checkbox" {...register("agree")} />
          </div>
          <span>
            <Link href={"/privacy"}>
              個人情報の取り扱いとプライバシーポリシー
            </Link>
            に同意する
            <span className={required}>*</span>
          </span>
        </label>
        <p className={error}>{errors.agree?.message}</p>
      </div>

      <p className={note}>
        <span className={required}>*</span>は必須項目です。
      </p>

      <button className={button}>確認する</button>
    </form>
  );
};
