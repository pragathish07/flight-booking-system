import '../styles/styles.css'


function Memories() {
  return (
    <section className="memories">
      <div className="section__container memories__container">
        <div className="memories__header">
          <h2 className="section__header">
            Travel to make memories all around the world
          </h2>
          <button className="view__all">View All</button>
        </div>
        <div className="memories__grid">
          <div className="memories__card">
            <span><i className="ri-calendar-2-line"></i></span>
            <h4>Book & relax</h4>
            <p>
              With "Book and Relax," you can sit back, unwind, and enjoy the
              journey while we take care of everything else.
            </p>
          </div>
          <div className="memories__card">
            <span><i className="ri-shield-check-line"></i></span>
            <h4>Smart Checklist</h4>
            <p>
              Introducing Smart Checklist with us, the innovative solution
              revolutionizing the way you travel with our airline.
            </p>
          </div>
          <div className="memories__card">
            <span><i className="ri-bookmark-2-line"></i></span>
            <h4>Save More</h4>
            <p>
              From discounted ticket prices to exclusive promotions and deals,
              we prioritize affordability without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Memories;
