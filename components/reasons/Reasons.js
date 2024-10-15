import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";


export default function Reasons({className, children}) {
  return (
    <div className={classNames("reasons", className)}>
      {children}
      <div className={"reasons__line"}/>
    </div>
  );
}
Reasons.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

