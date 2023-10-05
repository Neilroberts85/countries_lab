import ListItem from "./ListItem"


const CountryList = ({countries, handleCountryClick}) => {
    
    
    const handleClick = (evt) => {
        onCountrySelected(evt.target.value)
    }
    
    const countryItems = countries.map((country, index) => {
        return(
            <ListItem 
            index={index}
            country={country}
            key={index}
            handleClick={handleClick}
            handleCountryClick={handleCountryClick}


            />
        )
    })
    
    
    return(
        <>

        <ul>
            {countryItems}
        </ul>
        </>
    )
}

export default CountryList