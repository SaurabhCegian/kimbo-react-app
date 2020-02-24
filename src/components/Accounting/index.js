import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountingChild from "./AccountingChild";
import WebsiteChild from "./WebsiteChild";

export default function Accounting() {
  const [activeCard, setActiveCard] = useState("");
  const setActiveCardFun = card => {
    setActiveCard(card);
  };
  return (
    <div>
      <div className="container new_workflow">
        <div className="form-progress">
          <div className="row bs-wizard" style={{ borderBottom: "0" }}>
            <div className="bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">
                Company information
              </div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">Address</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">
                Directors & Shareholders
              </div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step complete">
              <div className="text-center bs-wizard-stepnum">Accounting</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>

            <div className="bs-wizard-step disabled">
              <div className="text-center bs-wizard-stepnum">Payment</div>
              <div className="progress">
                <div className="progress-bar"></div>
              </div>
              <div className="bs-wizard-dot">
                <i className="fas fa-check"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="workflow-header">
          <svg
            id="Layer_5"
            enable-background="new 0 0 64 64"
            height="512"
            viewBox="0 0 64 64"
            width="512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path d="m15 47c.552 0 1 .448 1 1h2c0-1.654-1.346-3-3-3v-2h-2v2h-3v3c0 1.654 1.346 3 3 3h2c.552 0 1 .448 1 1v1h-3c-.552 0-1-.448-1-1h-2c0 1.654 1.346 3 3 3v2h2v-2h3v-3c0-1.654-1.346-3-3-3h-2c-.552 0-1-.448-1-1v-1z" />
              <path d="m63 14v-13h-13v2h9.586l-17.586 17.586-7-7-11.981 11.981c-.595-.352-1.279-.567-2.019-.567-1.33 0-2.036.807-2.504 1.341-.436.498-.61.659-.999.659-.39 0-.563-.161-1-.659-.468-.534-1.174-1.341-2.503-1.341-1.328 0-2.034.808-2.502 1.342-.434.497-.608.658-.996.658s-.561-.161-.995-.658c-.467-.534-1.173-1.342-2.501-1.342-2.206 0-4 1.794-4 4 0 .859.284 1.711.8 2.4l4.844 6.458-3.309 2.895c-2.755 2.411-4.335 5.893-4.335 9.554 0 6.999 5.694 12.693 12.693 12.693h.613c2.531 0 4.885-.753 6.867-2.034.405 1.179 1.513 2.034 2.827 2.034h20 16c1.654 0 3-1.346 3-3v-2c0-.771-.301-1.468-.78-2 .48-.532.78-1.229.78-2v-2c0-.771-.301-1.468-.78-2 .48-.532.78-1.229.78-2v-2c0-.771-.301-1.468-.78-2 .48-.532.78-1.229.78-2v-2c0-1.654-1.346-3-3-3h-1v-20h-8v20h-2v-10h-8v10h-1c-.352 0-.686.072-1 .184v-14.184h-8v20h-6.329c-.576-.817-1.24-1.577-2.006-2.247l-3.309-2.895 4.845-6.458c.515-.689.799-1.541.799-2.4 0-.74-.215-1.424-.567-2.019l10.567-10.567 7 7 19-19v9.586zm-39 47c-.552 0-1-.448-1-1v-.469c.762-.718 1.434-1.527 2-2.413v1.882h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h1c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1zm2.965-10h2.035v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h1c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1h-17.91c.499-1.249.798-2.594.875-4zm24.035-4v-2h2v2h2v-2h2v2h2v-2h1c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1h-13.184c.112-.314.184-.648.184-1v-2c0-.352-.072-.686-.184-1h2.184v2zm10 5v2c0 .552-.448 1-1 1h-13.184c.112-.314.184-.648.184-1v-2c0-.352-.072-.686-.184-1h2.184v2h2v-2h2v2h2v-2h2v2h2v-2h1c.552 0 1 .448 1 1zm0 8c0 .552-.448 1-1 1h-13.184c.112-.314.184-.648.184-1v-2c0-.352-.072-.686-.184-1h2.184v2h2v-2h2v2h2v-2h2v2h2v-2h1c.552 0 1 .448 1 1zm-8-41h4v18h-4zm-10 10h4v8h-4zm-3 10h1v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h1c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1h-14-2-4c-.552 0-1-.448-1-1v-2c0-.552.448-1 1-1zm-7-14h4v15 2 1h-4zm-4 20v2h2v-2h2v2h2v-2h2v2h2v-2h1 1v2h2v-2h1c.552 0 1 .448 1 1v2c0 .552-.448 1-1 1h-17.07c-.144-1.393-.517-2.743-1.096-4zm-4 5.307c0 5.896-4.797 10.693-10.693 10.693h-.613c-5.897 0-10.694-4.797-10.694-10.693 0-3.083 1.331-6.017 3.651-8.048l3.725-3.259h7.248l3.725 3.259c2.32 2.031 3.651 4.965 3.651 8.048zm-2.399-20.107-5.101 6.8h-7l-5.1-6.8c-.258-.344-.4-.77-.4-1.2 0-1.103.897-2 2-2 .388 0 .561.161.995.658.467.534 1.173 1.342 2.501 1.342s2.034-.808 2.502-1.342c.435-.497.608-.658.996-.658.389 0 .563.161.999.659.468.534 1.174 1.341 2.504 1.341 1.329 0 2.035-.807 2.503-1.341.437-.498.61-.659 1-.659 1.103 0 2 .897 2 2 0 .43-.142.856-.399 1.2z" />
            </g>
          </svg>
          <h1>Let us know your Accounting needs</h1>
        </div>

        <div className="new-workflow-form-1">
          <div className="row on-boarding-card">
            <div
              className={
                "col-md-4 on-boarding-card-1 gap-box on-boarding-card-3 " +
                (activeCard === "accounting" ? "active-card" : "")
              }
              onClick={() => setActiveCardFun("accounting")}
            >
              <div className="on-boarding-card-icon">
                <svg
                  height="480pt"
                  viewBox="0 0 480 480"
                  width="480pt"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m184 288c-44.183594 0-80 35.816406-80 80s35.816406 80 80 80 80-35.816406 80-80c-.046875-44.164062-35.835938-79.953125-80-80zm0 144c-35.347656 0-64-28.652344-64-64s28.652344-64 64-64 64 28.652344 64 64c-.039062 35.328125-28.671875 63.960938-64 64zm0 0" />
                  <path d="m184 344c9.769531 0 16 4.734375 16 8h16c0-11.367188-10.070312-20.574219-24-23.199219v-8.800781h-16v8.800781c-13.929688 2.605469-24 11.816407-24 23.199219 0 13.464844 14.054688 24 32 24 9.769531 0 16 4.734375 16 8s-6.230469 8-16 8-16-4.734375-16-8h-16c0 11.367188 10.070312 20.574219 24 23.199219v8.800781h16v-8.800781c13.929688-2.605469 24-11.816407 24-23.199219 0-13.464844-14.054688-24-32-24-9.769531 0-16-4.734375-16-8s6.230469-8 16-8zm0 0" />
                  <path d="m408 464h-336v-192h128c13.253906 0 24-10.746094 24-24v-200h88v96h96v112h16v-123.3125l-100.6875-100.6875h-99.3125v-8c0-13.253906-10.746094-24-24-24h-176c-13.253906 0-24 10.746094-24 24v224c0 13.253906 10.746094 24 24 24h32v208h368v-112h-16zm-80-404.6875 68.6875 68.6875h-68.6875zm-312 188.6875v-224c0-4.417969 3.582031-8 8-8h176c4.417969 0 8 3.582031 8 8v224c0 4.417969-3.582031 8-8 8h-176c-4.417969 0-8-3.582031-8-8zm0 0" />
                  <path d="m256 200h16v16h-16zm0 0" />
                  <path d="m288 200h96v16h-96zm0 0" />
                  <path d="m256 168h16v16h-16zm0 0" />
                  <path d="m288 168h96v16h-96zm0 0" />
                  <path d="m256 232h16v16h-16zm0 0" />
                  <path d="m288 232h96v16h-96zm0 0" />
                  <path d="m256 264h16v16h-16zm0 0" />
                  <path d="m288 264h96v16h-96zm0 0" />
                  <path d="m200 24h-176v56h176zm-16 40h-144v-24h144zm0 0" />
                  <path d="m64 88h-16c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h16c8.835938 0 16-7.164062 16-16v-16c0-8.835938-7.164062-16-16-16zm-16 32v-16h16v16zm0 0" />
                  <path d="m120 88h-16c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h16c8.835938 0 16-7.164062 16-16v-16c0-8.835938-7.164062-16-16-16zm-16 32v-16h16v16zm0 0" />
                  <path d="m176 88h-16c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h16c8.835938 0 16-7.164062 16-16v-16c0-8.835938-7.164062-16-16-16zm-16 32v-16h16v16zm0 0" />
                  <path d="m64 144h-16c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h16c8.835938 0 16-7.164062 16-16v-16c0-8.835938-7.164062-16-16-16zm-16 32v-16h16v16zm0 0" />
                  <path d="m120 144h-16c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h16c8.835938 0 16-7.164062 16-16v-16c0-8.835938-7.164062-16-16-16zm-16 32v-16h16v16zm0 0" />
                  <path d="m176 144h-16c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h16c8.835938 0 16-7.164062 16-16v-16c0-8.835938-7.164062-16-16-16zm-16 32v-16h16v16zm0 0" />
                  <path d="m64 200h-16c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h16c8.835938 0 16-7.164062 16-16v-16c0-8.835938-7.164062-16-16-16zm-16 32v-16h16v16zm0 0" />
                  <path d="m120 200h-16c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h16c8.835938 0 16-7.164062 16-16v-16c0-8.835938-7.164062-16-16-16zm-16 32v-16h16v16zm0 0" />
                  <path d="m176 200h-16c-8.835938 0-16 7.164062-16 16v16c0 8.835938 7.164062 16 16 16h16c8.835938 0 16-7.164062 16-16v-16c0-8.835938-7.164062-16-16-16zm-16 32v-16h16v16zm0 0" />
                  <path d="m472.734375 255.265625c-9.496094-9.066406-24.4375-9.066406-33.933594 0l-137.144531 137.140625c-.664062.671875-1.207031 1.453125-1.601562 2.3125l-19.3125 41.9375c-1.394532 3.039062-.75 6.628906 1.617187 8.992188 2.363281 2.367187 5.953125 3.011718 8.992187 1.617187l41.9375-19.3125c.859376-.394531 1.640626-.933594 2.3125-1.601563l137.132813-137.144531c9.375-9.371093 9.375-24.570312 0-33.941406zm-147.445313 158.75-20.960937 9.65625 9.65625-20.960937 102.253906-102.261719 11.3125 11.3125zm113.597657-113.601563-11.3125-11.308593 5.601562-5.601563 11.3125 11.3125zm22.5625-22.558593-5.65625 5.65625-11.3125-11.3125 5.664062-5.65625c3.160157-3.023438 8.140625-3.023438 11.304688 0 3.121093 3.125 3.121093 8.1875 0 11.3125zm0 0" />
                </svg>
              </div>
              <div className="on-boarding-card-title">
                <h5>Accounting</h5>
              </div>
              <div className="">
                <p>See accounting package</p>
              </div>
            </div>
            <div
              className={
                "col-md-4 on-boarding-card-1 on-boarding-card-3 gap-box " +
                (activeCard === "trademark" ? "active-card" : "")
              }
              onClick={() => setActiveCardFun("trademark")}
            >
              <div className="on-boarding-card-icon">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 480 480"
                  style={{ enableBackground: "new 0 0 480 480" }}
                  //   xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M464,0H64c-4.418,0-8,3.582-8,8v343.842l-41.57,8.315C10.691,360.904,8,364.187,8,368v40c0,4.418,3.582,8,8,8h16v24
                                    c0,4.418,3.582,8,8,8h16v24c0,4.418,3.582,8,8,8h400c4.418,0,8-3.582,8-8V8C472,3.582,468.418,0,464,0z M24,400v-25.441
                                    l73.57-14.715c3.2-0.64,5.69-3.16,6.293-6.367l21.513-114.688c6.99,1.617,14.257,1.616,21.247-0.002l21.513,114.69
                                    c0.603,3.207,3.093,5.727,6.293,6.367L248,374.559V400H24z M106.986,205.515c-1.969-4.233-2.988-8.846-2.986-13.515
                                    c0.012-17.673,14.349-31.99,32.022-31.978c17.673,0.012,31.99,14.349,31.978,32.022c-0.009,12.438-7.223,23.744-18.5,28.991
                                    C133.474,228.489,114.44,221.541,106.986,205.515z M48,432v-16h176v16H48z M456,464H72v-16h160c4.418,0,8-3.582,8-8v-24h16
                                    c4.418,0,8-3.582,8-8v-40c0-3.813-2.691-7.096-6.43-7.844l-74.703-14.941L161.72,232.476
                                    c22.389-14.201,29.026-43.864,14.825-66.253c-14.201-22.389-43.864-29.026-66.253-14.825
                                    c-22.389,14.201-29.026,43.864-14.825,66.253c3.787,5.97,8.845,11.029,14.813,14.818L89.133,345.215L72,348.642V98.961l184,58.88
                                    v26.967c-21.645,4.418-35.61,25.547-31.192,47.192c4.418,21.645,25.547,35.61,47.192,31.192
                                    c21.645-4.418,35.61-25.547,31.192-47.192c-3.207-15.709-15.483-27.985-31.192-31.192v-26.967l184-58.88V464z M288,224
                                    c0,13.255-10.745,24-24,24s-24-10.745-24-24s10.745-24,24-24C277.249,200.014,287.986,210.751,288,224z M248,72
                                    c0-8.837,7.163-16,16-16s16,7.163,16,16s-7.163,16-16,16C255.167,87.991,248.009,80.833,248,72z M456,82.159l-184,58.882v-38.177
                                    c17.112-4.418,27.402-21.872,22.984-38.984S273.112,36.478,256,40.896s-27.402,21.872-22.984,38.984
                                    c2.91,11.272,11.712,20.074,22.984,22.984v38.178L72,82.159V16h384V82.159z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="424" y="128" width="16" height="32" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="424" y="184" width="16" height="32" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="424" y="240" width="16" height="32" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="424" y="296" width="16" height="32" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="424" y="352" width="16" height="32" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <rect x="424" y="408" width="16" height="32" />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="on-boarding-card-title">
                <h5>Trademark</h5>
              </div>
              <div className="">
                <p>Selling online with >100 transaction/month</p>
              </div>
            </div>

            <div
              className={
                "col-md-4 on-boarding-card-1 on-boarding-card-3 gap-box " +
                (activeCard === "website" ? "active-card" : "")
              }
              onClick={() => setActiveCardFun("website")}
            >
              <div className="on-boarding-card-icon">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  //   xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: "new 0 0 480 480" }}
                  //   xml:space="preserve"
                >
                  <g>
                    <g>
                      <path
                        d="M477.858,8.533H34.142C15.317,8.533,0,23.851,0,42.675v281.591c0,4.71,3.823,8.533,8.533,8.533h494.933
                                    c4.71,0,8.533-3.823,8.533-8.533V42.675C512,23.851,496.683,8.533,477.858,8.533z M494.933,315.733H17.067V42.675
                                    c0-9.421,7.663-17.075,17.075-17.075h443.716c9.412,0,17.075,7.654,17.075,17.075V315.733z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M503.467,315.733H8.533c-4.71,0-8.533,3.823-8.533,8.533v42.658c0,18.825,15.317,34.142,34.142,34.142h443.716
                                    c18.825,0,34.142-15.317,34.142-34.142v-42.658C512,319.556,508.177,315.733,503.467,315.733z M494.933,366.925
                                    c0,9.421-7.663,17.075-17.075,17.075H34.142c-9.412,0-17.075-7.654-17.075-17.075V332.8h477.867V366.925z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M281.6,349.867h-51.2c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h51.2c4.71,0,8.533-3.823,8.533-8.533
                                    S286.31,349.867,281.6,349.867z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M469.333,42.667H42.667c-4.71,0-8.533,3.823-8.533,8.533v273.067c0,4.71,3.823,8.533,8.533,8.533h426.667
                                    c4.71,0,8.533-3.823,8.533-8.533V51.2C477.867,46.49,474.044,42.667,469.333,42.667z M460.8,315.733H51.2v-256h409.6V315.733z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M366.933,452.267H145.067c-14.114,0-25.6,11.486-25.6,25.6s11.486,25.6,25.6,25.6h221.867c14.114,0,25.6-11.486,25.6-25.6
                                    S381.047,452.267,366.933,452.267z M366.933,486.4H145.067c-4.71,0-8.533-3.831-8.533-8.533s3.823-8.533,8.533-8.533h221.867
                                    c4.71,0,8.533,3.831,8.533,8.533S371.644,486.4,366.933,486.4z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M349.867,452.267c-28.314,0-42.667-20.096-42.667-59.733c0-4.71-3.823-8.533-8.533-8.533h-85.333
                                    c-4.71,0-8.533,3.823-8.533,8.533c0,39.637-14.353,59.733-42.667,59.733c-4.71,0-8.533,3.823-8.533,8.533
                                    c0,4.71,3.823,8.533,8.533,8.533h187.733c4.71,0,8.533-3.823,8.533-8.533C358.4,456.09,354.577,452.267,349.867,452.267z
                                    M203.699,452.267c10.505-11.639,16.691-28.971,17.937-51.2h68.736c1.237,22.229,7.424,39.561,17.937,51.2H203.699z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M407.757,259.959l-20.599-20.599l11.46-11.46c2.125-2.125,2.978-5.214,2.244-8.124c-0.734-2.91-2.944-5.214-5.82-6.084
                                    l-85.333-25.6c-3.012-0.905-6.263-0.077-8.482,2.142c-2.227,2.219-3.046,5.478-2.142,8.482l25.6,85.333
                                    c0.862,2.884,3.174,5.094,6.084,5.828c2.901,0.717,5.999-0.12,8.124-2.244l12.066-12.075l20.599,20.608
                                    c1.596,1.604,3.772,2.5,6.033,2.5s4.437-0.896,6.033-2.5l24.132-24.141C411.093,268.689,411.093,263.296,407.757,259.959z
                                    M377.591,278.067l-18.756-18.765c-2.176-2.176-5.026-3.26-7.876-3.26c-2.859,0-5.709,1.092-7.876,3.251l-6.161,6.161
                                    l-16.939-56.465l56.465,16.939l-6.605,6.605c-1.818,1.826-2.816,4.25-2.816,6.827c0,2.586,1.007,5.026,2.833,6.835l19.797,19.797
                                    L377.591,278.067z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M358.4,76.8H119.467c-4.71,0-8.533,3.823-8.533,8.533V128c0,4.71,3.823,8.533,8.533,8.533H358.4
                                    c4.71,0,8.533-3.823,8.533-8.533V85.333C366.933,80.623,363.11,76.8,358.4,76.8z M349.867,119.467H128v-25.6h221.867V119.467z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M221.867,170.667H153.6c-4.71,0-8.533,3.823-8.533,8.533v34.133c0,4.71,3.823,8.533,8.533,8.533h68.267
                                    c4.71,0,8.533-3.823,8.533-8.533V179.2C230.4,174.49,226.577,170.667,221.867,170.667z M213.333,204.8h-51.2v-17.067h51.2V204.8z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <path
                        d="M358.4,76.8H119.467c-4.71,0-8.533,3.823-8.533,8.533v162.133c0,4.71,3.823,8.533,8.533,8.533h203.145
                                    c2.705,0,5.239-1.271,6.844-3.439c1.613-2.167,2.108-4.966,1.331-7.552l-10.803-36.019l35.968,10.795
                                    c2.586,0.777,5.385,0.282,7.543-1.331c2.167-1.604,3.439-4.147,3.439-6.844V85.333C366.933,80.623,363.11,76.8,358.4,76.8z
                                    M349.867,200.141L309.7,188.092c-3.012-0.905-6.263-0.077-8.482,2.142c-2.227,2.227-3.046,5.478-2.142,8.491l12.066,40.209H128
                                    V93.867h221.867V200.141z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <div className="on-boarding-card-title">
                <h5>Website</h5>
              </div>
              <div className="">
                <p>An entity owening or contolling one or more subsidiaries</p>
              </div>
            </div>
          </div>
          {activeCard === "accounting" && <AccountingChild />}

          {activeCard === "website" && <WebsiteChild />}
          <div className="col-md-12 on-boarding-card-decline">
            <p>No, I do not need any accounting or tax support for now</p>
          </div>
          <div className="col-md-12 on-boarding-button-center">
            <div className="on-boarding-button">
              <span className="float-right margin-bottom">
                <Link to="/payment">
                  <button className="primary-button">Save & Next</button>
                </Link>
              </span>
              <span className="float-right margin-bottom margin-right">
                <Link to="/directors-shareholders">
                  <button className="primary-button">Back</button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
