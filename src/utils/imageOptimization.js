/*
File name: imageOptimization.js
Student's Name: Zahra Maryam
Student ID: 301000279
Date: September 20, 2025
*/

// ===== IMAGE OPTIMIZATION UTILITIES =====

/**
 * Lazy loading image component
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text for accessibility
 * @param {string} className - CSS class name
 */
export const LazyImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        console.error('Image failed to load:', e.target.src);
        e.target.style.display = 'none';
      }}
    />
  );
};

/**
 * Preload critical images
 */
export const preloadImages = (imageUrls) => {
  imageUrls.forEach(url => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = url;
    document.head.appendChild(link);
  });
};

