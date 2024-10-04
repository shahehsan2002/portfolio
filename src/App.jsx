import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Navbar from "./sections/Navbar"

const App = () => {
  return (
    <main className='max-w-7xl mx-auto' >
      <Navbar/>
      <Hero/>
      <Footer/>
    </main>
  )
}

export default App