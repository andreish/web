import React from "/vendor/react";
import ReactDOM from "/vendor/react-dom";

import ErrorRoot from "/lib/component/root/ErrorRoot";

let lastError;
let rootElement;

const getRootElement = () => {
  if (!rootElement) {
    rootElement = document.createElement("div");
    document.body.appendChild(rootElement);
  }

  return rootElement;
};

const renderError = error => {
  if (
    // Abort rendering if an error is already displayed. This prevents a
    // potential endless loop when rendering an error encounters an error.
    !lastError
  ) {
    lastError = error;
    ReactDOM.render(<ErrorRoot error={error} />, getRootElement());
  }
};

export default renderError;
