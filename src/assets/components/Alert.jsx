// Alert.jsx
import React from "react";
import { Alert as BootstrapAlert } from "react-bootstrap";

const Alerta = ({ mensaje, tipo }) => {
  return <BootstrapAlert variant={tipo}>{mensaje}</BootstrapAlert>;
};

export default Alerta;
