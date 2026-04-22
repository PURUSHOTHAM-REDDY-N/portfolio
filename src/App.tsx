import About from './Components/About'
import Intro from './Components/Intro'
import Navbar from './Components/Navbar'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Portfolio from './Components/Portfolio'

function App() {
    useEffect(() => {
        Aos.init({ once: true, duration: 1000 })
    })
    return (
        <div className='app'>
            <Intro />
            <Navbar />
            
            <About />
            <div className='flex my-5 content-center justify-center'>
                                <img className='cursor-pointer' onClick={()=>window.open('https://www.upwork.com/freelancers/purushothamr3', '_blank')} src={"/images/upwork.png"}/>
                            </div>
                            <div className='flex justify-center mt-5 mb-10'>
                                <button onClick={()=>window.open('https://www.upwork.com/freelancers/purushothamr3', '_blank')} className='rounded p-2 cursor-pointer text-white bg-green-600 fill-amber-300'>Hire me on Upwork 😁</button>
                            </div>
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
