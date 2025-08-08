import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import Logo from '../../ui/Logo/Logo';

export default function NavBar() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionNavigation = (e, sectionId) => {
    e.preventDefault();
    if (location.pathname !== '/home') {
      navigate('/home', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <nav className="flex items-center justify-between px-16 py-4 mt-4 bg-[121212]">
      <Logo />

      <div className="hidden md:flex items-center space-x-6">
        {['Home', 'About', 'Timeline', 'Contact'].map(link => {
          if (link === 'About' || link === 'Timeline') {
            return (
              <a
                key={link}
                href={`/#${link.toLowerCase()}`}
                onClick={e => handleSectionNavigation(e, link.toLowerCase())}
                className="relative text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-lime-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link}
              </a>
            );
          }

          return (
            <Link
              key={link}
              to={`/${link.toLowerCase()}`}
              className="relative text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-lime-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {link}
            </Link>
          );
        })}
        <Button asChild variant="outline">
          <Link to="/">Login</Link>
        </Button>
      </div>

      <div className="md:hidden">
        <span className="text-white">☰</span>
      </div>
    </nav>
  );
}
