import { createBrowserRouter } from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import WaitList from '../pages/Waitlist/WaitList';
import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';
import ContactPage from '../pages/Contact/ContactPage';
import TermsOfUse from '../pages/Terms/TermsOfUse';
import PrivacyPolicy from '../pages/Terms/PrivacyPolicy';

export const routes = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <AppLayout />,
  //   children: [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/waitlist',
    element: <WaitList />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/contact',
    element: <ContactPage />
  },
  {
    path: '/terms',
    element: <TermsOfUse />
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />
  }
]);
