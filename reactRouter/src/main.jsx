import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Home from './components/Home/home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import User from './components/User/user.jsx'
import GitFollowes, { getFollowers } from './components/GitFollowers/gitfollowes.jsx'

// const router=createBrowserRouter(
//   [{
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       }, 
//       {
//         path:"/about",
//         element:<About/>
//       }, 
//       {
//         path:"/contact",
//         element:<Contact/>
//       }
//     ]
//   }]
// )

const router=createBrowserRouter(
createRoutesFromElements(
 <Route path='/' element={<App/>}>
  <Route path='' element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='user/:userid' element={<User/>}/>
  <Route loader={getFollowers} path='github' element={<GitFollowes/>}/>
 </Route>
)
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
