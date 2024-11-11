import React, { useState } from 'react';
import logo from './media/logo.png';

function App() {
  const [selectedLora, setSelectedLora] = useState('');
  const [negativePrompt, setNegativePrompt] = useState('');
  const [positivePrompt, setPositivePrompt] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLoadImage = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      console.log('Imagem selecionada:', file.name);
    }
  };

  const handleGenerateImage = () => {
    console.log('Gerando nova imagem com prompts:');
    console.log('Prompt Negativo:', negativePrompt);
    console.log('Prompt Positivo:', positivePrompt);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h1 style={styles.headerTitle}>Crie seu personagem com o DREAM FORGE</h1>
      </header>

      {/* Conteúdo Principal */}
      <div style={styles.mainContent}>
        {/* Coluna Esquerda */}
        <div style={styles.leftColumn}>
          <div style={styles.row}>
            <select
              value={selectedLora}
              onChange={(e) => setSelectedLora(e.target.value)}
              style={styles.picker}
            >
              <option value="">Selecione uma Lora</option>
              <option value="lora1">Lora 1</option>
              <option value="lora2">Lora 2</option>
              <option value="lora3">Lora 3</option>
            </select>
            <button onClick={handleLoadImage} style={styles.smallButton}>
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
            style={styles.input}
            value={positivePrompt}
            onChange={(e) => setPositivePrompt(e.target.value)}
          />

          <input
            type="text"
            placeholder="Prompt Negativo"
            style={styles.input}
            value={negativePrompt}
            onChange={(e) => setNegativePrompt(e.target.value)}
          />

          <div style={styles.buttonContainer}>
            <button onClick={handleGenerateImage} style={styles.button}>
              Gerar Nova Imagem
            </button>
          </div>
        </div>

        {/* Coluna Direita */}
        <div style={styles.rightColumn}>
          {selectedImage ? (
            <img src={selectedImage} alt="Imagem Selecionada" style={styles.previewImage} />
          ) : (
            <p>Nenhuma imagem selecionada</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2024 Dream Forge. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#d3dbe0',
    height: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  headerTitle: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#FF6B35',
    marginTop: '50px'
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
  leftColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  rightColumn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  },
  logo: {
    width: '100px',
    marginBottom: '10px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    width: '70%',
    marginBottom: '20px',
  },
  picker: {
    width: '70%',
    padding: '10px',
    backgroundColor: '#e0e6ed',
    color: '#2b2b2b',
    border: '1px solid #b0b7c3',
    borderRadius: '5px',
    marginRight: '10px',
  },
  smallButton: {
    padding: '10px 18px',
    backgroundColor: '#FF6B35',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonContainer: {
    width: '70%',
    marginBottom: '20px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#FF6B35',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  input: {
    width: '68%',
    height: '170px',
    backgroundColor: '#e0e6ed',
    color: '#2b2b2b',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #b0b7c3',
    textAlign: 'center',
  },
  previewImage: {
    maxWidth: '100%',
    maxHeight: '550px',
    borderRadius: '10px',
    marginTop: '20px',
  },
  footer: {
    width: '100%',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#FF6B35',
    color: '#ffffff',
  },
};

export default App;
