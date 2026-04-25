import { Route, Routes } from 'react-router-dom'
import './App.css'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/sobre-nos" element= {<SobreNos />} />
          <Route path="/fale-conosco" element= {<FaleConosco />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}


export default App;
