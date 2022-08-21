import React from "react";
import { useState } from "react";
import {Cards, StyledLoader} from './styles/Card.styled'
import {Modal, FakeModal} from './Modal';
import {FaFlag} from 'react-icons/fa'


export const Card = ({nation})=>{

    const [modalOpen, setModalOpen] = useState(null);
    const[clickedNation, setClickedNation] = useState(nation)
    const checkNation = nation.name.common
    const handleClick = (e)=>{
        setModalOpen(false)
        if(e.target = checkNation){
            setModalOpen(true)
            setClickedNation(nation)
        }

    }




    return(
        <>
        <Cards onClick={handleClick}>
            <img src={nation.flags.png} alt="country flag" />
            <div><h3>{nation.name.common}</h3></div>            
            <div>
                <p><strong>Population:</strong> {(nation.population).toLocaleString('en-US')}</p>
                <p><strong>Region:</strong> {nation.region}</p>
                <p><strong>Capital:</strong> {nation.capital}</p>
            </div>
        </Cards>
        
        {
            
        }
         {modalOpen && <Modal nation={clickedNation} setModalOpen={setModalOpen} />}
         {modalOpen==false && <FakeModal nation={clickedNation} setModalOpen={setModalOpen} />}
        </>
        
    )
}

export const Loader = ()=>{
    return(
        <StyledLoader>
            <div className="info-loader">
                <h3>Loading info...Please wait</h3>
                <div className="progress">
                    <div className="bar"></div>
                </div>
            </div>
        </StyledLoader>
    )
}

export const ErrorMsg = ({setdataIsLoading})=>{
    const kill = setdataIsLoading(false)
    return(
        <div>
            {kill}
            <h2 style={{fontSize: '2rem'}}>Oops...Based on your entry, no country found <FaFlag/> </h2>
        </div>

    )
}