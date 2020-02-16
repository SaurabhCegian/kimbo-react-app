import React, { useState } from "react";

function AboutCompany({ details = {}, submitDetails }) {
  const [aboutCompany, updateAboutCompany] = useState(details);
  function handleChange(event) {
    updateAboutCompany({
      ...aboutCompany,
      [event.target.id]: event.target.value
    });
  }
  function handleSubmit(event) {
    event.preventdefault();
    submitDetails(aboutCompany);
  }
  return (
    <section class="create-company">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            <h4>Tell us about your company</h4>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row justify-content-center pt-4">
          <div className="col-md-6 card">
            <form className="card-container p-3" onSubmit={handleSubmit}>
              <div class="form-group">
                <label for="companyName1">Company name</label>
                <input
                  type="text"
                  class="form-control"
                  value={aboutCompany.companyName}
                  onChange={handleChange}
                  id="companyName"
                  required
                />
              </div>
              <div className="form-group">
                <label for="website">Company URL</label>
                <small className="form-text text-muted">
                  This is where you will access your new account
                </small>
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="company-url"
                  onChange={handleChange}
                  id="companyUrl"
                  required
                />
                <div class="input-group-append">
                  <span class="input-group-text" id="company-url">
                    .travelstop.com
                  </span>
                </div>
              </div>
              <div className="form-group">
                <label>Where is your office located?</label>
                <select
                  class="form-control form-control-sm"
                  onChange={handleChange}
                  id="companyLocation"
                  required
                >
                  <option value="">Select One</option>
                  <option value="India">India</option>
                  <option value="US">US</option>
                </select>
              </div>
              <div className="form-group">
                <label>What is your role</label>
                <select
                  class="form-control form-control-sm"
                  onChange={handleChange}
                  id="userRole"
                  required
                >
                  <option value="">Select One</option>
                  <option value="CEO">CEO</option>
                  <option value="Director">Director</option>
                </select>
              </div>
              <div className="form-group">
                <label>how big is your company?</label>
                <select
                  class="form-control form-control-sm"
                  onChange={handleChange}
                  id="companySize"
                  required
                >
                  <option value="">Select One</option>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary btn-block">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
