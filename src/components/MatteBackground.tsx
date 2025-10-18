import React from 'react';

interface MatteBackgroundProps {
  theme: 'black' | 'white' | 'red';
  className?: string;
}

export const MatteBackground: React.FC<MatteBackgroundProps> = ({ theme, className = '' }) => {
  const getBackgroundStyle = () => {
    switch (theme) {
      case 'black':
        return {
          background: '#0f0f0f',
        };
      case 'white':
        return {
          background: '#f5f5f5',
        };
      case 'red':
        return {
          background: '#b91c1c', // Changed from #7f1d1d to brighter red
        };
      default:
        return {};
    }
  };

  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={getBackgroundStyle()}
    >
      {/* Matte texture overlay, only for white and red themes */}
      {theme !== 'black' && (
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 1px,
                rgba(255,255,255,0.02) 1px,
                rgba(255,255,255,0.02) 2px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 1px,
                rgba(0,0,0,0.02) 1px,
                rgba(0,0,0,0.02) 2px
              ),
              radial-gradient(
                circle at 50% 50%,
                rgba(255,255,255,0.01) 0%,
                transparent 70%
              )
            `,
            backgroundSize: '8px 8px, 8px 8px, 200px 200px',
          }}
        />
      )}
    </div>
  );
};