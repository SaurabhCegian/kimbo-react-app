import React from "react";

export default function ProgressBar() {
  return (
    <div>
      <div class="form-progress">
        <div class="row bs-wizard" style={{ borderBottom: "0" }}>
          <div class="bs-wizard-step complete">
            <div class="text-center bs-wizard-stepnum">Company information</div>
            <div class="progress">
              <div class="progress-bar"></div>
            </div>
            <div class="bs-wizard-dot">
              <i class="fas fa-check"></i>
            </div>
          </div>

          <div class="bs-wizard-step disabled">
            <div class="text-center bs-wizard-stepnum">Address</div>
            <div class="progress">
              <div class="progress-bar"></div>
            </div>
            <div class="bs-wizard-dot">
              <i class="fas fa-check"></i>
            </div>
          </div>

          <div class="bs-wizard-step disabled">
            <div class="text-center bs-wizard-stepnum">
              Directors & Shareholders
            </div>
            <div class="progress">
              <div class="progress-bar"></div>
            </div>
            <div class="bs-wizard-dot">
              <i class="fas fa-check"></i>
            </div>
          </div>

          <div class="bs-wizard-step disabled">
            <div class="text-center bs-wizard-stepnum">Accounting</div>
            <div class="progress">
              <div class="progress-bar"></div>
            </div>
            <div class="bs-wizard-dot">
              <i class="fas fa-check"></i>
            </div>
          </div>

          <div class="bs-wizard-step disabled">
            <div class="text-center bs-wizard-stepnum">Payment</div>
            <div class="progress">
              <div class="progress-bar"></div>
            </div>
            <div class="bs-wizard-dot">
              <i class="fas fa-check"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
