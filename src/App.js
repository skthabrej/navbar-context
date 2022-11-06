import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './context/ThemeContext.js'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: this.toggleTheme,
        }}
      >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>
    )
  }
}

export default App