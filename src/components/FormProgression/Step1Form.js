import React, { useState } from "react";
import Input from "../../uicomponents/Input";
import Checkbox from "../../uicomponents/Checkbox";
// import SearchIcon from "../../assets/icons/search-plus-solid.svg";
import { companySourceFund } from "./constants";

function Step1Form() {
  const [Step1Form, updateStep1Form] = useState({});
  function handleChange(event) {
    updateStep1Form({
      ...Step1Form,
      [event.target.id]: event.target.value
    });
  }
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12 text-center">

        </div>
        <div className="col-md-12 text-center pt-2">
          <h1>Let's piece this together</h1>
          <p className="has-text-grey">
            As you have selected a company secretary subscription without Incorporation
          </p>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-12 border-bottom">
          <label>
            <b>About your exisiting company</b>
          </label>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-6">
          <Input placeholder={"UEN"} label={"UEN"} type="number" id="uen" onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <Input
            placeholder={"Company Name"}
            label={"Company Name"}
            type="text"
            id="companyName"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <Input
            placeholder={"Name"}
            label={"Name of current company secretary"}
            type="text"
            id="currentCompanySecretary"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-12">
          <Input
            placeholder={""}
            label={"SSIC Company Activity"}
            type="text"
            id="ssic"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-12 has-background-grey-lighter">
          <div class="form-group">
            <label for="company-desc">Please describe your company:</label>
            <textarea
              class="form-control has-background-grey-lighter border-gray"
              rows="5"
              id="company-desc"
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <div className="col-md-4 pt-3">
          <label>
            <b>Select company source of fund</b>
          </label>
          {companySourceFund.map((dataItem, index) => (
            <Checkbox label={dataItem} isChecked={index === 1} />
          ))}
          {/* <Checkbox label={"hello"} isChecked={true} /> */}
        </div>
      </div>

    </div>

  );
}
export default Step1Form;
