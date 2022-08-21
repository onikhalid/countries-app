import { useState, useEffect } from 'react'
import {Search} from './styles/Search.styled'
import { CardContainer } from './styles/Card.styled';
import { Wrapper } from './styles/Container.styled';
import {BiSearch} from 'react-icons/bi'
import {Card, Loader, ErrorMsg} from './Card'





const Main = () => {

    // set initial search parameter to 'a'
    useEffect(()=>{searchCountries('a')}, [])


    // inputing  search value and clicking lens icon to search
    const[searchWord, setsearchWord] = useState('')
    // search countries on press Enter key
    const EnterKey = (e)=>{
        if (e.key === 'Enter') {
            searchCountries(searchWord)
        }
    }
    // show loading screen while API call awaits result
    const[dataIsLoading, setdataIsLoading] = useState(false)
    // Make call to API to search inputed word
    const searchCountries = async(countryName)=>{
        setdataIsLoading(true)
        const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        const data = await response.json()
        setCountries(data)      
        setdataIsLoading(false)
    }
    // array of countries to display after API search
    const[countries, setCountries] = useState([])
    // Sort result alphabetically
    if(countries.length>0){
        countries.sort((a, b) => (a.name.common > b.name.common) ? 1 : ((b.name.common > a.name.common) ? -1 : 0))
    }

    

  return (
    <Wrapper>
        <Search>
            <input 
                placeholder="Search for countries" 
                value={searchWord}
                onChange={(e)=>setsearchWord(e.target.value) }
                onKeyDown={EnterKey}
                />
            <BiSearch 
                onClick={()=>searchCountries(searchWord)}
            />
        </Search>

        {
             countries.length>0?(
                <CardContainer>
                    {dataIsLoading && <Loader/>} 
                    {countries.map((nation)=> (
                        <Card 
                            nation = {nation}
                            key = {nation.name.common}
                        />
                    ))}
                </CardContainer>
            ) : (
                <CardContainer>
                    <ErrorMsg setdataIsLoading={setdataIsLoading}/>
                </CardContainer>

            )
            
        }

    </Wrapper>
  )
}

export default Main