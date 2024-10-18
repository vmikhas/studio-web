import React, {useState} from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import Form from "../baseComponents/gui/form/Form.js";
import OrderForm from "./OrderForm.js";
import Input from "../baseComponents/gui/input/Input.js";
import {checkPhone, email, required} from "../../constants/form.js";
import {safeHTML} from "../../utils/safeHTML.js";
import Picture from "../baseComponents/gui/picture/Picture.js";


export default function Order({className, children, title, button, phone, notifications}) {
  const [formData, setFormData] = useState({});

  const inputChange = (e) => {
    const {name, value} = e.target;
    setFormData((data) => ({
      ...data,
      [name]: value
    }));
  };

  const onSubmit = () => {
    console.log(formData);
  };

  const slots = {
    userName: [
      <Input
        className={"order__input"}
        name={"name"}
        label={"Ваше ФИО"}
        comp={"order__label"}
        autoComplete={"off"}
        rules={required("text")}
        onChange={inputChange}
      />
    ],
    tel: [
      <Input
        className={"order__input"}
        name={"tel"}
        label={"Ваш номер телефона"}
        comp={"order__label"}
        autoComplete={"off"}
        rules={checkPhone}
        onChange={inputChange}
      />
    ],
    budget: [
      <Input
        className={"order__input"}
        name={"budget"}
        label={"Бюджет на сайт"}
        comp={"order__label"}
        autoComplete={"off"}
        rules={required("text")}
        onChange={inputChange}
      />
    ],
    email: [
      <Input
        className={"order__input"}
        name={"email"}
        label={"Ваш E-MAIL адрес"}
        comp={"order__label"}
        rules={email("text")}
        onChange={inputChange}
      />
    ],
    comment: [
      <Input
        className={"order__input order__input_comment"}
        name={"comment"}
        label={safeHTML("Ваш комментарий ( по&nbsp;желанию )")}
        comp={"order__label"}
        onChange={inputChange}
      />
    ]
  };

  return (
    <div className={classNames("order", className)}>
      {children}
      <div className={"order__container"}>
        <Form
          className={"order__form"}
          as={OrderForm}
          slots={slots}
          onSubmit={onSubmit}
          title={title}
          button={button}
          useFormProps={{
            mode: "onChange"
          }}
        />
        <div className={"order__holder"}>
          <div className={"order__image"}>
            <Picture {...phone}/>
          </div>
          <ul className={"order__list"}>
            {notifications?.map((item, i) => (
              <li className={`order__item order__item_${i + 1}`} key={i}>
                <div className={"order__icon"}>
                  <Picture {...item.icon}/>
                </div>
                <div className={"order__wrap"}>
                  <h3 className={"order__subtitle"}>{safeHTML(item.subtitle)}</h3>
                  <p className={"order__text"}>{safeHTML(item.text)}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
Order.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
