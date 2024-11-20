import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usuario, setUsuario] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debug01##
    console.log('Dados do usuário:');
    console.log('Usuário:', usuario);
    console.log('E-mail:', email);
    console.log('Senha:', password);

    if (!usuario || !email || !password) {
      setError('Por favor, preencha todos os campos');
      return;
    }

    setLoading(true);
    setError('');

    const userData = {
      login: usuario,
      senha: password,
      email: email,
    };

    try {
      const response = await fetch('http://localhost:8080/usuarios/cadastrar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Cadastro realizado com sucesso', data);
        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao cadastrar usuário');
      }
    } catch (err) {
      console.error('Erro ao se comunicar com o servidor', err);
      setError('Erro ao se comunicar com o servidor');
    } finally {
      setLoading(false);
    }
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
          {error && <p className="errorMessage">{error}</p>} {/* Exibe erro se houver */}
          <button type="submit" className="signupButton" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Criar Conta'}
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
