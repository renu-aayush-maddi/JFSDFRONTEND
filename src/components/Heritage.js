import React from 'react';
import './Heritage.css'; // Assuming you're using an external CSS file for styling.

function Heritage() {
  return (
    <section id="heritage" className="content-section">
      <h2>Indian Heritage</h2>
      <p>From its ancient architecture to its traditional arts and crafts, India’s heritage is a symbol of its incredible history.</p>

      <div className="heritage-grid">
        <div className="heritage-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Konark_Sun_Temple.jpg" alt="Konark Sun Temple" className="heritage-image" />
          <h3>Konark Sun Temple</h3>
          <p>The Konark Sun Temple, in Odisha, is an architectural marvel dedicated to the Sun God, showcasing India’s ancient architectural brilliance.</p>
        </div>

        <div className="heritage-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Ajanta_Caves.jpg" alt="Ajanta Caves" className="heritage-image" />
          <h3>Ajanta Caves</h3>
          <p>The Ajanta Caves in Maharashtra feature ancient Buddhist rock-cut caves, adorned with paintings and sculptures from centuries ago.</p>
        </div>

        <div className="heritage-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/Meenakshi_Amman_Temple_towers.jpg" alt="Meenakshi Temple" className="heritage-image" />
          <h3>Meenakshi Temple</h3>
          <p>The Meenakshi Temple in Madurai is known for its majestic gopurams (gateway towers) and intricate carvings, celebrating South Indian heritage.</p>
        </div>

        <div className="heritage-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Sanchi_Stupa_%28cropped%29.jpg" alt="Sanchi Stupa" className="heritage-image" />
          <h3>Sanchi Stupa</h3>
          <p>The Sanchi Stupa in Madhya Pradesh is one of India’s oldest stone structures, commemorating Buddhist heritage and Emperor Ashoka’s reign.</p>
        </div>

        <div className="heritage-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Artisan_at_work_in_Rajasthan.jpg" alt="Rajasthani Craft" className="heritage-image" />
          <h3>Rajasthani Craft</h3>
          <p>Rajasthani crafts, from pottery to intricate textiles, represent India’s rich tradition of handicrafts passed down through generations.</p>
        </div>

        <div className="heritage-item">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/55/Woman_in_sari_spinning_yarn%2C_Bara_Bazar%2C_Calcutta.jpg" alt="Traditional Weaving" className="heritage-image" />
          <h3>Traditional Weaving</h3>
          <p>Weaving is an integral part of India’s cultural heritage, with regional styles such as Banarasi, Kanchipuram, and Pashmina being famous globally.</p>
        </div>
      </div>
    </section>
  );
}

export default Heritage;
