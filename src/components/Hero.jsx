import resimage from "../icons_assets/restauranfood.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned <br />Mediterrarean Restaurant, <br /> focused on traditional
          <br />recepies served with a modern<br /> twist.
        </p>
        <a href="#table" className="btn table">
          Reserve a Table
        </a>
      </div>
      <div className="hero-image">
        <img src={resimage} alt="" />
      </div>
      
    </section>
  );
};

export default Hero;
