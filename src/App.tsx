// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Headerbar } from './components/Headerbar'
import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
// import { CountryContext } from './context/CountryContext'
// import type { Country } from './types'

function App() {
  // const [countries, setCountries] = useState<Country[]>([]);

  return (
    <>
      {/* <CountryContext.Provider value={{ countries }}> */}
        <Headerbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      {/* </CountryContext.Provider> */}
    </>
  )
}

export default App
