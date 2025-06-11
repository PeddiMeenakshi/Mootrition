import React from 'react';
import './BackgroundGrid.css';

const baseImages = [
  '/images/cow1.jpg',
  '/images/c2.jpg',
  '/images/c3.jpg',
  '/images/c4.jpg',
  '/images/c5.jpg',
  '/images/c6.jpg',
  '/images/c7.jpg',
  '/images/c8.jpg',
  '/images/c9.jpg',
  '/images/c10.jpg',
  '/images/c11.jpg',
  '/images/c12.jpg',
];

const repeatedImages = Array.from({ length: 100 }, (_, i) => baseImages[i % baseImages.length]);

const BackgroundGrid = () => {
  return (
    <div className="background-container">
      <div className="background-grid">
        {repeatedImages.map((img, idx) => (
          <img key={idx} src={img} alt="Grid" className="grid-image" />
        ))}
      </div>
      <div className="background-overlay"></div>
    </div>
  );
};

export default BackgroundGrid;
