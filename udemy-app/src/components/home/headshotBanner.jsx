import React from "react";
import "../../css/headshotBanner.css";
import data from "../../bannerData.json";

function BannerContainer(props) {
  const bannerData = data.bannerData[props.bannerId];
  return (
    <div className="banner-container">
      <div className="title-type">
        {bannerData.title}
      </div>
      <div className="info">
        <p>
          {bannerData.description}
        </p>
      </div>
      <a href={bannerData.url} className="explore">
        <span>{bannerData.btn_title}</span>
      </a>
    </div>
  );
}

export default BannerContainer;
