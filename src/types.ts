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
    onSearch: (searchValue: string) => void;
}