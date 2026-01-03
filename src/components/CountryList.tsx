// import { useContext } from "react";
// import { CountryContext } from "../context/CountryContext";
// import type { Country } from "../types";
// import { CountryCard } from "./CountryCard";

// export function CountryList() {
//     const {countries} = useContext(CountryContext);


//     return (
//         <>   
//             <div className="country-list">
//                 {countries.map((country: Country) => (
//                     <CountryCard
//                         key={country.name.common}
//                         country={country}                  
//                     />
//                 ))}
//             </div>
//         </>

//     )
// }