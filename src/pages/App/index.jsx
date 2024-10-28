import { useRoutes, BrowserRouter } from 'react-router-dom'
import { Home } from '../Home'
import { AboutUs } from '../AboutUs'
import { DanceHalls } from '../DanceHalls'
import { Gallery } from '../Gallery'
import { Contact } from '../Contact'
import { BuyTicketsPage } from '../BuyTicketsPage'
import { NotFound } from '../NotFound'
import { Navbar } from '../../components/Navbar'
import { Layout } from '../../components/Layout'
import { useState } from 'react'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/nosotros', element: <AboutUs /> },
    { path: '/salas', element: <DanceHalls /> },
    { path: '/galeria', element: <Gallery /> },
    { path: '/contacto', element: <Contact /> },
    { path: '/compra-ticket', element: <BuyTicketsPage /> },
    { path: '/*', element: <NotFound /> },
  ]);

  return routes;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
