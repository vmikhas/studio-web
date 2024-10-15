import React from "react";
import {image} from "../../../../utils/data/baseUrl";

export default function CustomHeaderLogo() {
  return (
    <div
      className={'custom-header__logo'}
      style={{background: `url("${image("header/logo.svg")}") no-repeat center`}}
    />
  )
}
