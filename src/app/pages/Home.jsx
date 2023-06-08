import React from 'react'
import FormattedMessage from "../components/FormattedMessage";
import robot from "../../assets/png/robot.png";

const Home = () => {
  return <div className="home">
    <div className="home__content">
      <div className="home__left">
        <h1 className="home__title">
          <FormattedMessage id='home.title.firstRow' /><br />
          <span className="home__title-highlight">
            <FormattedMessage id='home.title.secondHighlight' />
          </span>
          <br />
          <FormattedMessage id='home.title.thirdRow' />
        </h1>
        <p className="home__text">
          <FormattedMessage id='home.text.firstRow' /><br />
          <FormattedMessage id='home.text.secondRow' />
        </p>
      </div>

      <div className="home__right">
        <img src={robot} alt="first_image" className="home__image" />
        {/* <div className="home__image-background" /> */}
        <div className="home__image-background-1" />
        <div className="home__image-background-2" />
        <div className="home__image-background-3" />
      </div>
    </div>
  </div>
}

export default Home