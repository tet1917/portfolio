"use client";

import { useEffect, useRef } from "react";
import { Confirm } from "./components/Confirm";
import { Input } from "./components/Input";
import Thanks from "./components/Thanks";
import styles from "./contact.module.css";
import { useStep } from "./context/StepProvider";
const { wrapper, multiStep, step2, step3 } = styles;

export const Contact = () => {
  const { step } = useStep();
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({
    input: null,
    confirm: null,
    thanks: null,
  });

  useEffect(() => {
    containerRef.current!.style.height = `${sectionRefs.current[step]?.clientHeight}px`;
  }, [step]);

  return (
    <div className={wrapper}>
      <div
        ref={containerRef}
        className={`${multiStep} ${
          step === "confirm" ? step2 : step === "thanks" ? step3 : ""
        }`}
      >
        <section ref={(el) => {sectionRefs.current.input = el}}>
          <Input />
        </section>

        <section ref={(el) => {sectionRefs.current.confirm = el}}>
          <Confirm />
        </section>

        <section ref={(el) => {sectionRefs.current.thanks = el}}>
          <Thanks />
        </section>
      </div>
    </div>
  );
};
