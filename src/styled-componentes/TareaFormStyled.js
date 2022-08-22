import styled from 'styled-components'

export const TareaFormStyled = styled.form`
    display:flex;
    flex-direction:column;
    margin:10px auto;
    border: 1px solid black;
    border-radius:5px;
    background-color:#b6c0d3;
    padding:15px;
    font-family: 'Rajdhani', sans-serif;
    font-size:25px;
    @media only screen and (min-width: 320px) and (max-width: 450px) {
        width: 100%;
    }
    @media only screen and (min-width: 451px) and (max-width: 600px) {
        width: 90%;
    }
    @media only screen and (min-width: 601px) and (max-width: 800px) {
        width: 70%;
    }
    @media only screen and (min-width: 801px) and (max-width: 1000px){
        width:40%;
    }
    @media only screen and (min-width: 1001px){
        width:35%;
    }
`