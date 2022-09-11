import styled from "styled-components";

export const CardContainer = styled.div
`
    display: flex;
    flex-wrap: wrap;
    gap: 3.5rem;
    justify-content: center;
    transition: all 350ms ease-in-out;

`
export const Cards = styled.div
`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: min-content;
    background-color: ${({theme})=> theme.colors.elems };
    padding-bottom: 2rem;
    border-radius: 0.5rem;
    cursor: pointer;

    overflow: hdden;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    transition: all 300ms ease-out;

    
    img{
        border-radius: 0.5rem 0.5rem 0 0;
        aspect-ratio: 16 / 10;
        max-width: 240px;
    }

    & > div{
        padding-inline: 1.5rem;
        
        p{
            margin-bottom: 0.15rem;
            font-weight: 300;

        }
    }

    


    &:hover{
        transform: scale(0.95)
    }
`

export const StyledLoader = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 30%;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 200000000;

    background-color:  ${({theme})=> theme.colors.background };
    .info-loader{
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        top: 25%;
        margin: 0 auto;

    }
    .progress {
        width: 30vw;
        max-width: 500px;
        height: 7.5px;
        background-color:  ${({theme})=> theme.colors.text };
        border-radius: 50px;
    }
    .progress .bar {
        width: 0%;
        height: 100%;
        border-radius: 50px;
        background-color:  ${({theme})=> theme.colors.background };
        border: solid 1px ${({theme})=> theme.colors.text };
        animation: load 1250ms ease-out forwards infinite ;
    }
    @keyframes load {
    0%{
      width: 0%;
    }
    100%{
      width: 100%;
    }
}

`