import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro realizado com:', usuario, email, password);
  };

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div className="signupContainer">
      <div className="signupCard">
        <h1 className="signupTitle">Criar Conta</h1>
        <form className="signupForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            className="signupInput"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="signupInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="signupInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
            className="signupButton"
          >
            Criar Conta
          </button>
        </form>
        <button onClick={handleVoltar} className="voltarButton">
          Voltar
        </button>
      </div>
    </div>
  );
}

export default Signup;
