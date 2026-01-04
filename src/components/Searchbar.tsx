import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export function Searchbar() {
    const newSearchContext = useContext(SearchContext);

    if (!newSearchContext) {
        return (
            <p>Error</p>
        )
    }

    const { onSearch, onFilter } = newSearchContext;

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onFilter(event.target.value);
    }

    return (
        <div id="search-bar">
            <input type="text" id="name-search" role="search" placeholder="🔍    Search for a country..." onChange={handleSearch}/>
            <select id="region-filter" onChange={handleFilter}>
                <option value="">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}