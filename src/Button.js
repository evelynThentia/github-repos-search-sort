import React from "react";

export default ({ value, handleClick }) => (
  <button className="profile__button" onClick={handleClick}>{value}</button>
);
