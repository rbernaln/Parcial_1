import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "robot_adopt_title": "Adopt a Robot with Robot Lovers!",
      "username_label": "Username",
      "password_label": "Password",
      "login_button": "Login",
      "cancel_button": "Cancel",
      "login_title":"Login",
      "year_of_manufacture": "Year of Manufacture",
      "processing_capacity": "Processing Capacity",
      "additional_features": "Additional Features",
      "robot_table_headers": {
        "id": "ID",
        "name": "Name",
        "model": "Model",
        "manufacturer": "Manufacturer"
      },
      "select_robot": "Select a robot to view details.",
      "footer_contact":"Contact us:"
    }
  },
  es: {
    translation: {
      "robot_adopt_title": "¡Adopta un Robot con Robot Lovers!",
      "username_label": "Nombre de usuario",
      "password_label": "Contraseña",
      "login_button": "Ingresar",
      "login_title":"Iniciar sesión",
      "cancel_button": "Cancelar",
      "year_of_manufacture": "Año de fabricación",
      "processing_capacity": "Capacidad de Procesamiento",
      "additional_features": "Características adicionales",
      "robot_table_headers": {
        "id": "ID",
        "name": "Nombre",
        "model": "Modelo",
        "manufacturer": "Empresa Fabricante"
      },
      "select_robot": "Selecciona un robot para ver los detalles.",
      "footer_contact":"Contáctenos:"
    }
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources, 
    lng: 'es', 
    fallbackLng: 'en', 
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
