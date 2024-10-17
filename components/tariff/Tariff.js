import React, {useState} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import Carousel from "../baseComponents/gui/carousel/Carousel.js";
import TariffSwiper from "./TariffSwiper.js";
import {settings} from "../../constants/carousel-settings.js";
import Icon from "../baseComponents/gui/icon/Icon.js";


export default function Tariff({className, children, title, arrow, cards}) {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div className={classNames("tariff", className)}>
      {children}
      <div className={"tariff__container"}>
        <h2 className={"tariff__title"}>{title}</h2>
        <div className={"tariff__swiper"}>
          <Carousel
            item={TariffSwiper}
            itemsData={cards}
            selectedSlide={activeSlide}
            settings={{
              ...settings.tariff,
              ...{
                navigation: {
                  prevEl: ".tariff__button_prev",
                  nextEl: ".tariff__button_next"
                },
                onSlideChange(swiper) {
                  setActiveSlide(swiper.realIndex)
                }
              }
            }}
          />
        </div>
        {cards?.length > 1 &&
          <div className={"tariff__button tariff__button_prev"}>
            <Icon name={arrow}/>
          </div>
        }
        {cards?.length > 1 &&
          <div className={"tariff__button tariff__button_next"}>
            <Icon name={arrow}/>
          </div>
        }
      </div>
    </div>
  );
}
Tariff.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
