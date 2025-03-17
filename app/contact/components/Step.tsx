"use client";

import styles from "./step.module.css";
import { useStep } from "@/app/features/contact/context/StepProvider";
const { stepsWrapper,stepsArea, active } = styles;

export const Step = () => {
  const steps = [
    { label: "情報入力", value: "input" },
    { label: "内容確認", value: "confirm" },
    { label: "送信完了", value: "thanks" },
  ];
  const { step: currentStep } = useStep();

  return (
    <div className={stepsWrapper}>
      <div className={stepsArea}>
        {steps.map((step) => {
          const { label, value } = step;
          return (
            <span className={currentStep === value ? active : ""} key={value}>
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
};
