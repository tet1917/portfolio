"use client";

import { initFormValue, useFormData } from "../context/FormProvider";
import { send } from "../actions/send";
import styles from "../contact.module.css";
import { useStep } from "../context/StepProvider";
const { container, confirm, buttons, button } = styles;

export const Confirm = () => {
  const { formData, setFormData } = useFormData();
  const { setStep } = useStep();
  const { category, companyName, yourName, email, message } = formData;

  console.log(formData);

  const handleSubmit = async () => {
    try {
      const response = await send(formData);
      if (response?.success) {
        setStep("thanks");
        setFormData(initFormValue);
      } else {
        console.error("送信エラー", response?.message);
        alert(response?.message || "送信に失敗しました。");
      }
    } catch (error) {
      console.error("送信エラー", error);
      alert("サーバとの通信に失敗しました");
    }
  };

  return (
    <div className={`${confirm} ${container}`}>
      <ul>
        <li>
          <h3>お客様区分</h3>
          <p>{category}</p>
        </li>
        {companyName && (
          <li>
            <h3>会社名</h3>
            <p>{companyName}</p>
          </li>
        )}
        <li>
          <h3>氏名</h3>
          <p>{yourName}</p>
        </li>
        <li>
          <h3>メールアドレス</h3>
          <p>{email}</p>
        </li>
        <li>
          <h3>お問い合わせ内容</h3>
          <p>{message}</p>
        </li>
      </ul>
      <div className={buttons}>
        <button
          onClick={() => setStep("input")}
          type="button"
          className={button}
        >
          戻る
        </button>
        <button onClick={handleSubmit} type="button" className={button}>
          送信
        </button>
      </div>
    </div>
  );
};
