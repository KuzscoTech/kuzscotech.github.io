import React from "react";

function ServicesSection({ img, title, desc }) {
  return (
    <div className="servicesSection">
      <div className="service">
        <div className="service-content">
          <img src={img} alt="" />
          <h5 className="s-title">{title}</h5>
          <p className="s-txt">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
