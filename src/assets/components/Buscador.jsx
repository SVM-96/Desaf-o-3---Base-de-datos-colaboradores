import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Buscador = ({ filtrarColaboradores }) => {
  const [busqueda, setBusqueda] = useState("");

  const handleBusqueda = (e) => {
    setBusqueda(e.target.value);
    filtrarColaboradores(e.target.value);
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="busqueda">
        <Form.Label>Buscar</Form.Label>
        <Form.Control
          type="text"
          placeholder="Buscar por nombre, correo, edad, cargo, teléfono"
          value={busqueda}
          onChange={handleBusqueda}
        />
      </Form.Group>
    </Form>
  );
};

export default Buscador;
