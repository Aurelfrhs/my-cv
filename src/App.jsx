import { useState } from 'react'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
// import {Footers} from './Components/Footers'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header />
    <Profile />
    {/* <Footers /> */}
    </>
  )
}

export default App