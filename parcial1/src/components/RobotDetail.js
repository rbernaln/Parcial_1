// src/components/RobotDetail.js
import React from "react";
import { useTranslation } from "react-i18next"; 
import "./RobotDetail.css";

const RobotDetail = ({ robot }) => {
  const { t } = useTranslation();  

  if (!robot) {
    return <p>{t('select_robot')}</p>;  
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
        <li>
          <strong>{t('year_of_manufacture')}:</strong> {robot.añoFabricacion}
        </li> {/* Traducción para "Año de fabricación" */}
        <li>
          <strong>{t('processing_capacity')}:</strong> {robot.capacidadProcesamiento}
        </li> {/* Traducción para "Capacidad de procesamiento" */}
        <li>
          <strong>{t('additional_features')}:</strong> {robot.humor}
        </li> {/* Traducción para "Características adicionales" */}
      </ul>
    </div>
  );
};

export default RobotDetail;
