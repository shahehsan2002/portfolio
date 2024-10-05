import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Footer from "./sections/Footer"
import Contact from "./sections/Contact"

const App = () => {
  return (
    <main className='max-w-7xl mx-auto' >
      <Navbar/>
      <Hero/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App