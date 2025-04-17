import {createContext, useContext} from 'react'

export const themecontext=createContext({
    themeMode:"light",//variables 
    darkTheme:()=>{},//Methods
    lightTheme:()=>{} 
})

export const ThemeProvider=themecontext.Provider

export const useTheme=()=>{
    return useContext(themecontext)// we dont need to import usecontext or themecontext
    // if we dont do that then we need to do const {themmide ,darktheme,lighttheme}=usecontext(themecontext)
}