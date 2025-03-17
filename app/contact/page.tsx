import { LowerHero } from "../components/lowerHero/LowerHero";
import { Contact } from "../features/contact/Contact";
import { FormProvider } from "../features/contact/context/FormProvider";
import { StepProvider } from "../features/contact/context/StepProvider";
import { Step } from "./components/Step";

const ContactPage = () => (
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

export default ContactPage;
