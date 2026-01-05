// import { CountryDetail } from "../../components/CountryDetail";
import { useParams, useNavigate } from "react-router-dom"
import { fetchCountryByName } from "../../utils/utils";

export function DetailPage() {
    const { name } = useParams();
    const navigate = useNavigate();
    const country = fetchCountryByName(name);

    if (!country) return (
        <div>
            <h2>Country Detail Page</h2>
            <p>Country not found</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )

    let nativeNameToDisplayObject = country.name.nativeName;
    let nativeNameToDisplayArray = nativeNameToDisplayObject
        ? Object.values(nativeNameToDisplayObject).map((c: any) => c.official)
        : [];
    let nativeNameToDisplay = nativeNameToDisplayArray[0];
    let currenciesToDisplayObject = country.currencies;
    let currenciesToDisplayArray = currenciesToDisplayObject
        ? Object.values(currenciesToDisplayObject).map((c: any) => c.name)
        : [];
    let currenciesToDisplay = currenciesToDisplayArray[0];
    for (let i = 1; i < currenciesToDisplayArray.length; i++) {
        currenciesToDisplay = currenciesToDisplay + ", " + currenciesToDisplayArray[i];
    }
    let topLevelDomainToDisplay = country.tld[0];
    for (let i = 1; i < country.tld.length; i++) {
        topLevelDomainToDisplay = topLevelDomainToDisplay + ", " + country.tld[i];
    }
    let languargesToDisplayObject = country.languages;
    let languagesToDisplayArray = Object.values(languargesToDisplayObject);
    let languagesToDisplay = languagesToDisplayArray[0];
    for (let i = 1; i < languagesToDisplayArray.length; i++) {
        languagesToDisplay = languagesToDisplay + ", " + languagesToDisplayArray[i];
    }

    return (
        <div key={country.name.common}>
            <img src={country.flags.png} alt={country.flags.alt} />
            <div id="display-body">
                <h2 className="card-title">{country.name.common}</h2>
                <div id="text-row">
                    <div>
                        <p className="card-text">Native Name: <span className="text">{nativeNameToDisplay}</span></p>
                        <p className="card-text">Population: <span className="text">{country.population}</span></p>
                        <p className="card-text">Region: <span className="text">{country.region}</span></p>
                        <p className="card-text">Sub Region: <span className="text">{country.subregion}</span></p>
                        <p className="card-text">Capital: <span className="text">{country.capital}</span></p>
                    </div>
                    <div id="second-col">
                        <p className="card-text">Top Level Domain: <span className="text">{topLevelDomainToDisplay}</span></p>
                        <p className="card-text">Currencies: <span className="text">{currenciesToDisplay}</span></p>
                        <p className="card-text">Languages: <span className="text">{languagesToDisplay}</span></p>
                    </div>
                </div>
                <div id="borders">
                    <p className="button-text">Border Countries: </p>
                </div>
            </div>
        </div>
    )
}