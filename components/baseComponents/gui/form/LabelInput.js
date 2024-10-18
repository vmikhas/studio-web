import React, {cloneElement, createElement, isValidElement} from "react";
import * as PropTypes from "prop-types";
import Input from "./Input";
import classNames from "classnames";


export default function LabelInput({comp, label, labelAs, labelTextProps, labelProps, ...rest}) {
  labelTextProps = {...labelTextProps, label};
  if (typeof labelAs === "string")
    labelTextProps.children = label;//Дописывать
  return (
    <label className={classNames("input", comp)} {...labelProps}>
      {/*<label className={"input"} {...labelProps}>*/}
      {labelAs
        ? isValidElement(labelAs)
          ? cloneElement(labelAs, labelTextProps)
          : createElement(labelAs, labelTextProps)
        : label}
      <Input {...rest} />
    </label>
  );
}
LabelInput.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.elementType,
    PropTypes.element
  ]),
  labelTextProps: PropTypes.object,
  labelProps: PropTypes.object
};
