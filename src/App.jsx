import './App.css'
import { useState } from 'react'
import { Background } from './components/Background.style'
import { MainComponent } from './components/MainComponent.style'
import { Elements } from './components/Elements.style'
import { Button } from './components/Button.style'
import day from './assets/day.jpg'
import night from './assets/night.jpg'
import moon from './assets/moon.png'
import sun from './assets/sun.png'

function App() {

  const [logo, setLogo] = useState(sun);
  const [back, setBack] = useState(day);
  const [mode, setMode] = useState("light");


  function change(){

    return(
      setLogo((logo == sun) ? moon : sun), setBack((back == day)?night:day),
      setMode((mode=="light")?"dark":"light")
      )

  }

  return (

    <Background image={back}>

    <MainComponent>
    <Elements>
      <h1>you are on {mode} mode</h1>
      <img src={logo} alt="logo" />
      <h3>you can change by clicking in the button below</h3>
      <Button onClick={change}>Click here</Button>
    </Elements>
    </MainComponent>
      
    </Background>

  )
}

export default App
