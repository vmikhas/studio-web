import React from "react";
import LabelInput from "./LabelInput";

export default function TextAreaInput(props) {
  return <LabelInput {...props} as="textarea"/>;
}
