import { useState } from 'react'

import './App.css'
import StarRating from './components/star-rating'
import LoadMoreData from './components/load-more-data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StarRating/>
    <LoadMoreData/>
    </>
  )
}

export default App
