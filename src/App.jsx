import React, { useState } from 'react';
import './style.css';

function App() {
  const [message, setMessage] = useState('');

  const handleAnswer = (answer) => {
    if (answer === 'goku') {
      setMessage('Parabéns! Você acertou.');
    } else {
      setMessage('Tá errado! Tente de novo.');
    }
  };

  return (
    <div className="container">
      <img
        src="https://www.pngarts.com/files/10/DBZ-Goku-PNG-Download-Image.png"
        alt="Personagem"
        className="centered-image"
      />
      <h2>Qual o nome dele?</h2>
      <div className="options">
        <button onClick={() => handleAnswer('goku')}>Goku</button>
        <button onClick={() => handleAnswer('vegeta')}>Vegeta</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default App;


// Log to console
console.log('Hello console')