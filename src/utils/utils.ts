import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
// import { useNavigate } from "react-router-dom";
import type { Country } from "../types";

export function fetchCountryByName(name: string | undefined) {
    const countriesContext = useContext(SearchContext);

    if (!countriesContext) {
        return console.log("Error");
    }

    const { countries } = countriesContext;

    // const navigate = useNavigate();
    let returnCountry: Country[] = [];
    returnCountry = countries.filter((country) => {
        if (country.name.common === name) {
            return country;
        }
    });
    return returnCountry[0];
}