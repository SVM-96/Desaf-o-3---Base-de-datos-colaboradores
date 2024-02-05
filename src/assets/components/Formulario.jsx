import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

const Formulario = ({ agregarColaborador, mostrarAlerta }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleAgregarColaborador = () => {
    if (!nombre || !correo || !edad || !cargo || !telefono) {
      mostrarAlerta("Todos los campos son obligatorios", "danger");
      return;
    }

    const nuevoColaborador = {
      id: (Math.random() * 100).toString(),
      nombre,
      correo,
      edad,
      cargo,
      telefono,
    };

    agregarColaborador(nuevoColaborador);

    setNombre("");
    setCorreo("");
    setEdad("");
    setCargo("");
    setTelefono("");

    mostrarAlerta("Colaborador agregado exitosamente", "success");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="correo">
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese el correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="edad">
        <Form.Label>Edad</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese la edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="cargo">
        <Form.Label>Cargo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="telefono">
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Ingrese el teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleAgregarColaborador}>
        Agregar Colaborador
      </Button>
    </Form>
  );
};

export default Formulario;
