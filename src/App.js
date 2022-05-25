import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Purchase from './Pages/Purchase/Purchase';
import Headers from '../src/Shared/Headers'
import Footer from './Shared/Footer';
import Register from './Pages/Login/Register';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
function App() {
  return (
    <div>
      <Headers></Headers>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase/:_id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/myOrders' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard>
            <Route index element={<MyOrders></MyOrders>}></Route>
          </Dashboard>
        </RequireAuth>}>

        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
