import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HomeLayout from '../../components/layout/HomeLayout/HomeLayout';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="h-screen overflow-y-scroll scrollbar-hide">
      <HomeLayout />
    </div>
  );
};

export default Home;
