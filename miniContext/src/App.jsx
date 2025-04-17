import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import LoginUser from './loginUser'
import UserProfile from './userProfile'
import ThemeBtn from './components/themebtn'
import Card from './components/card'
import { ThemeProvider } from './context/themecontext'

function App() {
  const [themeMode, setthememode] =useState("light");
  const darktheme=()=>{
    setthememode("dark");
  }
  const lighttheme=()=>{
    setthememode("light");
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark","light")
    document.querySelector('html').classList.add(themeMode)
},[themeMode])

  return (
    <ThemeProvider value={{themeMode,darktheme,lighttheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
    </ThemeProvider>
  )
}

export default App
