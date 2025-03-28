import { LowerHero } from "@/app/components/lowerHero/LowerHero";
import { Contact } from "@/app/features/contact/Contact";
import { FormProvider } from "@/app/features/contact/context/FormProvider";
import { StepProvider } from "@/app/features/contact/context/StepProvider";
import { Step } from "./components/Step";

export default function ContactPage() {
  return (
    <>
      <LowerHero en={"contact"} ja={"お問い合わせ"} />
      <StepProvider>
        <Step />
        <FormProvider>
          <Contact />
        </FormProvider>
      </StepProvider>
    </>
  );
}
