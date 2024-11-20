import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import logo from './media/logo.png';

function Login({ onLogin }) {
  const navigate = useNavigate();
  
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleLoginClick = async (e) => {
    e.preventDefault();

    if (!usuario || !email || !senha) {
      setErrorMessage('Por favor, preencha todos os campos.');
      return;
    }

    const loginData = {
      login: usuario,
      senha: senha,
      email: email,
    };

    try {
      const response = await fetch('http://localhost:8080/usuarios/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        onLogin(); 
        navigate('/');
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Erro ao tentar fazer login. Verifique suas credenciais.');
      }
    } catch (error) {
      setErrorMessage('Erro ao conectar com o servidor. Tente novamente mais tarde.');
    }
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
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="loginInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="loginInput"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="button" className="loginButton" onClick={handleLoginClick}>
            Entrar
          </button>
        </form>

        {errorMessage && <p className="errorMessage">{errorMessage}</p>}

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
