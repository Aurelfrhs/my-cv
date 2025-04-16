import { useEffect } from 'react';
import { Header } from './components/Header';
import { Profile } from './pages/Profile';
import { About } from './pages/About';
import { Skill } from './pages/Skill';
import { Project } from './pages/Project';
import { Footer } from './components/Footer';
import { motion } from 'framer-motion';

const App = () => {
  // Effect yang dijalankan sekali saat halaman pertama kali dimuat
  useEffect(() => {
    // Anda bisa menambahkan efek tambahan lainnya di sini jika perlu
  }, []);

  return (
    <>
      <Header />
      {/* Memberikan animasi smooth untuk munculnya komponen dengan Framer Motion */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        <Profile />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.2 }}
      >
        <About />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Skill />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Project />
      </motion.div>
      <Footer />
    </>
  );
};

export default App;
