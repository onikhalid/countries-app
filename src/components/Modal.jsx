import React from 'react'
import { StyledModal, StyledFakeModal } from './styles/modal.styled'
import {AiFillCaretDown} from 'react-icons/ai'

export const Modal = ({setModalOpen, nation}) => {
  // keys to be used to get dynamic properties from object
  
  // array for the keys of the langauges property
  let langArray = []
  langArray = Object.keys(nation.languages)
  //  the keys of the currencies property
  let [currencyKey] = Object.keys(nation.currencies)
  //  the keys of the nativeName property
  let nativeArray = []
  nativeArray = Object.keys(nation.name.nativeName)

  return (
    <StyledModal>
        <h4 className='modal-ic'
            onClick={() => setModalOpen(false)}>
          Close<AiFillCaretDown/>     
        </h4>
        <div>
          <img className='modal-image' src={nation.flags.png} alt="country flag" />
          <div className='modal-in'>
            <h1>{nation.name.common}</h1>
            <div className="modal-details">
              <div>
                <p><strong>Official Name: </strong>  {nation.name.official}</p>
                <p><strong>Native Name: </strong> {nativeArray.map((nativeName)=>{
                  return(

                    langArray.length>1?(
                        nation.name.nativeName[nativeName].common  + `,  `
                        
                        ):(
                      nation.name.nativeName[nativeName].common
  
                    )
                  )
                  })}
                </p>
                <p><strong>Capital: </strong>  {nation.capital[0]}</p>
                <p><strong>Population: </strong>  {(nation.population).toLocaleString('en-US')}</p>
                <p><strong>Region:</strong>  {nation.region}</p>
                <p><strong>Sub-region: </strong>  {nation.subregion}</p>
              </div>

              <div>
                <p><strong>Top Level Domain: </strong>  {nation.tld[0]}</p>
                <p><strong>Currencies: </strong>  {nation.currencies[(currencyKey)].name}  ({nation.currencies[(currencyKey)].symbol})</p>
                <p><strong>Languages: </strong>  {langArray.map((language)=>{
                  return(

                    langArray.length>1?(
                      nation.languages[language] + `.  `
                      
                      ):(
                        nation.languages[language]
                        
                        )
                        )
                      })}</p>

                <p><strong>Map: </strong> <a href={nation.maps.googleMaps} target="_blank" rel="noopener noreferrer">{nation.name.common} map</a> </p>
              </div>
            </div>

            <div className="modal-foot">
              
            </div>

          </div>
        </div>


    </StyledModal>
  )
}

export const FakeModal = ({setModalOpen, nation})=>{
  // keys to be used to get dynamic properties from object
  // array for the keys of the langauges property
  let langArray = []
  langArray = Object.keys(nation.languages)
  //  the keys of the currencies property
  let [currencyKey] = Object.keys(nation.currencies)
  //  the keys of the nativeName property
  let nativeArray = []
  nativeArray = Object.keys(nation.name.nativeName)

  return (
    <StyledFakeModal>
        <h4 className='modal-ic'
            onClick={() => setModalOpen(false)}>
          Close<AiFillCaretDown/>     
        </h4>
        <div>
          <img className='modal-image' src={nation.flags.png} alt="country flag" />
          <div className='modal-in'>
            <h1>{nation.name.common}</h1>
            <div className="modal-details">
              <div>
                <p><strong>Official Name: </strong>  {nation.name.official}</p>
                <p><strong>Native Name: </strong> {nativeArray.map((nativeName)=>{
                  return(

                    langArray.length>1?(
                        nation.name.nativeName[nativeName].common  + `,  `
                        
                        ):(
                      nation.name.nativeName[nativeName].common
  
                    )
                  )
                  })}
                </p>
                <p><strong>Capital: </strong>  {nation.capital[0]}</p>
                <p><strong>Population: </strong>  {(nation.population).toLocaleString('en-US')}</p>
                <p><strong>Region:</strong>  {nation.region}</p>
                <p><strong>Sub-region: </strong>  {nation.subregion}</p>
              </div>

              <div>
                <p><strong>Top Level Domain: </strong>  {nation.tld[0]}</p>
                <p><strong>Currencies: </strong>  {nation.currencies[(currencyKey)].name}  ({nation.currencies[(currencyKey)].symbol})</p>
                <p><strong>Languages: </strong>  {langArray.map((language)=>{
                  return(

                    langArray.length>1?(
                      nation.languages[language] + `.  `
                      
                      ):(
                        nation.languages[language]
                        
                        )
                        )
                      })}</p>

                <p><strong>Map: </strong> <a href={nation.maps.googleMaps} target="_blank" rel="noopener noreferrer">{nation.name.common} map</a> </p>
              </div>
            </div>

            <div className="modal-foot">
              
            </div>

          </div>
        </div>


    </StyledFakeModal>
  )
}