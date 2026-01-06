import type { Country } from "../types"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export function CountryCard({ country }: { country: Country }) {
    const { theme } = useContext(ThemeContext);
    const cardClasses = `card ${(theme === "Dark") ? 'dark-mode' : undefined}`;

    return (
        <Link to={`/country/${country.name.common}`} className="card-link-wrapper">
            <div key={country.name.common} className={cardClasses}>
                <img src={country.flags.png} alt={country.flags.alt}></img>
                <div className="card-body">
                    <h2 className="card-title">{country.name.common}</h2>
                    <p>Population: <span className="text">{country.population}</span></p>
                    <p>Region: <span className="text"></span>{country.region}</p>
                    <p>Capital: <span className="text">{country.capital}</span></p>
                </div>
            </div>
        </Link>
    )
}