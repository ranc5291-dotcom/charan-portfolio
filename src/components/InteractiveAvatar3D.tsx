import { useState, useRef, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function InteractiveAvatar3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [rotY, setRotY] = useState(0);
  const [rotX, setRotX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth springs for 3D rotation
  const springRotY = useSpring(0, { stiffness: 150, damping: 18 });
  const springRotX = useSpring(0, { stiffness: 150, damping: 18 });

  useEffect(() => {
    springRotY.set(rotY);
  }, [rotY, springRotY]);

  useEffect(() => {
    springRotX.set(rotX);
  }, [rotX, springRotX]);

  // Mouse move tilt when not dragging
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Subtle 3D tilt
    setRotY((x / (rect.width / 2)) * 25);
    setRotX(-(y / (rect.height / 2)) * 12);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!isDragging) {
      setRotY(0);
      setRotX(0);
    }
  };

  // Click & Drag left/right rotation
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX - rotY * 3);
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      setRotY(deltaX / 3);
    };

    const handleGlobalMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleGlobalMouseMove);
      window.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, startX]);

  // Touch drag support
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX - rotY * 3);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    setRotY(deltaX / 3);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Click animation: 360 degree spin
  const handleClick = () => {
    if (!isDragging) {
      setRotY(prev => prev + 360);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onClick={handleClick}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: isDragging ? 'grabbing' : 'grab',
        perspective: '1200px',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      {/* 3D Wrapper */}
      <motion.div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
          rotateY: springRotY,
          rotateX: springRotX,
        }}
      >
        {/* Transparent Avatar PNG (No white background) */}
        <img
          src="/hero-avatar.png"
          alt="3D Interactive AI Avatar H N Charan"
          style={{
            maxHeight: '85vh',
            maxWidth: '100%',
            objectFit: 'contain',
            objectPosition: 'bottom center',
            filter: isHovered
              ? 'drop-shadow(0 20px 40px rgba(79, 142, 247, 0.35)) brightness(1.05)'
              : 'drop-shadow(0 15px 30px rgba(0, 0, 0, 0.6))',
            transition: 'filter 0.3s ease',
            pointerEvents: 'none',
          }}
        />

      </motion.div>

    </div>
  );
}
