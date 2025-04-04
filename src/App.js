import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import About from './Components/About';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Portfolio from './Components/Portfolio';
function App() {
    useEffect(() => {
        Aos.init({ once: true, duration: 1000 });
    });
    return (_jsxs("div", { className: 'app', children: [_jsx(Intro, {}), _jsx(Navbar, {}), _jsx(About, {}), _jsx(Portfolio, {}), _jsx(Contact, {}), _jsx(Footer, {})] }));
}
export default App;
