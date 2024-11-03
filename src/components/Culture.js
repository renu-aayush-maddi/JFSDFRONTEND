import React from 'react';
import './Culture.css'; 

function Culture() {
  return (
    <section className="culture-section">
      <div className="hero-content">
        <h2>Explore Indian Culture, Heritage & Monuments</h2>
        <p>Discover the rich history and beauty of India’s most iconic landmarks, cultural traditions, and historical places.</p>
      </div>
      
      <div className="culture-grid">
        <div className="culture-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg" alt="Taj Mahal" className="culture-image" />
          <h3>Taj Mahal</h3>
          <p>The Taj Mahal, a symbol of love, is one of the Seven Wonders of the World, known for its stunning marble architecture.</p>
        </div>
        
        <div className="culture-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Hawa_Mahal_2011.jpg" alt="Hawa Mahal" className="culture-image" />
          <h3>Hawa Mahal</h3>
          <p>Hawa Mahal, the Palace of Winds in Jaipur, Rajasthan, is a unique five-story structure made from red and pink sandstone.</p>
        </div>
        
        <div className="culture-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Kathakali_Performance.jpg" alt="Kathakali Dance" className="culture-image" />
          <h3>Kathakali Dance</h3>
          <p>Kathakali is a classical dance form from Kerala, known for its elaborate costumes, makeup, and expressive performances.</p>
        </div>
        
        <div className="culture-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Kumbh_Mela_Haridwar_2010.jpg" alt="Kumbh Mela" className="culture-image" />
          <h3>Kumbh Mela</h3>
          <p>The Kumbh Mela is one of the largest religious gatherings in the world, celebrated with devotion by millions of pilgrims.</p>
        </div>

        <div className="culture-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Red_Fort.jpg" alt="Red Fort" className="culture-image" />
          <h3>Red Fort</h3>
          <p>The Red Fort in Delhi is a historical fortification, serving as the main residence of Mughal emperors for over 200 years.</p>
        </div>

        <div className="culture-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Rangoli_design.jpg" alt="Rangoli Art" className="culture-image" />
          <h3>Rangoli Art</h3>
          <p>Rangoli is a traditional art form, created using colored powders, flowers, and rice to celebrate festivals across India.</p>
        </div>
      </div>
    </section>
  );
}

export default Culture;
