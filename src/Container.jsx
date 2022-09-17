import React from "react";

const Container = ({ title, icon }) => {
  return (
    <div>
      <div className={`container ${title}`}>
        <div className="loader">
          <span></span>
        </div>
        <div className="loader">
          <span></span>
        </div>
        <div className="loader">
          <div className="i"></div>
        </div>
        <div className="loader">
          <div className="i"></div>
        </div>
        <i className={`fa-solid ${icon}`}></i>
      </div>
    </div>
  );
};

export default Container;
