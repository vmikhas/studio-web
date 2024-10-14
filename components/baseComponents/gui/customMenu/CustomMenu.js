import React from "react";
import * as PropTypes from "prop-types";
import CustomMenuItems from "./CustomMenuItems";
import CustomButton from "../customButton/CustomButton.js";
import {header} from "../../../../constants/copyright.js";


export default function CustomMenu({customMenuItems}) {
  return (
    <nav className={"custom-menu"}>
      <ul className={"custom-menu__list"}>
        <CustomMenuItems items={customMenuItems}/>
      </ul>
      <CustomButton {...header.headerLink}/>
    </nav>
  )
}


CustomMenu.propTypes = {
  customMenuItems: PropTypes.array,
  headerLink: PropTypes.object
};
