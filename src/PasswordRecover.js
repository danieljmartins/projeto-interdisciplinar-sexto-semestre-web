import React, { useState } from 'react';
import './PasswordRecover.css';
import { useNavigate } from 'react-router-dom';

function PasswordRecover() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div className="passwordRecoverContainer">
      <div className="passwordRecoverCard">
        <h1 className="passwordRecoverTitle">Recuperar Senha</h1>
        <form className="passwordRecoverForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Usuário"
            className="passwordRecoverInput"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            className="passwordRecoverInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            className="passwordRecoverInput"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
            className="passwordRecoverButton"
          >
            Recuperar Senha
          </button>
        </form>
        <button onClick={handleVoltar} className="voltarButton">
          Voltar
        </button>
      </div>
    </div>
  );
}

export default PasswordRecover;
