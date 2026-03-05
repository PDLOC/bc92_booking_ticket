import { useState } from 'react'
import './App.css'
import Header from "./Header";
import Footer from "./Footer"
import Content from "./Content"
function App() {

  return (
    <div className="relative max-w-full max-h-full bg-no-repeat bg-cover bg-center bg after:absolute after:inset-0 after:bg-black/50 after:content-['']" >
      <div className="relative z-10">
        <Header />
        <Content />
        <Footer />
      </div>
    </div >
  )
}

export default App
