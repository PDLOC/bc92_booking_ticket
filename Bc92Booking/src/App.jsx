import { useState } from 'react'
import './App.css'
import Header from "./Header";
import Content from "./Content"
function App() {

  return (
    <div className="relative w-full min-h-screen bg-no-repeat bg-cover bg-fixed bg-center bg after:absolute after:inset-0 after:bg-black/50 after:content-['']" >
      <div className="relative z-10">
        <Header />
        <Content />
      </div>
    </div >
  )
}

export default App
