import PropTypes from 'prop-types'
import React from 'react'
import mine from '../images/mine.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img
        src={mine}
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          display: 'block',
          borderRadius: '50%',
        }}
      ></img>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Asit Debata</h1>
        <p>
          Hey, I'm a software developer from India.
          <br />
          I can help you build your next product.
          <br />I design, build, operate & sometimes rescue full-stack
          applications.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            About me
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            Resume
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
