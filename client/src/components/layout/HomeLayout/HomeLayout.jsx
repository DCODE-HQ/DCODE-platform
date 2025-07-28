import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Hero from '../../Hero/Hero';
import Benefits from '../../Benefits/Benefits';
import About from '../../About/About';
import Timeline from '../../Timeline/Timeline';
import Contact from '../../ContactSection/ContactSection';
import Reviews from '../../Reviews/Reviews';
const HomeLayout = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Benefits />
      <About />
      <Timeline />
      <Reviews />
      <Contact />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
