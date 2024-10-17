import React from "react";
import CustomButton from "../baseComponents/gui/customButton/CustomButton.js";
import {safeHTML} from "../../utils/safeHTML.js";


export default function TariffSwiper({subtitle, text, price, days, button}) {
  return (
    <>
      <div className={"tariff__wrapper"}>
        <h3 className={"tariff__subtitle"}>{safeHTML(subtitle)}</h3>
        <p className={"tariff__text"}>{safeHTML(text)}</p>
      </div>
      <div className={"tariff__box"}>
        <div className={"tariff__inner"}>
          <p className={"tariff__price"}>{safeHTML(price)}</p>
          <p className={"tariff__text tariff__text_days"}>{safeHTML(days)}</p>
        </div>
        <CustomButton {...button}/>
      </div>
    </>
  );
}
