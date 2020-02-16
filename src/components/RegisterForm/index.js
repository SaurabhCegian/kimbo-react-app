import React from "react";
import FormProgression from "../FormProgression";

function RegisterForm() {
  const progressionTitle = [
    "Company Information",
    "Address",
    "Directors and Share Holders",
    "Accounting",
    "Payment"
  ];
  return (
    <main class="container" style={{ padding: "10%" }}>
      <section className="create-company">
        <FormProgression data={progressionTitle} currentStep={1} />
      </section>
    </main>
  );
}

export default RegisterForm;
