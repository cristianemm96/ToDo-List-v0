import styled from "styled-components";


export const ContenedorFlexStyled = styled.div`
    display:flex;
    flex-wrap: wrap;
    margin:auto;
    align-items:center;
    justify-content:center;
    background-color:#b6c0d3;
    min-height:150px;
    overflow:hidden;
    border-radius:10px;
    border: 1px solid black;
    font-family: 'Rajdhani', sans-serif;
    @media only screen and (min-width: 320px) and (max-width: 450px) {
        width: 109vw;
        margin: auto;
    }
    @media only screen and (min-width: 451px) and (max-width: 600px) {
        width: 90%;
    }
    @media only screen and (min-width: 601px) and (max-width: 800px) {
        width: 70%;
    }
    @media only screen and (min-width: 801px) and (max-width: 1000px){
        width:45%;
    }
    @media only screen and (min-width: 1001px){
        width:50%;
    }
`