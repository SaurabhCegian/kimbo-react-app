import React from "react";
import "./progression.scss";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";

function FormProgression({ data, currentStep }) {
  return (
    <div className="container">
      <ul className="list-unstyled multi-steps">
        {data.map((dataItem, index) => {
          return <li className={index === currentStep ? "is-active" : null}>{dataItem}</li>;
        })}
      </ul>
      <Step1Form />
      <Step2Form />
    </div>
  );
}

export default FormProgression;
