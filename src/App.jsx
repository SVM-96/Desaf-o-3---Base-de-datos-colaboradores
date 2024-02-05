import Formulario from "./assets/components/Formulario";
import Listado from "./assets/components/Listado";
import Buscador from "./assets/components/Buscador";
import Alerta from "./assets/components/Alert";
import { BaseColaboradores } from "./BaseColaboradores";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [alerta, setAlerta] = useState({ mensaje: "", tipo: "" });

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const mostrarAlerta = (mensaje, tipo) => {
    setAlerta({ mensaje, tipo });
    setTimeout(() => {
      setAlerta({ mensaje: "", tipo: "" });
    }, 3000);
  };

  const filtrarColaboradores = (busqueda) => {
    const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
      return (
        colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.edad.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
        colaborador.telefono.toLowerCase().includes(busqueda.toLowerCase())
      );
    });

    setColaboradores(colaboradoresFiltrados);
  };

  return (
    <div className="container mt-3">
      <Alerta mensaje={alerta.mensaje} tipo={alerta.tipo} />
      <Listado colaboradores={colaboradores} />
      <Formulario
        agregarColaborador={agregarColaborador}
        mostrarAlerta={mostrarAlerta}
      />
      <Buscador filtrarColaboradores={filtrarColaboradores} />
    </div>
  );
};

export default App;
