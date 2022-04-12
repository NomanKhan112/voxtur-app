import React from "react";
import HoldNavBar from "../Common/HoldNavBar";
import DeliveredForm from "./DeliveredForm";
import { styles } from "../../styles";

const DeliveredSection = () => {
  return (
    <>
      <HoldNavBar styles={styles} status="delivered" />
      <DeliveredForm styles={styles} />
    </>
  );
};

export default DeliveredSection;
