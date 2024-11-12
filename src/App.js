import React, { useState } from 'react';
import logo from './media/logo.png';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [selectedLora, setSelectedLora] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [positivePrompt, setPositivePrompt] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  // Função para abrir o seletor de arquivos
  const handleLoadImage = () => {
    document.getElementById('fileInput').click();
  };

  // Função para manipular a seleção de arquivo
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      console.log('Imagem selecionada:', file.name);
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage || !positivePrompt || !negativePrompt) {
      console.log("Preencha todos os campos antes de enviar.");
      return;
    }
  
    const formData = new FormData();
    formData.append("photo", document.getElementById('fileInput').files[0]);
    formData.append("positivePrompt", positivePrompt);
    formData.append("negativePrompt", negativePrompt);
  
    // Debug para verificar o conteúdo do formData
    formData.forEach((value, key) => {
      console.log(`${key}:`, value);
    });
  
    // Gerar um ID temporário no frontend
    const temporaryId = uuidv4();
    console.log("ID temporário gerado:", temporaryId);
  
    try {
      const response = await fetch(`http://localhost:8080/customers/${temporaryId}`, {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        console.log("Imagem enviada com sucesso!");
        // Atualize a URL com o ID temporário (ou o ID retornado, caso possa ser extraído)
        //window.history.replaceState(null, null, `/customers/${temporaryId}`);
      } else {
        console.error("Erro ao enviar a imagem.");
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="headerTitle">Crie seu personagem com o DREAM FORGE</h1>
      </header>

      {/* Conteúdo Principal */}
      <div className="mainContent">
        {/* Coluna Esquerda */}
        <div className="leftColumn">
          <div className="row">
            <select
              value={selectedLora}
              onChange={(e) => setSelectedLora(e.target.value)}
              className="picker"
            >
              <option value="">Selecione uma Lora</option>
              <option value="lora1">Lora 1</option>
              <option value="lora2">Lora 2</option>
              <option value="lora3">Lora 3</option>
            </select>
            <button onClick={handleLoadImage} className="smallButton">
              Selecione sua imagem
            </button>
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </div>

          <input
            type="text"
            placeholder="Prompt Positivo"
            className="input"
            value={positivePrompt}
            onChange={(e) => setPositivePrompt(e.target.value)}
          />

          <input
            type="text"
            placeholder="Prompt Negativo"
            className="input"
            value={negativePrompt}
            onChange={(e) => setNegativePrompt(e.target.value)}
          />

          <div className="buttonContainer">
            <button onClick={handleSubmit} className="button">
              Gerar Nova Imagem
            </button>
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="rightColumn">
          {selectedImage ? (
            <img src={selectedImage} alt="Imagem Selecionada" className="previewImage" />
          ) : (
            <p>Nenhuma imagem selecionada</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Dream Forge. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
