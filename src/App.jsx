import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BabyShaggy from './pages/babyshaggy/BabyShaggy'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/babyshaggy' element={<BabyShaggy />} />
        <Route path='/baby-shaggy' element={<BabyShaggy />} />
        <Route path='/babyshag' element={<BabyShaggy />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
