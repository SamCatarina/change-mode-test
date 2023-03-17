import styled from 'styled-components'


export const Background = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.image});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

`