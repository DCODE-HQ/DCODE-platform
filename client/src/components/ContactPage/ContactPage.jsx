import ContactFormPanel from './ContactFormPanel';
import ContactInfoPanel from './ContactInfoPanel';

const ContactPage = () => {
  return (
    <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
      <ContactInfoPanel />
      <ContactFormPanel />
    </div>
  );
};

export default ContactPage;
