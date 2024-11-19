import { useState } from 'react';
import { Header } from './components/Header';
import { Profile } from './components/Profile';
import { CustomFooter } from './components/CustomFooter';
import { About } from './components/About';
// import { Skill } from './components/Skill';
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
      {/* <Skill /> */}
      <Spacer />
      <CustomFooter />
    </>
  );
}

export default App;