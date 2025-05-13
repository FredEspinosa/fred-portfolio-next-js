import React, { useEffect, useRef, useState } from 'react';
import '../assets/css/navbar/DraggableNavMenu.scss';

const DraggableNavMenu: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ top: 30, right: 30 });
  const [startOffset, setStartOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Cargar posición desde localStorage
    const saved = localStorage.getItem('navMenuPosition');
    if (saved) {
      const parsed = JSON.parse(saved);
      setPosition(parsed);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (!isDragging || !containerRef.current) return;

      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      const newTop = clientY - startOffset.y;
      const newLeft = clientX - startOffset.x;

      const windowWidth = window.innerWidth;
      const right = windowWidth - newLeft - containerRef.current.offsetWidth;

      const newPosition = {
        top: Math.max(0, newTop),
        right: Math.max(0, right)
      };

      setPosition(newPosition);
      localStorage.setItem('navMenuPosition', JSON.stringify(newPosition));
    };

    const stopDragging = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', stopDragging);
    window.addEventListener('touchmove', handleMouseMove);
    window.addEventListener('touchend', stopDragging);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', stopDragging);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', stopDragging);
    };
  }, [isDragging, startOffset]);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    setStartOffset({ x: clientX - rect.left, y: clientY - rect.top });
    setIsDragging(true);
  };

  return (
    <div
      className="container"
      ref={containerRef}
      style={{ top: position.top, right: position.right, left: 'auto', position: 'fixed' }}
    >
      <input type="checkbox" id="toggle" />
      <label className="button" htmlFor="toggle" onMouseDown={handleStart} onTouchStart={handleStart}></label>
      <nav className="nav">
        <ul>
          <a href="" target="_blank">About</a>
          <a href="" target="_blank">Home</a>
          <a href="" target="_blank">Hire Me</a>
          <a href="" target="_blank">Subscribe</a>
        </ul>
      </nav>
    </div>
  );
};

export default DraggableNavMenu;
