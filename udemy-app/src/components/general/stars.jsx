import React from "react";

const Stars = (props) => {
  let stars = "";
  const full = `<span class='fa fa-star'></span>`;
  const half = `<span class='fa fa-star-half-o'></span>`;
  const empty = `<span class='fa fa-star-o'></span>`;
  const rate = props.rate;
  var cnt = Math.floor(rate);
  for (var j = 0; j < cnt; ++j) {
    stars += full;
  }
  if (rate !== cnt) {
    stars += half;
    cnt++;
  }
  for (j = cnt; j < 5; ++j) {
    stars += empty;
  }
  return <span dangerouslySetInnerHTML={{ __html: stars }}></span>;
};

export default Stars;
