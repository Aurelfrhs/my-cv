import { useEffect, useState } from "react";
import { Instagram } from "iconsax-react";
import { Github, Linkedin } from "lucide-react";
import Aos from "aos";
import 'aos/dist/aos.css';
import { Alert, Snackbar } from '@mui/material';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    
    // Simulate email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email)) {
      setAlertMessage("Email anda salah");
      setAlertSeverity("error");
      setOpenSnackbar(true);
      return;
    }

    // Handle form submission logic here (e.g., send email)
    console.log('Form submitted:', formData);
    
    // Show success message
    setAlertMessage("Terkirim! Tunggu balasannya!");
    setAlertSeverity("success");
    setOpenSnackbar(true);
    
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    Aos.init(); 
  }, []);

  return (
    <section className="flex flex-col p-8 pt-20 bg-gray-50 dark:bg-gray-900" id="contact">
      <h1 className='font-extrabold text-5xl mb-8 text-center phone:text-4xl tablet:text-5xl' 
          data-aos="fade-up" 
          data-aos-duration="1000">
        Get In Touch
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div data-aos="fade-right" data-aos-duration="1000" className="flex-1">
          <h3 className="text-2xl phone:text-xl tablet:text-2xl text-gray-600 dark:text-gray-400">
            Want to learn more? Feel free to contact us using the information below!
          </h3>
          <h4 className="font-semibold mb-4 phone:text-lg tablet:text-xl text-gray-600 dark:text-gray-400">
            aurelfristian10@gmail.com
          </h4>
        </div>
        <div className='flex flex-row gap-6' data-aos="fade-left" data-aos-duration="1000">
          <a className='p-5 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md' 
             href="https://www.instagram.com/relramdhan10" 
             data-aos="zoom-in" 
             data-aos-duration="1000" 
             data-aos-delay="100">
            <Instagram size={36} className="text-gray-600 dark:text-gray-400" />
          </a>
          <a className='p-5 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md' 
             href="https://github.com/lerr-5534" 
             data-aos="zoom-in" 
             data-aos-duration="1000" 
             data-aos-delay="200">
            <Github size={36} className="text-gray-600 dark:text-gray-400" />
          </a>
          <a className='p-5 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md' 
             href="https://www.linkedin.com/in/" 
             data-aos="zoom-in" 
             data-aos-duration="1000" 
             data-aos-delay="300">
            <Linkedin size={36} className="text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="mt-10 p-6 bg-white rounded-lg shadow-md dark:bg-gray -800" data-aos="fade-up" data-aos-duration="1000">
        <h2 className="text-2xl mb-4 text-gray-800 dark:text-gray-200">Send Us a Message</h2>
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-gray-600 dark:text-gray-400" htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-gray-600 dark:text-gray-400" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label className="mb-2 text-gray-600 dark:text-gray-400" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows="4" 
            className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button 
          type="submit" 
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Send Message
        </button>
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity={alertSeverity} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </section>
  );
}

export default Contact;