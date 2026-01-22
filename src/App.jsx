import { useState } from 'react'

import './App.css'
import StarRating from './components/star-rating'
import LoadMoreData from './components/load-more-data'
import ImageSlider from './components/image-silder'
import TreeView from './components/tree-view'
import menuData from './components/tree-view/data'
import QRCodeGenerator from './components/qr-code-generator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StarRating/>
    <LoadMoreData/>
    <ImageSlider url={'https://picsum.photos/v2/list'} limit={"10"} page={1} />
    <TreeView menus={menuData}/>
    <QRCodeGenerator/>
    </>
  )
}

export default App
