import type { Country } from "../../types";
import { useFetch } from "../../hooks/useFetch";
// import { CountryList } from "../../components/CountryList";
import { useState } from "react";
// import { CountryContext } from "../../context/CountryContext";
import { CountryCard } from "../../components/CountryCard";

export function HomePage() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isFetched, setIsFetched] = useState(false);
  const { data, loading, error } = useFetch<Country[]>("https://restcountries.com/v3.1/all?status=true&fields=name,population,region,capital,flags,subregion,currencies,languages,borders,tld");

  // useEffect(() => {
  //   console.log(countries);
  // }, [countries]);


  if (loading) {
    return (
      <div className="loading">
        Loading recipes...
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
  }

  return (
    <>
      <div className="country-list">
        {countries.map((country) => (
          <CountryCard
            key={country.name.common}
            country={country}
          />
        ))}
      </div>
    </>
  )
}