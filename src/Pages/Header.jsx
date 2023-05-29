// import React from 'react'

// import { UserAuth } from "../Context/AuthContext"

function Header() {

  // const {currentUser,signIn} = UserAuth();
  // const handleLogin= async ()=>
  // {
  //   try {
  //     await signIn();
  //   } catch (error) {
  //     console.log(error);
      
  //   }
  // }
  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello Users</h1>
      <p className="py-6">Lets Get Connected with one another . Lets Meet Online</p>
      <button 
       className="btn btn-primary"
      //  onClick={handleLogin}
      >Login</button>
    </div>
  </div>
</div>
  )
}

export default Header