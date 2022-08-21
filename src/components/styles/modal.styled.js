import styled, {css} from "styled-components";


const SharedStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: min(10vh, 2rem);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-x: hidden;
    padding: 5rem;
    background-color:  ${({theme})=> theme.colors.background };
    color: ${({theme})=> theme.colors.text };
    z-index: 100000;
    box-shadow: none !important;
    margin: 0 auto;
    font-size: 17px;
    &::-webkit-scrollbar{
        display: none !important;
    }

    > div{
        display: flex;
        gap: 3rem;
        align-items: center;
        width:100%;
        justify-content: space-around;
        padding: 1rem;
    }

    
    
    .modal-ic{
        cursor: pointer;
        color:  ${({theme})=> theme.colors.text };
        margin-bottom: 1.5rem;
    }
    .modal-ic svg {
        font-size: 2rem !important;
        animation: dance 550ms ease-out forwards alternate infinite;
    }
    
    
    .modal-image{
        width: 40%;
        max-width: 700px;
        aspect-ratio: 15/10;
        border-radius: 0.5rem;
        box-shadow: 1.5px 1.5px 5px rgba(0,0,0,0.15);
    }

    .modal-details{
        display: flex;
        gap: 5rem;
    }
    p{
        margin-bottom: 0.125rem;    
    }
    
    
    
    
    @media (max-width: 1024px) {
        flex-direction: column;
        padding: 2rem;
        
        > div{
            flex-direction: column;
            gap: 3rem;
        }
        
        .modal-image{
            width: 80%;
            max-width: 350px;
            border-radius: 0.5rem;
        }
        .modal-details{
            flex-direction: column;
            gap:1rem;
        }
    }


    @keyframes goUp {
       0% {
            transform: translateY(100%)
        }
        
       100% {
            transform: translateY(0%)
        }
    }

    @keyframes goDown {
       0% {
            transform: translateY(0%)
        }
        
       100% {
            transform: translateY(100%)
        }
    }

    @keyframes dance {
       0% {
            transform: translateY(0%)
        }
        
       100% {
            transform: translateY(30%)
        }
    }

`

export const StyledModal = styled.div`
    ${SharedStyles}
    animation: goUp 350ms ease-in-out forwards alternate;

`
export const StyledFakeModal = styled.div`
    ${SharedStyles}
    animation: goDown 350ms ease-in-out forwards alternate;

`

