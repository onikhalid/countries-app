import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 85%;
    margin: 0 auto;
    
    @media (max-width: 700px) {
        width: 90%;
        
    }
`
export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5vh;
    margin-bottom: 7.5vh;
`