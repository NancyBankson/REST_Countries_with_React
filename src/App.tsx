import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Headerbar } from './components/Headerbar'
import { useFetch } from './hooks/useFetch'
import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
import { DetailPage } from './pages/DetailPage/DetailPage'
import { SearchContext } from './context/SearchContext'
import type { Country, Codes, Theme } from './types'
import { ThemeContext } from './context/ThemeContext'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>(countries);
  const [isFetched, setIsFetched] = useState(false);
  const [codes, setCodes] = useState<Codes[]>([]);
  const [codesAreFetched, setCodesAreFetched] = useState(false);
  const [theme, setTheme] = useLocalStorage("theme", "Light");
  const { data: dataCountries, loading: loadingCountries, error: errorCountries } = useFetch<Country[]>("https://restcountries.com/v3.1/all?status=true&fields=name,population,region,capital,flags,subregion,currencies,languages,borders,tld");
  const { data: dataCodes, loading: loadingCodes, error: errorCodes } = useFetch<Codes[]>("https://restcountries.com/v3.1/all?status=true&fields=name,cca3");

  useEffect(() => {
    const rootElement = document.getElementById('root')
    if (theme === "Dark") {
      document.body.classList.add("dark-mode");
      rootElement!.classList.add('dark-mode');
    } else {
      document.body.classList.remove("dark-mode");
      rootElement!.classList.remove('dark-mode');
    }
  }, [theme]);

  if (loadingCountries) {
    return (
      <div className="loading">
        Loading countries...
        {/* <Spinner /> */}
      </div>
    )
  }
  if (errorCountries) {
    return (
      <div>
        {/* <ErrorMessage /> */}
        Error: {errorCountries.message}
      </div>
    )
  }

  if ((dataCountries) && (!isFetched)) {
    setCountries(dataCountries!);
    setIsFetched(true);
    setFilteredCountries(dataCountries!);
  }

  if (loadingCodes) {
    return (
      <div className="loading">
        Loading codes...
        {/* <Spinner /> */}
      </div>
    )
  }
  if (errorCodes) {
    return (
      <div>
        {/* <ErrorMessage /> */}
        Error: {errorCodes.message}
      </div>
    )
  }

  if ((dataCodes) && (!codesAreFetched)) {
    setCodes(dataCodes!);
    setCodesAreFetched(true);
  }

  // Return countries that include search string
  function onSearch(searchValue: string) {
    const filterCountries = countries.filter(country => {
      if (searchValue === "") {
        return country;
      } else if (country.name.common.toLowerCase().includes(searchValue.toLowerCase())) {
        return country;
      }
    })
    setFilteredCountries(filterCountries);
  }

  // Return countries based on filter selector
  function onFilter(filterValue: string) {
    const filterCountries = countries.filter(country => {
      if (filterValue === "") {
        return country;
      } else if (country.region === filterValue) {
        return country;
      }
    })
    setFilteredCountries(filterCountries)
  }

  function toggleTheme() {
    setTheme(prevTheme => (prevTheme === "Light" ? "Dark" : "Light"));
  }

  return (
    <>
      <ThemeContext value={{ theme, toggleTheme }}>
        <SearchContext.Provider value={{ filteredCountries, countries, codes, onSearch, onFilter }}>
          <Headerbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:name" element={<DetailPage />} />
          </Routes>
        </SearchContext.Provider>
      </ThemeContext>

    </>
  )
}

export default App