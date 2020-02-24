import React, { useState } from "react";
import { Link } from "react-router-dom";
import OwnAddress from "./OwnAddress";
import ExistingAddress from "./ExistingAddress";

export default function CompanyAddress() {
  const [activeCard, setActiveCard] = useState("");
  const onClickNewAddres = () => {
    setActiveCard("new-address");
  };
  const onClickExistingAddres = () => {
    setActiveCard("exist-address");
  };
  return (
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

          <div className="bs-wizard-step disabled">
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

          <div className="bs-wizard-step disabled">
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
          xmlns="http://www.w3.org/2000/svg"
          height="934pt"
          version="1.1"
          viewBox="-12 0 934 934.99782"
          width="934pt"
        >
          <g id="surface1">
            <path
              d="M 896.144531 138.429688 L 824.617188 66.902344 C 821.6875 63.96875 817.703125 62.324219 813.550781 62.335938 L 517.46875 62.335938 L 517.46875 46.753906 C 517.46875 20.929688 496.535156 0 470.714844 0 L 439.550781 0 C 413.730469 0 392.800781 20.929688 392.800781 46.753906 L 392.800781 62.335938 L 190.214844 62.335938 C 164.398438 62.335938 143.46875 83.265625 143.46875 109.082031 L 143.46875 233.75 C 143.46875 259.566406 164.398438 280.5 190.214844 280.5 L 392.800781 280.5 L 392.800781 311.664062 L 330.46875 311.664062 C 304.644531 311.664062 283.714844 332.597656 283.714844 358.417969 L 283.714844 420.75 C 283.714844 446.566406 304.644531 467.5 330.46875 467.5 L 392.800781 467.5 L 392.800781 498.671875 L 96.714844 498.671875 C 92.582031 498.671875 88.617188 500.308594 85.699219 503.238281 L 14.128906 574.765625 C -4.042969 593.003906 -4.042969 622.503906 14.128906 640.746094 L 85.65625 712.269531 C 88.578125 715.207031 92.574219 716.851562 96.714844 716.835938 L 392.800781 716.835938 L 392.800781 825.917969 L 340.445312 825.917969 C 318.175781 825.980469 299.019531 841.683594 294.632812 863.507812 L 284.027344 916.308594 C 283.09375 920.886719 284.265625 925.652344 287.226562 929.285156 C 290.183594 932.90625 294.617188 934.996094 299.300781 934.996094 L 610.96875 934.996094 C 615.648438 934.996094 620.082031 932.90625 623.039062 929.285156 C 626.003906 925.652344 627.167969 920.886719 626.238281 916.308594 L 615.636719 863.507812 C 611.242188 841.683594 592.085938 825.980469 569.820312 825.917969 L 517.46875 825.917969 L 517.46875 716.835938 L 720.050781 716.835938 C 745.871094 716.835938 766.804688 695.902344 766.804688 670.082031 L 766.804688 545.417969 C 766.804688 519.601562 745.871094 498.671875 720.050781 498.671875 L 517.46875 498.671875 L 517.46875 467.5 L 579.796875 467.5 C 605.617188 467.5 626.550781 446.566406 626.550781 420.75 L 626.550781 358.417969 C 626.550781 332.597656 605.617188 311.664062 579.796875 311.664062 L 517.46875 311.664062 L 517.46875 280.5 L 813.550781 280.5 C 817.683594 280.5 821.648438 278.855469 824.570312 275.933594 L 896.09375 204.410156 C 914.273438 186.175781 914.292969 156.6875 896.144531 138.429688 Z M 423.96875 46.753906 C 423.96875 38.140625 430.945312 31.164062 439.550781 31.164062 L 470.714844 31.164062 C 479.320312 31.164062 486.296875 38.140625 486.296875 46.753906 L 486.296875 62.335938 L 423.96875 62.335938 Z M 585.113281 869.554688 L 591.945312 903.835938 L 318.320312 903.835938 L 325.152344 869.554688 C 326.628906 862.292969 333.023438 857.078125 340.445312 857.085938 L 569.820312 857.085938 C 577.238281 857.078125 583.632812 862.292969 585.113281 869.554688 Z M 486.296875 825.917969 L 423.96875 825.917969 L 423.96875 716.835938 L 486.296875 716.835938 Z M 735.628906 545.417969 L 735.628906 670.082031 C 735.628906 678.691406 728.65625 685.671875 720.050781 685.671875 L 103.167969 685.671875 L 36.152344 618.660156 C 30.15625 612.589844 30.15625 602.824219 36.152344 596.746094 L 103.167969 529.742188 L 720.050781 529.742188 C 724.203125 529.742188 728.175781 531.398438 731.105469 534.339844 C 734.03125 537.28125 735.65625 541.273438 735.628906 545.417969 Z M 486.296875 498.671875 L 423.96875 498.671875 L 423.96875 467.5 L 486.296875 467.5 Z M 595.386719 358.417969 L 595.386719 420.75 C 595.386719 429.355469 588.410156 436.335938 579.796875 436.335938 L 330.46875 436.335938 C 321.855469 436.335938 314.878906 429.355469 314.878906 420.75 L 314.878906 358.417969 C 314.878906 349.8125 321.855469 342.835938 330.46875 342.835938 L 579.796875 342.835938 C 588.410156 342.835938 595.386719 349.8125 595.386719 358.417969 Z M 486.296875 311.664062 L 423.96875 311.664062 L 423.96875 280.5 L 486.296875 280.5 Z M 874.058594 182.328125 L 807.054688 249.335938 L 190.214844 249.335938 C 181.609375 249.335938 174.632812 242.355469 174.632812 233.75 L 174.632812 109.082031 C 174.632812 100.476562 181.609375 93.5 190.214844 93.5 L 807.097656 93.5 L 874.109375 160.511719 C 880.027344 166.585938 880.015625 176.277344 874.058594 182.328125 Z M 874.058594 182.328125 "
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(0%,0%,0%)",
                fillOpacity: "1"
              }}
            />
            <path
              d="M 190.214844 109.082031 L 221.378906 109.082031 L 221.378906 140.253906 L 190.214844 140.253906 Z M 190.214844 109.082031 "
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(0%,0%,0%)",
                fillOpacity: "1"
              }}
            />
            <path
              d="M 236.96875 109.082031 L 268.132812 109.082031 L 268.132812 140.253906 L 236.96875 140.253906 Z M 236.96875 109.082031 "
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(0%,0%,0%)",
                fillOpacity: "1"
              }}
            />
            <path
              d="M 688.886719 545.417969 L 720.050781 545.417969 L 720.050781 576.582031 L 688.886719 576.582031 Z M 688.886719 545.417969 "
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(0%,0%,0%)",
                fillOpacity: "1"
              }}
            />
            <path
              d="M 642.128906 545.417969 L 673.296875 545.417969 L 673.296875 576.582031 L 642.128906 576.582031 Z M 642.128906 545.417969 "
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(0%,0%,0%)",
                fillOpacity: "1"
              }}
            />
            <path
              d="M 501.886719 374 L 533.050781 374 L 533.050781 405.171875 L 501.886719 405.171875 Z M 501.886719 374 "
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(0%,0%,0%)",
                fillOpacity: "1"
              }}
            />
            <path
              d="M 423.96875 374 L 486.296875 374 L 486.296875 405.171875 L 423.96875 405.171875 Z M 423.96875 374 "
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(0%,0%,0%)",
                fillOpacity: "1"
              }}
            />
            <path
              d="M 377.214844 374 L 408.382812 374 L 408.382812 405.171875 L 377.214844 405.171875 Z M 377.214844 374 "
              style={{
                stroke: "none",
                fillRule: "nonzero",
                fill: "rgb(0%,0%,0%)",
                fillOpacity: "1"
              }}
            />
          </g>
        </svg>
        <h1>Company Address</h1>
        <p>
          Does your company already have an address? If it doesn't, Sleek can
          register our address for your company. We will scan your mails, upload
          them to your account every week, and notify you.
        </p>
      </div>
      <div className="new-workflow-form-1">
        <div className="row on-boarding-card">
          <div
            className={
              "col-xs-12 col-sm-12 col-md-6 on-boarding-card-1 gap-box on-boarding-card-2 " +
              (activeCard === "exist-address" ? "active-card" : "")
            }
            onClick={onClickExistingAddres}
          >
            <div className="on-boarding-card-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="934pt"
                version="1.1"
                viewBox="-12 0 934 934.99782"
                width="934pt"
              >
                <g id="surface1">
                  <path
                    d="M 896.144531 138.429688 L 824.617188 66.902344 C 821.6875 63.96875 817.703125 62.324219 813.550781 62.335938 L 517.46875 62.335938 L 517.46875 46.753906 C 517.46875 20.929688 496.535156 0 470.714844 0 L 439.550781 0 C 413.730469 0 392.800781 20.929688 392.800781 46.753906 L 392.800781 62.335938 L 190.214844 62.335938 C 164.398438 62.335938 143.46875 83.265625 143.46875 109.082031 L 143.46875 233.75 C 143.46875 259.566406 164.398438 280.5 190.214844 280.5 L 392.800781 280.5 L 392.800781 311.664062 L 330.46875 311.664062 C 304.644531 311.664062 283.714844 332.597656 283.714844 358.417969 L 283.714844 420.75 C 283.714844 446.566406 304.644531 467.5 330.46875 467.5 L 392.800781 467.5 L 392.800781 498.671875 L 96.714844 498.671875 C 92.582031 498.671875 88.617188 500.308594 85.699219 503.238281 L 14.128906 574.765625 C -4.042969 593.003906 -4.042969 622.503906 14.128906 640.746094 L 85.65625 712.269531 C 88.578125 715.207031 92.574219 716.851562 96.714844 716.835938 L 392.800781 716.835938 L 392.800781 825.917969 L 340.445312 825.917969 C 318.175781 825.980469 299.019531 841.683594 294.632812 863.507812 L 284.027344 916.308594 C 283.09375 920.886719 284.265625 925.652344 287.226562 929.285156 C 290.183594 932.90625 294.617188 934.996094 299.300781 934.996094 L 610.96875 934.996094 C 615.648438 934.996094 620.082031 932.90625 623.039062 929.285156 C 626.003906 925.652344 627.167969 920.886719 626.238281 916.308594 L 615.636719 863.507812 C 611.242188 841.683594 592.085938 825.980469 569.820312 825.917969 L 517.46875 825.917969 L 517.46875 716.835938 L 720.050781 716.835938 C 745.871094 716.835938 766.804688 695.902344 766.804688 670.082031 L 766.804688 545.417969 C 766.804688 519.601562 745.871094 498.671875 720.050781 498.671875 L 517.46875 498.671875 L 517.46875 467.5 L 579.796875 467.5 C 605.617188 467.5 626.550781 446.566406 626.550781 420.75 L 626.550781 358.417969 C 626.550781 332.597656 605.617188 311.664062 579.796875 311.664062 L 517.46875 311.664062 L 517.46875 280.5 L 813.550781 280.5 C 817.683594 280.5 821.648438 278.855469 824.570312 275.933594 L 896.09375 204.410156 C 914.273438 186.175781 914.292969 156.6875 896.144531 138.429688 Z M 423.96875 46.753906 C 423.96875 38.140625 430.945312 31.164062 439.550781 31.164062 L 470.714844 31.164062 C 479.320312 31.164062 486.296875 38.140625 486.296875 46.753906 L 486.296875 62.335938 L 423.96875 62.335938 Z M 585.113281 869.554688 L 591.945312 903.835938 L 318.320312 903.835938 L 325.152344 869.554688 C 326.628906 862.292969 333.023438 857.078125 340.445312 857.085938 L 569.820312 857.085938 C 577.238281 857.078125 583.632812 862.292969 585.113281 869.554688 Z M 486.296875 825.917969 L 423.96875 825.917969 L 423.96875 716.835938 L 486.296875 716.835938 Z M 735.628906 545.417969 L 735.628906 670.082031 C 735.628906 678.691406 728.65625 685.671875 720.050781 685.671875 L 103.167969 685.671875 L 36.152344 618.660156 C 30.15625 612.589844 30.15625 602.824219 36.152344 596.746094 L 103.167969 529.742188 L 720.050781 529.742188 C 724.203125 529.742188 728.175781 531.398438 731.105469 534.339844 C 734.03125 537.28125 735.65625 541.273438 735.628906 545.417969 Z M 486.296875 498.671875 L 423.96875 498.671875 L 423.96875 467.5 L 486.296875 467.5 Z M 595.386719 358.417969 L 595.386719 420.75 C 595.386719 429.355469 588.410156 436.335938 579.796875 436.335938 L 330.46875 436.335938 C 321.855469 436.335938 314.878906 429.355469 314.878906 420.75 L 314.878906 358.417969 C 314.878906 349.8125 321.855469 342.835938 330.46875 342.835938 L 579.796875 342.835938 C 588.410156 342.835938 595.386719 349.8125 595.386719 358.417969 Z M 486.296875 311.664062 L 423.96875 311.664062 L 423.96875 280.5 L 486.296875 280.5 Z M 874.058594 182.328125 L 807.054688 249.335938 L 190.214844 249.335938 C 181.609375 249.335938 174.632812 242.355469 174.632812 233.75 L 174.632812 109.082031 C 174.632812 100.476562 181.609375 93.5 190.214844 93.5 L 807.097656 93.5 L 874.109375 160.511719 C 880.027344 166.585938 880.015625 176.277344 874.058594 182.328125 Z M 874.058594 182.328125 "
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(0%,0%,0%)",
                      fillOpacity: "1"
                    }}
                  />
                  <path
                    d="M 190.214844 109.082031 L 221.378906 109.082031 L 221.378906 140.253906 L 190.214844 140.253906 Z M 190.214844 109.082031 "
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(0%,0%,0%)",
                      fillOpacity: "1"
                    }}
                  />
                  <path
                    d="M 236.96875 109.082031 L 268.132812 109.082031 L 268.132812 140.253906 L 236.96875 140.253906 Z M 236.96875 109.082031 "
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(0%,0%,0%)",
                      fillOpacity: "1"
                    }}
                  />
                  <path
                    d="M 688.886719 545.417969 L 720.050781 545.417969 L 720.050781 576.582031 L 688.886719 576.582031 Z M 688.886719 545.417969 "
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(0%,0%,0%)",
                      fillOpacity: "1"
                    }}
                  />
                  <path
                    d="M 642.128906 545.417969 L 673.296875 545.417969 L 673.296875 576.582031 L 642.128906 576.582031 Z M 642.128906 545.417969 "
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(0%,0%,0%)",
                      fillOpacity: "1"
                    }}
                  />
                  <path
                    d="M 501.886719 374 L 533.050781 374 L 533.050781 405.171875 L 501.886719 405.171875 Z M 501.886719 374 "
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(0%,0%,0%)",
                      fillOpacity: "1"
                    }}
                  />
                  <path
                    d="M 423.96875 374 L 486.296875 374 L 486.296875 405.171875 L 423.96875 405.171875 Z M 423.96875 374 "
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(0%,0%,0%)",
                      fillOpacity: "1"
                    }}
                  />
                  <path
                    d="M 377.214844 374 L 408.382812 374 L 408.382812 405.171875 L 377.214844 405.171875 Z M 377.214844 374 "
                    style={{
                      stroke: "none",
                      fillRule: "nonzero",
                      fill: "rgb(0%,0%,0%)",
                      fillOpacity: "1"
                    }}
                  />
                </g>
              </svg>
            </div>

            <div className="">
              <p>
                Add{" "}
                <b>Kimbocorp's Registered address & Digital Mailroom Service</b>
              </p>
              <p>s$ 300 / year</p>
            </div>
          </div>
          <div
            className={
              "col-xs-12 col-sm-12 col-md-6 on-boarding-card-1 on-boarding-card-2 gap-box " +
              (activeCard === "new-address" ? "active-card" : "")
            }
            onClick={onClickNewAddres}
          >
            <div className="on-boarding-card-icon">
              <svg
                id="Layer_5"
                enable-background="new 0 0 64 64"
                height="512"
                viewBox="0 0 64 64"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path d="m4.202 21.446-1.479 2.489 5.342 5.342 2.489-1.48c.317.147.638.281.956.4l.713 2.803h7.555l.713-2.802c.318-.119.639-.252.956-.4l2.489 1.48 5.342-5.342-1.479-2.489c.147-.317.281-.637.4-.956l2.801-.714v-7.555l-2.802-.713c-.119-.319-.253-.639-.4-.957l1.479-2.489-5.342-5.342-2.489 1.48c-.317-.147-.638-.281-.956-.4l-.713-2.801h-7.555l-.712 2.802c-.318.119-.639.252-.956.4l-2.489-1.48-5.342 5.342 1.479 2.489c-.147.318-.281.637-.4.957l-2.802.713v7.555l2.802.713c.119.319.253.638.4.955zm-1.202-7.669 2.354-.599.168-.528c.179-.558.416-1.125.705-1.683l.255-.493-1.246-2.095 3.143-3.143 2.095 1.246.492-.254c.56-.289 1.126-.525 1.686-.704l.528-.169.597-2.355h4.445l.598 2.354.528.169c.56.179 1.126.415 1.686.704l.492.254 2.095-1.246 3.143 3.143-1.246 2.095.255.493c.289.559.526 1.125.705 1.683l.168.528 2.354.6v4.445l-2.354.599-.168.528c-.179.559-.416 1.125-.704 1.683l-.256.493 1.246 2.096-3.143 3.143-2.095-1.246-.492.254c-.56.289-1.126.525-1.686.704l-.528.169-.597 2.355h-4.445l-.598-2.354-.528-.169c-.56-.179-1.126-.415-1.686-.704l-.492-.254-2.095 1.246-3.143-3.143 1.246-2.096-.256-.493c-.288-.558-.525-1.124-.704-1.683l-.168-.528-2.354-.599z" />
                  <path d="m16 25c4.963 0 9-4.038 9-9s-4.037-9-9-9-9 4.038-9 9 4.037 9 9 9zm0-16c3.859 0 7 3.14 7 7s-3.141 7-7 7-7-3.14-7-7 3.141-7 7-7z" />
                  <path d="m58 53h-28.236l-5.316 2.658c-.893.446-1.448 1.344-1.448 2.342s.555 1.896 1.447 2.342l5.317 2.658h28.236c2.757 0 5-2.243 5-5s-2.243-5-5-5zm-27 6h24v2h-24zm24-2h-24v-2h24zm-30 1c0-.236.131-.447.342-.553l3.658-1.829v4.764l-3.658-1.829c-.211-.106-.342-.317-.342-.553zm33 3h-1v-6h1c1.654 0 3 1.346 3 3s-1.346 3-3 3z" />
                  <path d="m53 15h-.142c-.447-1.72-1.999-3-3.858-3s-3.411 1.28-3.858 3h-12.142v2h12.142c.447 1.72 1.999 3 3.858 3s3.411-1.28 3.858-3h.142c4.411 0 8 3.589 8 8v6c0 4.411-3.589 8-8 8h-3.142c-.447-1.72-1.999-3-3.858-3s-3.411 1.28-3.858 3h-6.284c-.447-1.72-1.999-3-3.858-3s-3.411 1.28-3.858 3h-6.284c-.447-1.72-1.999-3-3.858-3s-3.411 1.28-3.858 3h-3.142c-5.514 0-10 4.486-10 10s4.486 10 10 10h10v-2h-10c-4.411 0-8-3.589-8-8s3.589-8 8-8h3.142c.447 1.72 1.999 3 3.858 3s3.411-1.28 3.858-3h6.284c.447 1.72 1.999 3 3.858 3s3.411-1.28 3.858-3h6.284c.447 1.72 1.999 3 3.858 3s3.411-1.28 3.858-3h3.142c5.514 0 10-4.486 10-10v-6c0-5.514-4.486-10-10-10zm-4 3c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm-31 24c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm14 0c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm14 0c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
                  <path d="m33 22h14v2h-14z" />
                  <path d="m33 26h14v2h-14z" />
                  <path d="m41 30h2v2h-2z" />
                  <path d="m37 30h2v2h-2z" />
                  <path d="m45 30h2v2h-2z" />
                  <path d="m33 30h2v2h-2z" />
                  <path d="m17 48h2v2h-2z" />
                  <path d="m13 48h2v2h-2z" />
                  <path d="m5 48h2v2h-2z" />
                  <path d="m9 48h2v2h-2z" />
                </g>
              </svg>
            </div>

            <div className="">
              <p>Add my own Business</p>
            </div>
          </div>
        </div>
        {activeCard === "new-address" && <OwnAddress />}
        {activeCard === "exist-address" && <ExistingAddress />}
        <div className="col-md-12">
          <span className="float-right margin-bottom">
            <Link to="/directors-shareholders">
              <button className="primary-button right">Save & Next</button>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
