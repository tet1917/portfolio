"use client";

import { FormData } from "@/libs/validation";
import { createContext, ReactNode, useContext, useState } from "react";

type FormContextType = {
  formData: FormData;
  setFormData: (data: FormData) => void;
};

const FormContext = createContext<FormContextType | null>(null);

export const initFormValue: FormData = {
  category: "個人",
  companyName: "",
  name: "",
  email: "",
  message: "",
  agree: false,
};

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(initFormValue);
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error(
      "useFormDataはFormProviderの中で使用してください。"
    );
  return context;
};
