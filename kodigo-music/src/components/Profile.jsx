import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Profile = ({ theme, toggleTheme }) => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
    <div className="profile">
      <i className="fas fa-user-circle profile-icon"></i>
      <h2>Perfil de Usuario</h2>
      {userData ? (
        <>
          <p>Email: {userData.email}</p>
          <p>Contraseña: **** (oculta por seguridad)</p>
        </>
      ) : (
        <p>No hay datos de usuario. Por favor, inicia sesión.</p>
      )}
      <div className="profile-actions">
        <button onClick={toggleTheme}>Modo {theme === 'dark' ? 'Claro' : 'Oscuro'}</button>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Profile;