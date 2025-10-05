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
          background: `
            radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.05) 0%, transparent 50%),
            linear-gradient(135deg, #0c0c0c 0%, #1a1a1a 25%, #0f0f0f 50%, #1c1c1c 75%, #111111 100%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 200px 200px, 100% 100%',
          backgroundPosition: '0 0, 100px 100px, 200px 200px, 0 0',
          filter: 'contrast(1.1) brightness(0.95)',
        };
      case 'white':
        return {
          background: `
            radial-gradient(circle at 20% 80%, rgba(0, 0, 0, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(0, 0, 0, 0.02) 0%, transparent 50%),
            linear-gradient(135deg, #f0f0f0 0%, #f5f5f5 25%, #ebebeb 50%, #f2f2f2 75%, #ededed 100%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 200px 200px, 100% 100%',
          backgroundPosition: '0 0, 100px 100px, 200px 200px, 0 0',
          filter: 'contrast(1.08) brightness(0.70)',
        };
      case 'red':
        return {
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.02) 0%, transparent 50%),
            linear-gradient(135deg, #7f1d1d 0%, #991b1b 25%, #7f1d1d 50%, #8b1538 75%, #7f1d1d 100%)
          `,
          backgroundSize: '400px 400px, 300px 300px, 200px 200px, 100% 100%',
          backgroundPosition: '0 0, 100px 100px, 200px 200px, 0 0',
          filter: 'contrast(1.1) brightness(0.98)',
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
      {/* Matte texture overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 2px,
              rgba(255,255,255,0.01) 2px,
              rgba(255,255,255,0.01) 4px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 2px,
              rgba(0,0,0,0.01) 2px,
              rgba(0,0,0,0.01) 4px
            )
          `,
          backgroundSize: '20px 20px, 20px 20px',
        }}
      />
    </div>
  );
};