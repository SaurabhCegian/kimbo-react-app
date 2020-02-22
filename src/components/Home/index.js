import React from "react";
// import PlusIcon from "../../assets/icons/plus-circle-solid.svg";
// import RightIcon from "../../assets/icons/chevron-right-solid.svg";
// import SearchIcon from "../../assets/icons/search-plus-solid.svg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="home-page container-fluid">
      {/* <div className="home-container"> */}
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center home-title">Lets get started</h2>
          <div className="home-title">
            <div id="accordion" role="tablist" aria-multiselectable="true">
              <Link to={"/create-company"}>
                <div className="card">
                  <div className="card-container">
                    <div className="row">
                      <div className="col-md-3 my-auto text-center">
                        <div className="icon-center">
                          <img
                            // src={PlusIcon}
                            alt="plus-icon"
                            width="50%"
                            className="img-responsive"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 my-auto">
                        <div className="card-header-title">Create a new company</div>
                        <div>Setup a new company account from scratch</div>
                      </div>
                      <div className="col-md-3 my-auto text-center">
                        <div className="icon-center">
                          <img
                            // src={RightIcon}
                            alt="plus-icon"
                            width="20%"
                            className="img-responsive"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="card">
                <div className="card-container">
                  <div className="row">
                    <div className="col-md-3 my-auto text-center">
                      <div className="icon-center">
                        <img
                          // src={SearchIcon}
                          alt="search-icon"
                          width="50%"
                          className="img-responsive"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 my-auto">
                      <div className="card-header-title">Find your company</div>
                      <div>Find and join an existing company</div>
                    </div>
                    <div className="col-md-3 my-auto text-center">
                      <div className="icon-center">
                        <img
                          // src={RightIcon}
                          alt="right-icon"
                          width="20%"
                          className="img-responsive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p>Already using Travelstop?</p>
            <a href="/">Sign in to your account</a>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
export default Home;
