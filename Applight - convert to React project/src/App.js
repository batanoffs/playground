import Navigation from './components/Navbar';
import Banner from './components/Banner';
import About from './components/About';
import Video from './components/Video';
import Features from './components/Features';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Faq from './components/FAQ';
import Contact from './components/Contact';
import Download from './components/Download';
import './css/App.css';
import './css/animate.css';
import { Footer } from './components/Footer';

function App(){
    return (
      <div className="App">            
        <Navigation/>        
        <Banner/>     
        <About/>
        <Video/>
        <Features/>
        <Team/>
        <Testimonials/>
        <Faq/>
        <Contact/>
        <Download/>
        <Footer/>
      </div>
    )
}

export default App;

