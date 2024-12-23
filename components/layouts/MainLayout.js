import React, {useMemo} from "react";
import CustomHeader from "../baseComponents/gui/customHeader/CustomHeader";
import {aboutContent, footerContent, header, orderContent, portfolioContent, reasonsContent, tariffContent} from "../../constants/copyright";
import {node} from "prop-types";
import ModalProvider from "../baseComponents/controllers/modalController/ModalProvider";
import Preloader from "../baseComponents/gui/preloader/Preloader";
import ErrorHandlerModal from "../baseComponents/gui/errorHandlerModal/ErrorHandlerModal";
import About from "../about/About.js";
import Reasons from "../reasons/Reasons.js";
import Portfolio from "../portfolio/Portfolio.js";
import Tariff from "../tariff/Tariff.js";
import Order from "../order/Order.js";
import Footer from "../footer/Footer.js";


export default function MainLayout({children}) {
  return (
    <ModalProvider
      aliases={useMemo(() => ({
        errorHandlerModal: {Modal: ErrorHandlerModal}
        // infoModal: {Modal: InfoModal, props: {message: "Lorem ipsum"}}
      }), [])}
    >
      <Preloader/>
      <input type={"checkbox"} className={"custom-header__input"} id={"menu-burger"}/>
      <div className={"main-container"}>
        <CustomHeader {...header}/>
        <About {...aboutContent}/>
        <Reasons {...reasonsContent}/>
        <Portfolio {...portfolioContent}/>
        <Tariff {...tariffContent}/>
        <Order {...orderContent}/>
        <Footer {...footerContent}/>
      </div>
    </ModalProvider>
  );
}

MainLayout.propTypes = {
  children: node
};
