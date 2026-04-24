import { Routes } from 'react-router-dom'
import './App.css'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'
import Home from './pages/Home'

function App() {
  

  return (
    <>
    <Heade />
    <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sobre-nos" element= {<SobreNos />} />
        <Route path="/fale-conosco" element= {<FaleConosco />} />
      </Routes>
    </main>
    <Footer />
    </>
  )
  }


export default App
