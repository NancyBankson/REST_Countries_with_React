import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Headerbar } from './components/Headerbar'
import { useFetch } from './hooks/useFetch'
import './App.css'
import { HomePage } from './pages/HomePage/HomePage'
import { DetailPage } from './pages/DetailPage/DetailPage'
import { SearchContext } from './context/SearchContext'
import type { Country } from './types'

function App() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>(countries);
  const [isFetched, setIsFetched] = useState(false);
  const { data, loading, error } = useFetch<Country[]>("https://restcountries.com/v3.1/all?status=true&fields=name,population,region,capital,flags,subregion,currencies,languages,borders,tld");

  if (loading) {
    return (
      <div className="loading">
        Loading countries...
        {/* <Spinner /> */}
      </div>
    )
  }
  if (error) {
    return (
      <div>
        {/* <ErrorMessage /> */}
        Error: {error.message}
      </div>
    )
  }

  if ((data) && (!isFetched)) {
    setCountries(data!);
    setIsFetched(true);
    setFilteredCountries(data!);
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

  return (
    <>
      <SearchContext.Provider value={{ filteredCountries, countries, onSearch, onFilter }}>
        <Headerbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<DetailPage />} />
        </Routes>
      </SearchContext.Provider>
    </>
  )
}

export default App