import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Footer from "./sections/Footer"
import Contact from "./sections/Contact"
import About from "./sections/About"
import Clients from "./sections/Clients"

const App = () => {
  return (
    <main className='max-w-7xl mx-auto' >
      <Navbar/>
      <Hero/>
      <About/>
      <Clients/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App