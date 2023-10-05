import CountryDetails from "../components/CountryDetails"
import CountryList from "../components/CountryList"
import React, {useState, useEffect} from "react" 
import Population from "../components/Population"

const CountryContainer = () => {
    
    const [countries, setCountries] = useState([])
    const [selectedCountry, setSelectedCountry] = useState(null)
   

    useEffect(() => {
        getCountries()
    }, [])

    const handleCountryClick = (country) => {
        setSelectedCountry(country)
    }
    console.log(selectedCountry)


    const getCountries = () => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then((countries) => setCountries(countries))
    }


    

    const totalPopulation = countries.reduce((accum, country) => accum + country.population, 0)
    console.log(`totespop is:${totalPopulation}`)
    


    return(
        <>
            <h2>Country Container</h2>
            <Population totalPopulation={totalPopulation}/>
            {selectedCountry ? <CountryDetails country={selectedCountry}/> : null}
            <CountryList countries={countries} handleCountryClick={handleCountryClick}/>
            
        </>
    )
}

export default CountryContainer