import './App.css'

// Components
import Header from './components/Header/Header'
import SideBar from './components/SideBar/SideBar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <SideBar className="sideBar" />
      <Main className="main" />
      <Footer className="footer" />
    </div>
  )
}

export default App
