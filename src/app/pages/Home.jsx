import React from 'react'

const Home = () => {
  return <div className="home">
    <div className="home__content">
      <div className="home__left">
        <h1 className="home_title_firstline">
          The Next <br className="home_text_br1" />{" "}
          <span className="home_text_gradient">
            Generation
          </span>{" "}
        </h1>
      </div>

      <h1 className="home_text_secondline">
          Payment Method.
      </h1>

      <p className="home_text">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs.
      </p>
    </div>
  </div>
}

export default Home