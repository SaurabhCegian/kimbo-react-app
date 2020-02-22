import React from "react";

export default function ProgressBar() {
  return (
    <div>
      <div className="form-progress">
        <div className="row bs-wizard" style={{ borderBottom: "0" }}>
          <div className="col-md-4 bs-wizard-step complete">
            <div className="text-center bs-wizard-stepnum">Step 1</div>
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
            <div className="bs-wizard-dot">
              <i className="fas fa-check"></i>
            </div>
          </div>

          <div className="col-md-4 bs-wizard-step disabled">
            <div className="text-center bs-wizard-stepnum">Step 2</div>
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
            <div className="bs-wizard-dot">
              <i className="fas fa-check"></i>
            </div>
          </div>

          <div className="col-md-4 bs-wizard-step disabled">
            <div className="text-center bs-wizard-stepnum">Step 3</div>
            <div className="progress">
              <div className="progress-bar"></div>
            </div>
            <div className="bs-wizard-dot">
              <i className="fas fa-check"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
