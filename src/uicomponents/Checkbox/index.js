import React from "react";

export default function Checkbox({ label, isChecked }) {
  return (
    <div class="checkbox">
      {label}
      <input type="checkbox" checked={isChecked ? "checked" : ""} />
      <span class="checkmark"></span>
    </div>
  );
}
