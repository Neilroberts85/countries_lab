const CountryDetails = ({country}) => {
    return(
        <>
        <h5>Country details</h5>
        <li>{country.name.common}{country.flag}</li>
        <p>Capital: {country.capital[0]}</p>
        <p>Population: {country.population}</p>
        <p>Continent: {country.continents}</p>
        <p>{country.languages[0]}</p>
        </>
    )
}

export default CountryDetails