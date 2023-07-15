import React from "react";

function Alert(props) {
  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      <strong> {props.alert}</strong>{" "}
      <button
        type="button"
        class="btn-close .fade .show"
        aria-label="Close"
        data-bs-dismiss="alert"
      ></button>
    </div>
  );
}

export default Alert;
