import { Link } from "react-router-dom";
import resimage from "../../icons_assets/restauranfood.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned <br />
          Mediterrarean Restaurant, <br /> focused on traditional
          <br />
          recepies served with a modern
          <br /> twist.
        </p>
        <Link path to ="/reservation" className="btn table">
          Reserve a Table
        </Link>
      </div>
      <div className="hero-image">
        <img src={resimage} alt="" />
      </div>
    </section>
  );
};

export default Hero;
