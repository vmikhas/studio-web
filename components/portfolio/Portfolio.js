import React, {useState} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import CustomButton from "../baseComponents/gui/customButton/CustomButton.js";
import {safeHTML} from "../../utils/safeHTML.js";
import Carousel from "../baseComponents/gui/carousel/Carousel.js";
import PortfolioSwiper from "./PortfolioSwiper.js";
import {settings} from "../../constants/carousel-settings.js";


export default function Portfolio({className, children, title, text, button, images}) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className={classNames("portfolio", className)}>
      {children}
      <div className={"portfolio__container"}>
        <h2 className={"portfolio__title"}>{title}</h2>
        <p className={"portfolio__text"}>{safeHTML(text)}</p>
        <CustomButton {...button}/>
      </div>
      <div className={"portfolio__carousel"}>
        <div>
          <Carousel
            item={PortfolioSwiper}
            itemsData={images}
            selectedSlide={activeSlide}
            settings={{
              ...settings.portfolio,
              ...{
                navigation: {
                  prevEl: "",
                  nextEl: ""
                },
                onSlideChange(swiper){
                  setActiveSlide(swiper.realIndex)
                }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
Portfolio.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

