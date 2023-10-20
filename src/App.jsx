import Navbar from "./components/navbar"
import Presentation from "./components/presentation"
import Skills from "./components/skill"

const backgroundStyle = {
  backgroundImage: `url('../public/background.jpg')`,
  width: '100vw',
  height:'100vh',
}

function App() {
  return (
    <div className="background" style={backgroundStyle}>
    <Navbar/>
    <Skills/>
    </div>

  )
}

export default App
