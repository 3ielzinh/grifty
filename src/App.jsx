import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import BabyShaggy from './pages/babyshaggy/BabyShaggy'
import LanguageProvider from './i18n/LanguageProvider'
import LanguageSwitcher from './components/language-switcher/LanguageSwitcher'
import PageMetadata from './components/page-metadata/PageMetadata'

const AppRoutes = () => {
  const location = useLocation()
  const page = location.pathname.startsWith('/baby') ? 'baby' : 'home'

  return (
    <div className={`app-shell app-shell--${page}`}>
      <LanguageSwitcher variant={page} />
      <PageMetadata page={page} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/babyshaggy' element={<BabyShaggy />} />
        <Route path='/baby-shaggy' element={<BabyShaggy />} />
        <Route path='/babyshag' element={<BabyShaggy />} />
      </Routes>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppRoutes />
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
