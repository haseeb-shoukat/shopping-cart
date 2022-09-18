import { useEffect } from "react";
import backgroundImage from "../images/bg.svg";

const Home = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#home").classList.add("active");
  }, []);

  return (
    <div className="home">
      <div className="home-card">
        <div className="home-heading">BEST ONLINE STORE OF THE YEAR</div>
        <div className="home-quote">
          Style is a way to say who you are without having to speak
        </div>
      </div>
      <img
        className="home-img"
        src="./images/home-cover.jpg"
        alt="cover image"
      />
    </div>
  );
};

export default Home;
