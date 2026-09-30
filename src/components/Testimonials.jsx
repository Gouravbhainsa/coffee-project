import testimonials from "../data/testimonials";

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="testimonials-heading">
        <p className="eyebrow">VOICES OF THE NEIGHBORHOOD</p>
        <h2>Praise & Affection</h2>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.id}>
            <p className="testimonial-source">{item.source}</p>

            <blockquote>
              “{item.review}”
            </blockquote>

            <div className="testimonial-author">
              <div className="author-circle">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4>{item.name}</h4>
                <p>{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;