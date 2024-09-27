// src/pages/RobotsList.js
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import api from "../api";
import RobotDetail from "../components/RobotDetail";
import "./RobotsList.css";
import LanguageSelector from "../components/LanguageSelector"; // Importamos el selector de idioma

const RobotsList = () => {
  const { t } = useTranslation();
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRobot, setSelectedRobot] = useState(null);

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await api.get("/robots");
        setRobots(response.data);
        setLoading(false);
      } catch (err) {
        setError(t('fetch_error'));
        setLoading(false);
      }
    };

    fetchRobots();
  }, [t]);

  const handleRobotSelect = (robot) => {
    setSelectedRobot(robot);
  };

  if (loading) {
    return <p>{t('loading')}</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="robots-container">
      <LanguageSelector /> {/* Añadimos el selector de idioma */}
      <h2 className="text-center">{t('robot_adopt_title')}</h2>
      <header className="robots-header">
        <img
          src="https://img.freepik.com/vector-gratis/conjunto-lindos-robots-vintage_331172-1430.jpg?size=626&ext=jpg"
          alt="Robot Lovers Banner"
          className="robots-banner"
        />
      </header>

      <div className="robots-content">
        <div className="robots-table-container">
          <table className="table table-bordered mt-3">
            <thead className="table-dark">
              <tr>
                <th>{t('robot_table_headers.id')}</th>
                <th>{t('robot_table_headers.name')}</th>
                <th>{t('robot_table_headers.model')}</th>
                <th>{t('robot_table_headers.manufacturer')}</th>
              </tr>
            </thead>
            <tbody>
              {robots.map((robot) => (
                <tr key={robot.id} onClick={() => handleRobotSelect(robot)}>
                  <td>{robot.id}</td>
                  <td>{robot.nombre}</td>
                  <td>{robot.modelo}</td>
                  <td>{robot.empresaFabricante}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="robot-detail-container">
          <RobotDetail robot={selectedRobot} />
        </div>
      </div>

      <footer className="robots-footer text-center">
        <p>{t('footer_contact')} +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
};

export default RobotsList;
