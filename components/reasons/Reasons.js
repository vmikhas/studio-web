import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import CustomButton from "../baseComponents/gui/customButton/CustomButton.js";
import {safeHTML} from "../../utils/safeHTML.js";
import Icon from "../baseComponents/gui/icon/Icon.js";


export default function Reasons({className, children, title, textUpper, text, button, advantages}) {
  return (
    <div className={classNames("reasons", className)}>
      {children}
      <div className={"reasons__line"}/>
      <div className={"reasons__container"}>
        <div className={"reasons__box"}>
          <h2 className={"reasons__title"}>{safeHTML(title)}</h2>
          <p className={"reasons__text reasons__text_upper"}>{safeHTML(textUpper)}</p>
          <p className={"reasons__text"}>{safeHTML(text)}</p>
          <CustomButton {...button}/>
        </div>
        <ul className={"reasons__list"}>
          {advantages?.map((advantage, index) => (
            <li className={`reasons__item reasons__item_${index + 1}`} key={index}>
              <h3 className={"reasons__subtitle"}>{safeHTML(advantage.subtitle)}</h3>
              <p className={"reasons__desc"}>{safeHTML(advantage.desc)}</p>
              <div className={`reasons__image reasons__image_${index + 1}`}>
                <Icon name={advantage.name}/>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
Reasons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

