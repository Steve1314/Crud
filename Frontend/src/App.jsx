import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Users from './Users'
import Createuser from './Createuser'
import UpdateUser from './UpdateUser'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Users/>}></Route>
      <Route path='/create' element={<Createuser/>}></Route>
      <Route path='/update/:id' element={<UpdateUser/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
