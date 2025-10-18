import React, { useState } from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = '' }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const logoPath = `/public/logos/${name.toLowerCase().replace(/[^a-z0-9]/g, '')}.png`;

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (imageError) {
    // Fallback to text if image fails to load
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <span className="text-xs font-medium text-center px-1 opacity-80">
          {name}
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center ${className} relative`}>
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin opacity-50" />
        </div>
      )}
      <img
        src={logoPath}
        alt={name}
        className={`max-w-full max-h-full object-contain transition-opacity duration-300 ${
          imageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onError={handleImageError}
        onLoad={handleImageLoad}
        loading="lazy"
      />
      {imageLoaded && (
        <span className="sr-only">{name}</span>
      )}
    </div>
  );
};