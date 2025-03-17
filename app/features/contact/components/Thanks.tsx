import React from "react";
import { TbMailCheck } from "react-icons/tb";
import styles from "../contact.module.css";
const { thanks, container } = styles;
const Thanks = () => {
  return (
    <div className={`${thanks} ${container}`}>
      <TbMailCheck />
      <h2>送信完了</h2>
      <p>
        お問い合わせいただきありがとうございました。
        <br />
        お問い合わせ内容の確認メールが自動送信されました。
      </p>
    </div>
  );
};

export default Thanks;
