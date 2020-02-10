import React from "react";
import ReactTooltip from "react-tooltip";
import "./Floatbtn.scss";

function FloatingMenuItem(props) {
  function handleClick(action) {
    props.action(action);
  }
  // let buttonStyle = {
  // 	backgroundImage: `url(${props.icon})`
  // }

  // let label;

  // if (this.props.label) {
  // 	label = <label>{this.props.label}</label>;
  // }

  return (
    <div
      onClick={() => handleClick(props.label)}
      className="floating-menu-item"
      data-tip={props.label}
    >
      <div className="floating-menu-icon">
        {typeof props.icon === "string" ? <i className={props.icon}></i> : props.icon}
      </div>
      {!props.hideTooltip ? <ReactTooltip /> : null}
    </div>
  );
}

export default FloatingMenuItem;
