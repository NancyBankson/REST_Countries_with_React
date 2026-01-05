import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import type { Country } from "../types";

export function fetchCountryByName(name: string | undefined) {
    const countriesContext = useContext(SearchContext);

    if (!countriesContext) {
        return ("Error");
    }

    const { countries } = countriesContext;

    let returnCountry: Country[] = [];
    returnCountry = countries.filter((country) => {
        if (country.name.common === name) {
            return country;
        }
    });
    return returnCountry[0];
}