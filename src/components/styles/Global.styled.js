import {createGlobalStyle} from 'styled-components';


const GlobalStyles = createGlobalStyle
`
    body{
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        background-color: ${({theme})=> theme.colors.background };
        color: ${({theme})=> theme.colors.text };
        transition: all 300ms ease-out;
    }
    *, *::before,*::after{
        margin: 0;
        padding: 0;
    }
    strong{
        font-weight: 600;
        margin-right: 0.5rem;
        
    }
    p{
        font-weight: 300;
        
    }
    a{
        color: ${({theme})=>theme.colors.text};
        padding-bottom: 0.25rem;
        text-decoration: none;
        border-bottom: dashed 1px  ${({theme})=>theme.colors.text};
        
    }
    a:hover{
        border-bottom: solid 1px  ${({theme})=>theme.colors.text};
    }
    input,
    text-area{
        font-family: 'Poppins', sans-serif;

    }

    ::-webkit-scrollbar {
        width: 9px;
        transition: all 550ms ease-in;

    }
    ::-webkit-scrollbar-thumb {
        background-color:${({theme})=> theme.colors.text };
        border: solid 3.5px ${({theme})=> theme.colors.background };
        border-radius: 100px;
        transition: all 550ms ease-in;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: ${({theme})=> theme.colors.text };
        border: solid 1.5px ${({theme})=> theme.colors.background };
        border-radius: 100px;
    }

`

export default GlobalStyles