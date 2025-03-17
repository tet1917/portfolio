"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type StepType = "input" | "confirm" | "thanks";

interface StepContextProps {
  step: StepType;
  setStep: (step: StepType) => void;
}

const StepContext = createContext<StepContextProps | undefined>(
  undefined
);

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [step, setStep] = useState<StepType>("input");
  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
}

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStepはStepProviderの中で使用してください。");
  }
  return context;
}