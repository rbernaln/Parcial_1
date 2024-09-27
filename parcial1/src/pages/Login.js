// src/pages/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import api from "../api";
import "./Login.css";
import LanguageSelector from "../components/LanguageSelector"; 

const Login = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", {
        login: username,
        password: password,
      });

      if (response.status === 200) {
        navigate("/robots");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError(true);
      } else {
        console.error("Error al conectar con el backend", err);
      }
    }
  };

  return (
    <div className="login-container">
      <LanguageSelector /> 
      <h2 className="text-center">{t('robot_adopt_title')}</h2>
      <header className="login-header">
        <img
          src="https://img.freepik.com/vector-gratis/conjunto-lindos-robots-vintage_331172-1430.jpg?size=626&ext=jpg"
          alt="Robot Lovers Banner"
          className="login-banner"
        />
      </header>

      <div className="login-form-container">
        <h2 className="text-center">{t('login_title')}</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label className="form-label">{t('username_label')}</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">{t('password_label')}</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <p className="text-danger">
              {t('login_error')}
            </p>
          )}
          <div className="button-group">
            <button type="submit" className="btn btn-primary">
              {t('login_button')}
            </button>
            <button
              type="button"
              className="btn btn-danger ms-2"
              onClick={() => {
                setUsername("");
                setPassword("");
                setError(false);
              }}
            >
              {t('cancel_button')}
            </button>
          </div>
        </form>

        <footer className="login-footer text-center mt-4">
          <p>{t('footer_contact')} +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
        </footer>
      </div>
    </div>
  );
};

export default Login;
