import React from 'react';
import '../App.css';

const Logo = ({ size = 'medium', className = '' }) => {
  const getSizeStyles = () => {
    switch (size) {
      case 'small':
        return {
          fontSize: '1.5rem',
          width: '40px',
          height: '40px'
        };
      case 'large':
        return {
          fontSize: '3rem',
          width: '80px',
          height: '80px'
        };
      default: // medium
        return {
          fontSize: '2rem',
          width: '60px',
          height: '60px'
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <div 
      className={`logo-container ${className}`}
      style={{
        ...sizeStyles,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '12px',
        background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)',
        color: 'white',
        fontWeight: '700',
        letterSpacing: '1px',
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)',
        border: '1px solid rgba(0, 0, 0, 0.8)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        userSelect: 'none'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-2px) scale(1.05)';
        e.target.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0) scale(1)';
        e.target.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.3)';
      }}
    >
      AH
    </div>
  );
};

export default Logo;
