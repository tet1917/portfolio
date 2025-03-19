"use client";

import React from "react";
import { initFormValue, useFormData } from "../context/FormProvider";
import { send } from "../actions/send";
import styles from "../contact.module.css";
import { useStep } from "../context/StepProvider";
const { container, confirm, buttons, button } = styles;

export const Confirm = () => {
  const { formData, setFormData } = useFormData();
  const { setStep } = useStep();
  const { category, companyName, name, email, message } = formData;

  const handleSubmit = async () => {
    await send(formData);
    setStep("thanks");
    setFormData(initFormValue);
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
          <p>{name}</p>
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
