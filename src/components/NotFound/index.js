import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext.js'
import './index.css'

const notFoundImg = 'https://i.postimg.cc/j593jL88/404-error.png'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBackground = isDarkTheme
        ? 'dark-background'
        : 'light-background'
      const notFoundText = isDarkTheme
        ? 'not-found-light-text'
        : 'not-found-dark-text'
      const notFoundParaText = isDarkTheme
        ? 'not-found-light-para-text'
        : 'not-found-dark-para-text'
      return (
        <>
          <Navbar />
          <div className={`not-found-container ${notFoundBackground}`}>
            <img className="not-found-img" src={notFoundImg} alt="not found" />
            <h1 className={notFoundText}>Lost Your Way</h1>
            <p className={notFoundParaText}>
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound