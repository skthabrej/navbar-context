import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext.js'
import './index.css'

const darkHomeImg = 'https://i.postimg.cc/VvnrbVFx/home-icon-silhouette.png'
const lightHomeImg = 'https://i.postimg.cc/2SmvnrM2/house.png'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBackground = isDarkTheme ? 'dark-background' : 'light-background'
      const homeImg = isDarkTheme ? lightHomeImg : darkHomeImg
      const homeText = isDarkTheme ? 'home-light-text' : 'home-dark-text'
      return (
        <>
          <Navbar />
          <div className={`home-container ${homeBackground}`}>
            <img className="home-img" src={homeImg} alt="home" />
            <h1 className={homeText}>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home