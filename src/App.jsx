import { useState } from 'react';
import { Header } from './components/Header';
import { Profile } from './pages/Profile';
import { About } from './pages/About'
import { Skill } from './pages/Skill';
import { Project } from './pages/Project';
import { Contact } from './pages/Contact'
import { Footer } from './components/Footer';
import { styled } from 'styled-components';

const Spacer = styled.div`
  margin: 20px 0; /* Atur jarak vertikal */
`;

const App = () => {
  const [count, setCount] = useState(0);

  return (  
    <>
      <Header />
      <Spacer />
      <Profile />
      <Spacer />
      <About />
      <Spacer />
      <Spacer />
      <Skill />
      <Spacer />
      <Project />
      <Spacer />
      <Contact />
      <Spacer />
      <Footer />
    </>
  );
}

export default App;