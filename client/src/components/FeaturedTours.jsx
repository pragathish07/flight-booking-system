import React from 'react';
import '../styles/styles.css'


function FeaturedTours() {
  return (
    <section className="section__container tours__container">
      <h2 className="section__header">Featured Tours</h2>
      <div className="tours__grid">
        <div className="tours__card">
          <img src="../assets/tour-1.jpg" alt="tour" />
          <div className="tours__card__content">
            <h4>Dubai</h4>
            <p>Explore the vibrant city of Dubai with our exclusive tour packages.</p>
          </div>
        </div>
        <div className="tours__card">
          <img src="../assets/tour-2.jpg" alt="tour" />
          <div className="tours__card__content">
            <h4>Paris</h4>
            <p>Discover the romantic charm of Paris with our guided tours.</p>
          </div>
        </div>
        <div className="tours__card">
          <img src="../assests/tour-3.jpg" alt="tour" />
          <div className="tours__card__content">
            <h4>Singapore</h4>
            <p>Experience the beauty and culture of Singapore through our tours.</p>
          </div>
        </div>
        <div className="tours__card">
          <img src="../assests/tour-4.jpg" alt="tour" />
          <div className="tours__card__content">
            <h4>Malaysia</h4>
            <p>Explore the diverse landscapes of Malaysia with our guided tours.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedTours;
