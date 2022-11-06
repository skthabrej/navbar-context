import './index.css'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext.js'

const lightLogo = 'https://i.postimg.cc/HWh8Y46d/bulb-1.png'
const darkLogo = 'https://i.postimg.cc/1tRVtWx5/bulb.png' 
const lightTheme ='https://i.postimg.cc/66gTJ6QQ/light-mode.png'
const darkTheme = 'https://i.postimg.cc/66gTJ6QQ/light-mode.png'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const logo = isDarkTheme ? darkLogo : lightLogo
      const theme = isDarkTheme ? lightTheme : darkTheme
      const navbarBackground = isDarkTheme ? 'dark-background' : 'light-background'
      const text = isDarkTheme ? 'light-text' : 'dark-text'
      const onChangeTheme = () => {
        toggleTheme()
      }
      return (
        <nav className={navbarBackground}>
          <ul className="navbar-container">
            <li><img className="logo" src={logo} alt="website logo" /></li>
            <li className="home-about-container">
              <Link to="/"><h1 className={text}>Home</h1></Link>
              <Link to="/about"><h1 className={text}>About</h1></Link>
            </li>
            <li>
              <button
                className="theme-button"
                type="button"
                testid="theme"
                onClick={onChangeTheme}
              >
                <img className="theme" src={theme} alt="theme" />
              </button>
            </li>
          </ul>
          <hr />
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar