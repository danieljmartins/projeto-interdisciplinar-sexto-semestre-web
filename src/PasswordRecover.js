import React, { useState } from 'react';
import './PasswordRecover.css';
import { useNavigate } from 'react-router-dom';

function PasswordRecover() {
  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [messageVisible, setMessageVisible] = useState(false); // Controla a exibição da mensagem de sucesso

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      alert('Por favor, insira um e-mail válido');
      return;
    }

    console.log('Enviando solicitação para o e-mail:', email);

    setMessageVisible(true);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="passwordRecoverContainer">
      <div className="passwordRecoverCard">
        {!messageVisible ? (
          <>
            <h1 className="passwordRecoverTitle">Recuperação de Senha</h1>
            <p className="passwordRecoverSubtitle">Informe seu e-mail para recuperar a senha</p>
            <form className="passwordRecoverForm" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="E-mail"
                className="passwordRecoverInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="passwordRecoverButton">
                Enviar
              </button>
            </form>
            <button onClick={handleBack} className="voltarButton">
              Voltar
            </button>
          </>
        ) : (
          <p className="successMessage">Email enviado!</p>
        )}
      </div>
    </div>
  );
}

export default PasswordRecover;
