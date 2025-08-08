import ContactFormPanel from './ContactFormPanel';
import ContactInfoPanel from './ContactInfoPanel';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center md:flex-row  flex-1 min-h-full px-4 sm:px-6 md:px-8">
      <ContactInfoPanel />
      <ContactFormPanel />
    </div>
  );
};

export default ContactPage;
