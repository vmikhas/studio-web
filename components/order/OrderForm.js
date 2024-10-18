import CustomButton from "../baseComponents/gui/customButton/CustomButton.js";


export default function OrderForm({title, slots, button, ...rest}) {
  return (
    <form {...rest}>
      <fieldset className={"order__inner"}>
        <legend className={"order__title"}>{title}</legend>
        <div className={"order__wrapper"}>
          <div className={"order__box"}>{slots.userName}</div>
          <div className={"order__box"}>{slots.email}</div>
          <div className={"order__box"}>{slots.tel}</div>
          <div className={"order__box"}>{slots.comment}</div>
          <div className={"order__box"}>{slots.budget}</div>
          <CustomButton {...button}/>
        </div>
      </fieldset>
    </form>
  );
}
