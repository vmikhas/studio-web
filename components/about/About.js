import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import CustomButton from "../baseComponents/gui/customButton/CustomButton.js";
import {safeHTML} from "../../utils/safeHTML.js";
import Icon from "../baseComponents/gui/icon/Icon.js";
import Picture from "../baseComponents/gui/picture/Picture.js";


export default function About({className, children, title, subtitle, desc, text, textButton, imageDev, rings}) {
  return (
    <div className={classNames("about", className)}>
      {children}
      <div className={"about__container"}>
        <div className={"about__content"}>
          <h1 className={"about__title"}>{title}</h1>
          <h2 className={"about__title about__title_subtitle"}>{subtitle}</h2>
          <p className={"about__desc"}>{safeHTML(desc)}</p>
          <div className={"about__box"}>
            <CustomButton {...textButton}/>
            <p className={"about__text"}>{text}</p>
          </div>
        </div>
        <div className={"about__inner"}>
          <div className={"about__image"}>
            <Picture {...imageDev}/>
          </div>
          {rings?.map((item, id) => (
            <div className={`about__ring about__ring_${id + 1}`} key={id} >
              <Icon name={item.name}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
About.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

