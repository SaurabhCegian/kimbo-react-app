import React, { useState } from "react";
import "./progression.scss";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import DirectorAndShareholders from "./DirectorAndShareholders";

function FormProgression({ data, currentStep }) {
  const [showAddress, setShowAddress] = useState(false)
  const showNextForm = () => {
    setShowAddress(true)
  }
  return (
    <>
      <div className="container">
        <ul className="list-unstyled multi-steps">
          {data.map((dataItem, index) => {
            return <li className={index === currentStep ? "is-active" : null}>{dataItem}</li>;
          })}
        </ul>

        {!showAddress && <Step1Form />}
        {
          showAddress &&
          <Step2Form />
        }
        <div className="col-md-12 text-right">
          <button onClick={showNextForm} type="submit" className="btn btn-primary">
            Save
      </button>
        </div>
      </div>
      <DirectorAndShareholders />
    </>
  );
}

export default FormProgression;

    // <Step2Form />