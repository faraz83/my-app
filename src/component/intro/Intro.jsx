import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h1 className="i-name">faraz kasiri</h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
                <div className="i-title-item">Photographer</div>
                <div className="i-title-item">SEO</div>
                <div className="i-title-item">Writer</div>
              </div>
            </div>
            <p className="i-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing. Necessitatibus
              ab hic sit quod, repellat autem delectus quia facilis, ea
              consequatur unde esse harum itaque iste?
            </p>
          </div>
        <div className="i-down">
          V
        </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;