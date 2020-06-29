import React from "react";

export const Errors = ({ message }) => {
  return (
    <div>
      <h2>Error:</h2>
      <p>{message}</p>
    </div>
  );
};
