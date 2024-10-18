import React from "react";
import classNames from "classnames";
import LabelInput from "../form/LabelInput";


export default function Input({label, comp, ...rest}) {
  return (
    <LabelInput
      labelProps={{className: classNames("input", Object.values(rest?.error?.props?.errors[rest.name] || {}).length ? "input-box__error" : "")}}
      label={label ? <div className={classNames("input__name", comp)}>{label}</div> : null}
      className="input__block"
      // maxLength={`${rest.max ? rest.max : null}`}
      {...rest}
    />
  );
}

