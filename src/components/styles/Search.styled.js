import styled from "styled-components";


export const Search = styled.div`
    
    width: 60%;
    margin: 4rem 0 2rem;
    margin-top: 5vh;
    padding: 0.75rem 1.5rem;
    border-radius: 1.5rem;
    
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${({theme})=> theme.colors.elems};
    box-shadow: 2px 2px 8px rgba(0,0,0,0.1);

    
    input {
        flex: 1;
        border: none;
        font-family: var(--font-raleway);
        font-size: 1.5rem;
        font-weight: 500;
        padding-right: 1rem;
        width: 100%;
        
        outline: none;
        background: ${({theme})=> theme.colors.elems};
        color: #a1a1a1;
    }
    
    & > :nth-child(2){
        font-size: 1.75rem;
        cursor: pointer;
    }
    
    
    @media (max-width: 700px) {
        font-size: 1rem;
        width: 85%;
        margin: 0 auto;       
        margin-top: 5vh;
        padding: 0.35rem 1rem;
        
        input {
            font-size: 1rem;
        }
    }
`