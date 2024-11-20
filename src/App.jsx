import { useState } from 'react';
import { Header } from './components/Header';
import { Profile } from './pages/Profile';
import { Footer } from './components/Footer';
import { Skill } from './pages/Skill';
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
      <Skill />
      <Spacer />
      <Footer />
    </>
  );
}

export default App;