import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'

function App() {
  // we do this because , if we not do these then we have render header and footer in every  components

  return (
   <>
   <Header/> {/*These remain same*/}
   <Outlet/> {/*There is change occuer*/}
   <Footer/> {/*These remain same*/}
   </>
  )
}   
export default App