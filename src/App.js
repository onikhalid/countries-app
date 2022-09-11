import { useState } from 'react';
import { StyledHeader } from './components/styles/Header.styled'
import { ThemeProvider } from 'styled-components';
import { Container } from './components/styles/Container.styled';
import GlobalStyles from './components/styles/Global.styled';
import Main from './components/Main'
import {BiMoon} from 'react-icons/bi'

// Theme Colors
const darkTheme ={
  colors:{
    // (Dark Mode Text & Light Mode Elements): 
    text: 'hsl(0, 0%, 100%)',
    // (Dark Mode Elements): 
    elems: 'hsl(209, 23%, 22%)',
    // (Dark Mode Background): 
    background: 'hsl(207, 26%, 17%)',
  }


}
const lightTheme = {
  colors:{
    // Light Mode Text
    text: 'hsl(200, 15%, 8%)',
    // (Light Mode Input): 
    input: 'hsl(0, 0%, 52%)',
    // (Light Mode Background): 
    background: 'hsl(0, 0%, 98%)',
    elems: 'hsl(0, 0%, 98%)',
  }
}




function App() {
  const[theme, setTheme] = useState("dark")
  const themeControl = ()=>{
    theme === 'light'? setTheme('dark') : setTheme('light')
  }





  return (
    <ThemeProvider theme={theme === 'dark'? darkTheme : lightTheme}>
      <div >
        <GlobalStyles/>

        <StyledHeader>
          <h2>Find Country</h2>
          <h3 onClick={themeControl}><BiMoon/> Theme</h3>
        </StyledHeader>

        <Container>
          <Main/>
        </Container>
      </div>

    </ThemeProvider>
  );
}

export default App;
