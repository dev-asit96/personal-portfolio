import PropTypes from 'prop-types'
import React from 'react'
import work from '../images/work.png'
import resume from '../images/resume.jpg'
import intro from '../images/intro.png'
import JSONData from '../content/mycontent.json'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major" style="text-align:center" >About me</h2>
          <span className="image main">
            <img src={intro} alt="" />
          </span>
          <p>
            I’m a Computer Science major by day, a functional wantrepreneur by
            midnight and a hustler always. If you can’t find me, it’s because
            I’m already cycling, off to a hike, or studying for an exam
          </p>
          <p>
            I am passionate about Latest Technology and Human Psychology
            (though, never studied them formally). A die-hard fan of Steve Jobs.
            I love the way the concept of "work" has evolved over the past
            decades, and hence would love to travel and work together whenever I
            can.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={work} alt="" />
          </span>
          {JSONData.WorkContent}
          <br />
          {JSONData.InternshipsStartLine}
          <ul>
            {JSONData.InternShips.map(item => {
              return (
                <li>
                  <a href={item.link}>{item.name}</a>
                  <br />
                </li>
              )
            })}
          </ul>
          {JSONData.ProjectsStartLine}
          <ul>
            {JSONData.Projects.map(item => {
              return (
                <li>
                  <a href={item.link}>{item.name}</a>
                  <br />
                </li>
              )
            })}
          </ul>

          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <span className="image main">
            <img src={resume} alt="" />
          </span>
          <p>
            <div style={{ display: 'flex' }}>
              <a
                href={
                  'https://drive.google.com/file/d/16jzmW4VYp2tTnOkpmQEUE2YT8JWk4E7M/view?usp=sharing'
                }
              >
                Resume
              </a>
            </div>
            <br></br>I am always open to collaborations with impactful work.
            Feel free to reach out if you want to work together :)
          </p>

          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/asitdebata/"
                className="icon fa-linkedin"
              >
                <span className="label">linkedin</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dev-asit96"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@devasit"
                className="icon fa-medium"
              >
                <span className="label">medium</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/asitdebata"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/asitdebata96"
                className="icon fa-facebook"
              >
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/dev_asit/"
                className="icon fa-instagram"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
            
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
