import React, { useState } from 'react'
import Login from "./Pages/Login"
import Register from "./Pages/Register"

const App = () => {
  const [page, setPage] = useState("Register")
  return (
    <section className='w-screen flex  mx-auto justify-center items-center h-screen bg-indigo-200'>
    
        {page === "Register"? (
                <Register changePage={setPage}/>
        ):(
                <Login changePage={setPage}/>
        )}

    </section>
  )
}

export default App