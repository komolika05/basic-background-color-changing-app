import './App.css';
import ColorPicker from './components/ColorPicker';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState('white');

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <ColorPicker changeColor={changeColor} />
    </div>

  );
}

export default App;
