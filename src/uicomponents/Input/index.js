import React from "react";
import "./style.scss";
function Input({ label, id, placeholder, type, onChange }) {
  return (
    <div class="input-group">
      <label>{label}</label>
      <input
        type={type}
        id={id}
        onChange={onChange}
        class="material-input"
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
