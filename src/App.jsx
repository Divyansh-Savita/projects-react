import { useState } from 'react'

import './App.css'
import StarRating from './components/star-rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StarRating/>
    </>
  )
}

export default App
