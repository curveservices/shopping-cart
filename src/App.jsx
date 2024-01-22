import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider,
Route } from 'react-router-dom'
import RootLayout from './layouts/Rootlayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />} >

    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
