import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <div className="fixed-head">
      <div className="container-fluid">
        <div className="row">
          <header className="main-header hidden-print">
            <nav className="navbar navbar-inverse">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#myNavbar"
                >
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>

              <div className="collapse navbar-collapse" id="myNavbar">
                <div className="nav-left">
                  {/* <Link className="logo" to={`/projects`}>
                    <img src={logo} alt="logo" />
                  </Link> */}
                  <div className="breadcrumb">
                    <ul>
                      {/* {breadcrumb.map((eachBreadcrumb, index) => {
                        return (
                          <li onClick={() => onBreadcrumbClick(eachBreadcrumb)} key={index}>
                            <span>
                              {eachBreadcrumb}
                              {index !== breadcrumb.length - 1 ? "\\" : ""}
                            </span>
                          </li>
                        );
                      })} */}
                    </ul>
                  </div>
                </div>
                <div className="navbar-custom-menu">
                  <ul className="top-nav">
                    <li>saurabh</li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle"
                        to="/"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {/* <img src={appIcon} alt="App Icon" title="App" /> */}
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right dropdown-app">
                        <li>
                          {/* <Link to={`/project/data360`}>
                            <img src={require("../../../assets/img/appicon/data360.png")} />
                            <span>Data 360</span>
                          </Link> */}
                        </li>
                        <li>
                          {/* <Link to={`/project/${props.projectId}/etl`}>
                            <img src={require("../../../assets/img/appicon/etl.png")} />{" "}
                            <span>ETL</span>
                          </Link> */}
                        </li>
                        <li>
                          {/* <Link to={`/project/${props.projectId}/taxonomy`}>
                            <img src={require("../../../assets/img/appicon/taxonomy.png")} />
                            <span>Taxonomy & Hierarchy</span>
                          </Link> */}
                        </li>
                        <li>
                          {/* <Link to={`/project/${props.projectId}/usermanagement`}>
                            <img
                              src={require("../../../assets/img/appicon/user.png")}
                              name="nandhu"
                            />
                            <span>User</span>
                          </Link> */}
                        </li>
                        <li>
                          <a to="/">
                            {/* <img src={require("../../../assets/img/appicon/library.png")} />{" "} */}
                            <span>Global Library</span>
                          </a>
                        </li>
                        <li>
                          {/* <Link to={`/project/${props.projectId}/vocabulary`}>
                            <img src={require("../../../assets/img/appicon/vocabulary.png")} />{" "}
                            <span>Vocabulary</span>
                          </Link> */}
                        </li>
                        <li>
                          {/* <Link to={`/project/${props.projectId}/ontology`}>
                            <img src={require("../../../assets/img/appicon/ontology.png")} />
                            <span>Ontology</span>
                          </Link> */}
                        </li>
                        <li>
                          <a>
                            {/* <img src={require("../../../assets/img/appicon/textmining.png")} />{" "} */}
                            <span>Text Mining</span>
                          </a>
                        </li>
                        <li>
                          <a to="/">
                            {/* <img src={require("../../../assets/img/appicon/consenus.png")} />{" "} */}
                            <span>Consensus Management</span>
                          </a>
                        </li>
                        <li>
                          <a to="/">
                            {/* <img src={require("../../../assets/img/appicon/document.png")} />{" "} */}
                            <span>MDM</span>
                          </a>
                        </li>
                        <li>
                          <a to="/">
                            {/* <img src={require("../../../assets/img/appicon/prject-blue.png")} />{" "} */}
                            <span>Projects</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a
                        className="dropdown-toggle"
                        to="/"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {/* <img src={notification} alt="Notification" title="Notification" /> */}
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right dropdown-notification">
                        <li>
                          <div className="tabset">
                            <input
                              type="radio"
                              name="tabset"
                              id="tab1"
                              aria-controls="general"
                              checked
                            />
                            <label htmlFor="tab1">General</label>

                            <input type="radio" name="tabset" id="tab2" aria-controls="machine" />
                            <label htmlFor="tab2">Machine</label>

                            <div className="filters">
                              <div className="card-tab">
                                <input id="tab-filter" type="checkbox" name="tabs" />
                                <label htmlFor="tab-filter">Filter</label>
                                <div className="card-tab-content">
                                  <div className="card-accordion-wrapper">
                                    <a to="/">All</a>
                                    <a to="/">People</a>
                                    <a to="/">Alert</a>
                                    <a to="/">Mail</a>
                                    <a to="/">Group</a>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="tab-panels">
                              <section id="general" className="tab-panel">
                                <div className="notification-list">
                                  <ul>
                                    <li>
                                      <div className="notification-left">
                                        <span className="info">People</span>
                                        <h4>Jet brain</h4>
                                        <p>Great to hear from you the other day</p>
                                      </div>
                                      <div className="notification-right">
                                        <span className="default">Now</span>
                                        {/* <img src={require("../../../assets/img/user.png")} /> */}
                                      </div>
                                    </li>
                                    <li>
                                      <div className="notification-left">
                                        <span className="warning">People</span>
                                        <h4>Jet brain</h4>
                                        <p>Great to hear from you the other day</p>
                                      </div>
                                      <div className="notification-right">
                                        <span className="default">Now</span>
                                        {/* <img src={require("../../../assets/img/user.png")} /> */}
                                      </div>
                                    </li>
                                    <li>
                                      <div className="notification-left">
                                        <span className="success">People</span>
                                        <h4>Jet brain</h4>
                                        <p>Great to hear from you the other day</p>
                                      </div>
                                      <div className="notification-right">
                                        <span className="default">Now</span>
                                        {/* <img src={require("../../../assets/img/user.png")} /> */}
                                      </div>
                                    </li>
                                    <li>
                                      <div className="notification-left">
                                        <span className="danger">People</span>
                                        <h4>Jet brain</h4>
                                        <p>Great to hear from you the other day</p>
                                      </div>
                                      <div className="notification-right">
                                        <span className="default">Now</span>
                                        {/* <img src={require("../../../assets/img/user.png")} /> */}
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </section>
                              <section id="machine" className="tab-panel">
                                <div className="notification-list">
                                  <ul>
                                    <li>
                                      <div className="notification-left">
                                        <span className="info">People</span>
                                        <h4>Jet brain</h4>
                                        <p>Great to hear from you the other day</p>
                                      </div>
                                      <div className="notification-right">
                                        <span className="default">Now</span>
                                        {/* <img src={require("../../../assets/img/user.png")} /> */}
                                      </div>
                                    </li>
                                    <li>
                                      <div className="notification-left">
                                        <span className="warning">People</span>
                                        <h4>Jet brain</h4>
                                        <p>Great to hear from you the other day</p>
                                      </div>
                                      <div className="notification-right">
                                        <span className="default">Now</span>
                                        {/* <img src={require("../../../assets/img/user.png")} /> */}
                                      </div>
                                    </li>
                                    <li>
                                      <div className="notification-left">
                                        <span className="info">People</span>
                                        <h4>Jet brain</h4>
                                        <p>Great to hear from you the other day</p>
                                      </div>
                                      <div className="notification-right">
                                        <span className="default">Now</span>
                                        {/* <img src={require("../../../assets/img/user.png")} /> */}
                                      </div>
                                    </li>
                                    <li>
                                      <div className="notification-left">
                                        <span className="info">People</span>
                                        <h4>Jet brain</h4>
                                        <p>Great to hear from you the other day</p>
                                      </div>
                                      <div className="notification-right">
                                        <span className="default">Now</span>
                                        {/* <img src={require("../../../assets/img/user.png")} /> */}
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </section>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a
                        className="dropdown-toggle right-avatar"
                        to="/"
                        data-toggle="dropdown"
                        role="button"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <img
                          // src={props.userDetails.image ? props.userDetails.image : placeholder}
                          alt="img"
                        />
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right">
                        <li>
                          {/* <Link to={"/profile"}>
                            {" "}
                            <i data-feather="user"></i> <span>Profile</span>
                          </Link> */}
                        </li>
                        {/* <li onClick={() => props.dispatch(loginActions.logout(cookies.get("SID")))}>
                          <a to="/">
                            <i data-feather="log-out"></i> <span>Logout</span>
                          </a>
                        </li> */}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
