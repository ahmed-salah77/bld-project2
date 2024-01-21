import React from "react";
import "../../css/billboardBanner.css";
function BillBoardBanner(params) {
    return (
        <div className="billboard-container">
            <div className="poster">
                <img src="/images/billboard_img0.jpg" className="imgbig" alt="background"/>
                <div className="window">
                    <h1>Learning that gets you</h1>
                    <p>Skills for your present (and your future). Get started with us.</p>
                </div>
            </div>
        </div>
    );
}
export default BillBoardBanner;