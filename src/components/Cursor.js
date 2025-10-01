
import React, { useState, useEffect } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const newTrail = [...trail, position];
    if (newTrail.length > 10) {
      newTrail.shift();
    }
    const timeout = setTimeout(() => setTrail(newTrail), 10);
    return () => clearTimeout(timeout);
  }, [position]);

  return (
    <>
      <div className="cursor" style={{ left: `${position.x}px`, top: `${position.y}px` }}></div>
      {trail.map((p, i) => (
        <div
          key={i}
          className="trail"
          style={{ left: `${p.x}px`, top: `${p.y}px`, opacity: i / trail.length }}
        ></div>
      ))}
    </>
  );
};

export default Cursor;
