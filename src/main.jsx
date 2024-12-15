import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Home/>
//   },
//   {
//     path:'/signup',
//     element:
//       isSignedUp ? <Navigate to="/" replace /> : <SignUp setIsSignedUp={setIsSignedUp} />
//   }
// ])

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <RouterProvider router={router}/> */}
    <App/>
  </BrowserRouter>
);