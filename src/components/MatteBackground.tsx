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
          backgroundImage: 'url(/logos/blackbg.png)', // Ensure this file exists at public/logos/blackbg.png
          backgroundColor: '#0f0f0f', // Fallback if image fails to load
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        };
      case 'white':
        return {
          backgroundImage: 'url(/logos/whitebg.png)', // Ensure this file exists at public/logos/whitebg.png
          backgroundColor: '#f5f5f5', // Fallback if image fails to load
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        };
      case 'red':
        return {
          backgroundImage: 'url(/logos/redbg.png)', // Ensure this file exists at public/logos/redbg.png
          backgroundColor: '#b91c1c', // Fallback if image fails to load
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        };
      default:
        return { backgroundColor: '#f5f5f5' }; // Default fallback
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
          className="absolute inset-0 opacity-20" // Reduced opacity for better image visibility
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