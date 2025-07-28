import { createBrowserRouter } from 'react-router-dom';
import Signup from '../pages/Signup/Signup';
import WaitList from '../pages/Waitlist/WaitList';
import Home from '../pages/Home/Home';
import Dashboard from '../pages/Dashboard/Dashboard';
import Contact from '../pages/Contact/Contact';

export const routes = createBrowserRouter([
  // {
  //   path: '/',
  //   element: <AppLayout />,
  //   children: [
  {
    path: '/',
    element: <WaitList />
  },
  {
    path: '/home',
    element: <Home />
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
    element: <Contact />
  }
]);
