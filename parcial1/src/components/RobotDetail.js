import React from "react";
import "./RobotDetail.css"; 

const RobotDetail = ({ robot }) => {
  if (!robot) {
    return <p>Selecciona un robot para ver los detalles.</p>;
  }

  return (
    <div className="robot-detail">
      <h2 className="robot-name">{robot.nombre}</h2>
      <img
        src={robot.imagen.replace("blob", "raw")}
        alt={robot.nombre}
        className="robot-image"
      />
      <ul className="robot-info">
        <li><strong>Año de Fabricación:</strong> {robot.añoFabricacion}</li>
        <li><strong>Capacidad de Procesamiento:</strong> {robot.capacidadProcesamiento}</li>
        <li><strong>Humor:</strong> {robot.humor}</li>
      </ul>
    </div>
  );
};

export default RobotDetail;
