import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AnimatedShowcase from './components/AnimatedShowcase';
import About from './components/About';
import Academy from './components/Academy';
import Offerings from './components/Offerings';
import SocialShowcase from './components/SocialShowcase';
import Repertoire from './components/Repertoire';
import Gallery from './components/Gallery';
import Awards from './components/Awards';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AnimatedShowcase />
        <About />
        <Academy />
        <Offerings />
        <Repertoire />
        <SocialShowcase />
        <Gallery />
        <Awards />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;