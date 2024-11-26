import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

export const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className='flex flex-col items-center justify-center p-10 min-h-screen w-full' id='about'>
      <h1 className='font-extrabold text-4xl mb-5 text-center' data-aos="fade-up" data-aos-offset="400" data-aos-easing="ease-in-sine">About Me</h1>
      <div className='flex flex-col md:flex-row justify-center items-center w-full gap-10'>
        <div className='flex justify-center items-center w-full md:w-1/2' data-aos="fade-right" data-aos-offset="500" data-aos-easing="ease-in-sine">
          {/* <img src="/path/to/your/image.jpg" alt="Aurel" className="rounded-full w-40 h-40 object-cover" /> */}
        </div>
        <div className='bg-white text-black p-5 rounded-lg flex items-center justify-center w-full md:w-1/2' data-aos="fade-left" data-aos-offset="500" data-aos-easing="ease-in-sine">
          <p className='text-lg text-center'>
            Hallo Semua, saya <span className='font-bold text-blue-600'>Aurel Fristian Ramdhani Hatorangan Simanjuntak</span>, seorang pelajar SMK dari Bandung, Jawa Barat, yang bercita-cita menjadi back-end developer dan mobile developer profesional. 
            Saya sangat mencintai dunia desain dan coding, dan selalu bersemangat menciptakan karya yang menarik secara visual. 
            Keinginan saya adalah menjadi ahli di bidang <span className='font-bold text-blue-600'>back-end development, mobile development, dan UI/UX</span>, 
            sehingga dapat menghubungkan kreativitas desain dengan pengalaman pengguna yang optimal di berbagai platform.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;