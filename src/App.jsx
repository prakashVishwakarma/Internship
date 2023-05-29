
import './App.css'
// import Login from './Pages/Login'
import Header from './Pages/Header'
import Navbar from './Component/Navbar'
import ChatRoom from './Pages/ChatRoom'
import { Route, Routes } from 'react-router-dom'
import PrivateChatRoute from './Routes/PrivateChatRoute'
// import { AuthProvider } from './Context/AuthContext'
function App() {


  return (
    <>
      {/* <AuthProvider> */}
       <Navbar/>
     
      <Routes>
      <Route path='/' element= {  <Header/>} />
      <Route path='/chats' element= { <PrivateChatRoute><ChatRoom/></PrivateChatRoute>  } />

 
    </Routes>
      {/* </AuthProvider> */}
      </>
      
         
      
   
  )
}

export default App
