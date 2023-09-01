import './App.css'
import { Bannar } from './Components/Bannar'
import { Brand } from './Components/Brand'
import { Contact } from './Components/Contact'
import { Count } from './Components/Count'
import { Extra } from './Components/Extra'
import { Footer } from './Components/Footer'
import { Navber } from './Components/Navber'
import { Plan } from './Components/Plan'
import { Projects } from './Components/Projects'
import { Services } from './Components/Services'
import { Team } from './Components/Team'
import { WhoWe } from './Components/WhoWe'

function App() {


  return (
    <div className='home-container'>
      <div className='container'>
        <div>
          <Navber></Navber>
        </div>
        <Bannar></Bannar>
      </div>
      <WhoWe></WhoWe>
      <Extra></Extra>
      <Services></Services>
      <Count></Count>
      {/* <Projects></Projects>
      <div className='hole-rapper'>
        <Team></Team>
        <Plan></Plan>
      </div>
      <Brand></Brand>
      <Contact></Contact>
      <Footer></Footer> */}
    </div>
  )
}

export default App
