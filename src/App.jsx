import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <div style={{height:'100vh'}} className='w-100 d-flex justify-content-center align-items-center'>
      <Counter/>
    </div>
  )
}

export default App
