/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { memo } from "react";

const Card = ({ img, title, desc }) => {
  return (
    <div className="card w-100">
      <img className="card-img-top" src={img} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </div>
  );
};

export default memo(Card);
