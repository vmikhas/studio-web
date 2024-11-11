import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import Picture from "../baseComponents/gui/picture/Picture.js";
import {safeHTML} from "../../utils/safeHTML.js";
import Icon from "../baseComponents/gui/icon/Icon.js";


export default function Footer({className, children, bgImage, title, social, copyright, securityPolicy}) {
  return (
    <div className={classNames("main-footer", className)}>
      {children}
      <div className={"main-footer__bg"}>
        {bgImage?.map((img, id) => (
          <div className={classNames("main-footer__bg-image", {
            [`main-footer__bg-image_${id + 1}`]: id + 1
          })} key={id}>
            <Picture {...img}/>
          </div>
        ))}
      </div>
      <div className={"main-footer__content"}>
        {title && <h2 className={"main-footer__title"}>{safeHTML(title)}</h2>}
        <div className={"main-footer__social-list"}>
          {social?.map(({logo, href}, social) => (
            <a className={"main-footer__social-link"} href={href} key={social}>
              <div className={classNames("main-footer__social-image", {
                [`main-footer__social-image_${social + 1}`]: social + 1
              })}>
                <Icon name={logo}/>
              </div>
            </a>
          ))}
        </div>
        {copyright && <p className={"main-footer__copyright"}>{safeHTML(copyright)}</p>}
        {securityPolicy && (
          <a className={"main-footer__security-policy"} href={securityPolicy.href}>{safeHTML(securityPolicy.text)}</a>
        )}
      </div>
    </div>
  );
}
Footer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

