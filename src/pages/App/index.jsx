import { Home } from '../Home'
import { AboutUs } from '../AboutUs'
import { DanceHalls } from '../DanceHalls'
import { Gallery } from '../Gallery'
import { Contact } from '../Contact'
import { BuyTicketsPage } from '../BuyTicketsPage'
import { NotFound } from '../NotFound'
import styles from './App.module.css'

function App() {

  return (
    <>
      <h1>React App</h1>
      <Home />
      <AboutUs />
      <DanceHalls />
      <Gallery />
      <Contact />
      <BuyTicketsPage />
      <NotFound />
    </>
  )
}

export default App
