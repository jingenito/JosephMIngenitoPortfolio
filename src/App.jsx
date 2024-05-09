import React, { useState, useCallback } from 'react';
import './App.css';
import Home from './components/home/Home.jsx';

const App = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });

  const debounce = (func, wait) => {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }

  const handleMouseMove = useCallback(debounce((event) => {
    setCursorPos({ x: event.clientX, y: event.clientY });
  }, 10), []); // debounce time 10ms

  return (
    <div className="App" onMouseMove={handleMouseMove}>
      <div
        style={{
          position: 'absolute',
          top: cursorPos.y - 400, // Center the gradient on the cursor
          left: cursorPos.x - 400,
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.15), transparent 80%)',
          pointerEvents: 'none', // Ensure clicks can pass through this element
        }}
      >
      </div>
      <Home />
    </div>
  );
}

export default App;
