import NavBar from '../NavBar/NavBar';
import ContactPage from '../../ContactPage/ContactPage';
const ContactLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <NavBar />
      <div className="flex-1 overflow-hidden">
        <ContactPage />
      </div>
    </div>
  );
};
export default ContactLayout;
