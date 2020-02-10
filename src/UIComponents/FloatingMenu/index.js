import React, { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import FloatingMenuItem from "./FloatingMenuItem";
import PropTypes from "prop-types";

function FloatingMenu(props) {
  const [state, setState] = useState({
    toggled: false
  });
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !props.outSideClose) {
        setState({ toggled: false });
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props.outSideClose]);

  function toggleMenu() {
    setState({ toggled: !state.toggled });
  }

  let buttons = [];
  let fabClass = classNames({
    "floating-menu": true,
    open: state.toggled
  });
  let iconClass = classNames({
    "fa fa-plus": !state.toggled,
    "fa fa-times": state.toggled
  });
  buttons.push(<FloatingMenuItem label="" icon={iconClass} action={toggleMenu} key="m" />);
  if (state.toggled) {
    props.fabmenu.map((each, index) => {
      return buttons.push(
        <FloatingMenuItem label={each.label} icon={each.icon} {...props} key={index} />
      );
    });
  }

  return (
    <>
      <div className={fabClass} ref={wrapperRef}>
        {buttons}
      </div>
      {!props.hideTimmer ? state.toggled ? <div className="timmer" /> : null : null}
    </>
  );
}

FloatingMenu.propTypes = {
  action: PropTypes.func,
  fabmenu: PropTypes.array.isRequired
};

FloatingMenu.defaultProps = {
  action: () => {},
  fabmenu: [],
  hideTooltip: false,
  hideTimmer: false,
  outSideClose: false
};

export default FloatingMenu;

//Fab Array Format

// const fabmenu = [
// 	{ label: "item1", icon: "fa fa-pencil", action: () => { } },
// 	{ label: "item2", icon: "fa fa-user", action: () => { } },
// 	{ label: "item3", icon: "fa fa-flag", action: () => { } }
//   ]
