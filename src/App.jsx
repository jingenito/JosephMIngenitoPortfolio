import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import Home from './components/home/Home.jsx';

const App = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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

  const updateIsMobile = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', updateIsMobile);
    return () => {
      window.removeEventListener('resize', updateIsMobile);
    };
  }, []);

  return (
    <div className="App" onMouseMove={!isMobile ? handleMouseMove : null} style={{ minHeight: '100vh' }}>
      {!isMobile && (<div
        style={{
          position: 'fixed',
          top: cursorPos.y - 400, // Center the gradient on the cursor
          left: cursorPos.x - 400,
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(29, 78, 216, 0.15), transparent 80%)',
          pointerEvents: 'none', // Ensure clicks can pass through this element
          zIndex: 1, // Ensure the gradient is above other content
        }}
      >
      </div>)}
      <Home />
    </div>
  );
}

export default App;
