import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import CustomButton from "../baseComponents/gui/customButton/CustomButton.js";
import {safeHTML} from "../../utils/safeHTML.js";


export default function Reasons({className, children, title, textUpper, text, button}) {
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
      </div>
    </div>
  );
}
Reasons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

