import { useContext } from "react";
import { CountryCard } from "../../components/CountryCard";
import { Searchbar } from "../../components/Searchbar";
import { SearchContext } from "../../context/SearchContext";

export function HomePage() {
  const newCountries = useContext(SearchContext);

  if (!newCountries) {
    return (
      <p>An error occured retrieving countries...</p>
    )
  }

  const { filteredCountries } = newCountries;

  if (!filteredCountries) {
    return (
      <div>
        <p>An error occured retrieving countries...</p>
      </div>
    )
  }

  return (
    <>
      <Searchbar />
      <div id="card-holder" className="dark-mode">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name.common}
            country={country}
          />
        ))}
      </div>
    </>
  )
}