import React from 'react'
import robot from "../../assets/png/robot.png";

const Home = () => {
  return <div className="home">
    <div className="home__content">
      <div className="home__left">
        <h1 className="home__title">
          The Next <br className="home__title-br" />{" "}
          <span className="home__title-highlight">
            Generation
          </span>{" "}
        </h1>
        <h1 className="home__title-thirdline">
          Payment Method.
        </h1>
        <p className="home__text">
          Our team of experts uses a methodology <br className="home_text_br" />{" "}
          to identify the credit cards most likely to fit your needs.
        </p>
      </div>

      <div className="home__right">
        <img src={robot} alt="billing" className="home__main-image" />

        {/* gradient start */}
        <div className="" />
        <div className="" />
        <div className="" />
        {/* gradient end */}
      </div>
    </div>
  </div>
}

export default Home