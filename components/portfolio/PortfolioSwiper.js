import React from 'react';

export default function PortfolioSwiper({img, url, alt}) {
  return (
    <div className={"portfolio__item"}>
      <img src={img ?? url} alt={alt}/>
    </div>
  );
}
