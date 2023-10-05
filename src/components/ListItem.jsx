// import CountryDetail from "./CountryDetail"

const ListItem = ({country, index, handleCountryClick}) => {
    
    
    
    return(
        <>
            <li onClick={()=> handleCountryClick(country)} key={index}>{country.name.common}{country.flag}</li>
        </>
    )
}

export default ListItem