import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logo from './media/logo.png';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    onLogin();
    navigate('/');
  };

  const handleCreateAccountClick = () => {
    navigate('/signup');
  };

  const handlePasswordRecoverClick = () => {
    navigate('/passwordrecover');
  };

  return (
    <div className="loginContainer">
      <div className="loginCard">
        <img src={logo} alt="Logo" className="loginLogo" />
        <p className="loginSubtitle">Faça login para continuar</p>
        <form className="loginForm">
          <input
            type="text"
            placeholder="Usuário"
            className="loginInput"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="loginInput"
          />
          <input
            type="password"
            placeholder="Senha"
            className="loginInput"
          />
          <button type="button" className="loginButton" onClick={handleLoginClick}>
            Entrar
          </button>
        </form>

        <button
          type="button"
          className="createAccountButton"
          onClick={handleCreateAccountClick}
        >
          Criar Conta
        </button>

        <button
          type="button"
          className="passwordButton"
          onClick={handlePasswordRecoverClick}
        >
          Esqueceu a senha?
        </button>

        <p className="loginFooter">© 2024 Dream Forge. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

export default Login;
