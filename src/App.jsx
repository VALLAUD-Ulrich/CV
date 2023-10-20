import Navbar from "./components/navbar"
import Presentation from "./components/presentation"

const backgroundStyle = {
  backgroundImage: `url('../public/background.jpg')`,
  width: '100vw',
  height:'100vh',
}

function App() {
  return (
    <div className="background" style={backgroundStyle}>
    <Navbar/>
    <Presentation/>
    </div>

  )
}

export default App
