import type { Country } from "../types"

export function CountryCard({country}: {country: Country}) {

    return (
        <div key={country.name.common} className="card">
            <img src={country.flags.png} alt={country.flags.alt}></img>
            <div className="card-body">
                <h2 className="card-title">{country.name.common}</h2>
                <p>Population: <span className="text">{country.population}</span></p>
                <p>Region: <span className="text"></span>{country.region}</p>
                <p>Capital: <span className="text">{country.capital}</span></p>
            </div>
        </div>
    )
}