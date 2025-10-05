import React, { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  placeholder?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0xMCA3QzguODk1NDMgNyA4IDcuODk1NDMgOCA5QzggMTAuMTA0NiA4Ljg5NTQzIDExIDEwIDExQzExLjEwNDYgMTEgMTIgMTAuMTA0NiAxMiA5QzEyIDcuODk1NDMgMTEuMTA0NiA3IDEwIDdaIiBmaWxsPSIjOWNhM2FmIi8+CjxwYXRoIGQ9Ik0xNiAxNUw2IDE1VjEzTDkgMTBMMTEgMTJMMTQgOUwxNiAxMVYxNVoiIGZpbGw9IiM5Y2EzYWYiLz4KPC9zdmc+Cg=='
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <img
      ref={imgRef}
      src={isInView ? src : placeholder}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-70'} ${className}`}
      loading={loading}
      onLoad={handleLoad}
      decoding="async"
    />
  );
};

export default LazyImage;