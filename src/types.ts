export interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

export interface Country {
    name: Name;
    flags: Flags;
    currencies: string[];
    capital: string[];
    region: string;
    subregion: string;
    languages: string[];
    borders: string[];
    population: number;
    tld: string[];
    code: string[];
}

export interface Flags {
    png: string;
    svg: string;
    alt: string;
}

export interface Name {
    common: string;
    official: string;
    nativeName: string[];
}

export interface SearchContextType {
    filteredCountries: Country[];
    countries: Country[];
    codes: Codes[];
    onSearch: (searchValue: string) => void;
    onFilter: (filterValue: string) => void;
}

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

export interface Codes {
    cca3: string;
    name: Name;
}

export type Theme =
    "Light" | "Dark";