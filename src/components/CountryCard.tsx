import type { Country } from "../types"

export function CountryCard({country}: {country: Country}) {

    return (
        <div key={country.name.common}>
            <img src={country.flags.png} alt={country.flags.alt}></img>
            <div>
                <h2>{country.name.common}</h2>
                <p>Population: <span>{country.population}</span></p>
                <p>Region: <span></span>{country.region}</p>
                <p>Capital: <span>{country.capital}</span></p>
            </div>
        </div>
    )
}