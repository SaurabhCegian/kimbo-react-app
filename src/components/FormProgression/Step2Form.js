import React, { useState } from "react";
import Input from "../../uicomponents/Input";
import Checkbox from "../../uicomponents/Checkbox";
// import SearchIcon from "../../assets/icons/search-plus-solid.svg";
import { companySourceFund } from "./constants";

function Step2Form() {
  const [Step2Form, updateStep2Form] = useState({});
  function handleChange(event) {
    updateStep2Form({
      ...Step2Form,
      [event.target.id]: event.target.value
    });
    console.log({ Step2Form });
  }
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-12 text-center">

        </div>
        <div className="col-md-12 text-center pt-2">
          <h1>Company Address</h1>
          <p className="has-text-grey">Does your company already have an address?</p>
        </div>
      </div>
      <div className="row center m-3">
        <div className="col-md-6">
          <div
            className="card"
            id="cardSelected"
            value={1}
            onClick={handleChange}
            style={{ borderColor: Step2Form.cardSelected === 1 ? "blue" : "" }}
          >
            <div className="card-container p-3">
              <div className="text-center">

                <p>Add Sleeks registration Address & Digital Mail room</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="card"
            id="cardSelected"
            value={2}
            onClick={handleChange}
            style={{ borderColor: Step2Form.cardSelected === 2 ? "blue" : "" }}
          >
            <div className="card-container p-3">
              <div className="text-center">

                <p>Add my own business address</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-12 border-bottom">
          <label>
            <b>Company Address</b>
          </label>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-6">
          <Input
            placeholder={"Address Line 1"}
            label={"Address Line 1"}
            type="number"
            id="addressLine1"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <Input
            placeholder={"Address Line 2"}
            label={"Address Line 2"}
            type="text"
            id="addressLine2"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <Input
            placeholder={"City"}
            label={"City"}
            type="text"
            id="city"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <Input
            placeholder={"State"}
            label={"State"}
            type="text"
            id="state"
            onChange={handleChange}
          />
        </div>
        <div className="col-md-12">
          <Input
            placeholder={"Zip/Post Code"}
            label={"Zip / Post Code"}
            type="text"
            id="zip"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}
export default Step2Form;

      // <div className="col-md-12 text-right">
      //   <button type="submit" className="btn btn-primary">
      //     Save
      //   </button>
      // </div>