import Entanglement from './components/Entanglement'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Music from './components/Music/Music'
import About from './components/About'
import DaVinciCode from './components/DaVinciCode'
import EPK from './components/EPK'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Entanglement />
      <Nav />
      <main>
        <Hero />
        <Music />
        <About />
        <DaVinciCode />
        <EPK />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
