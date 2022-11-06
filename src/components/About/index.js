import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext.js'
import './index.css'

const darkAboutImg = 'https://i.postimg.cc/4xSfs16V/information-1.png'
const lightAboutImg = 'https://i.postimg.cc/3RDWPczk/information.png'
const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutBackground = isDarkTheme
        ? 'dark-background'
        : 'light-background'
      const aboutImg = isDarkTheme ? lightAboutImg : darkAboutImg
      const aboutText = isDarkTheme ? 'about-light-text' : 'about-dark-text'
      return (
        <>
          <Navbar />
          <div className={`about-container ${aboutBackground}`}>
            <img className="about-img" src={aboutImg} alt="about" />
            <h1 className={aboutText}>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About