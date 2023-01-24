import styled, { keyframes } from "styled-components";

const GoReturn = keyframes`
    2% {
        left: 0;
    }

    50% {
        left: 75%;
    }

    52% {
        left: 75%;
    }

    100% {
        left: 0;
    }
`;

const List = styled.div`
    width: 400px;
    margin: 25px;
    color: ${props => props.theme.colors.white};


    h3 {
        font-size: 25px;
        font-family: 'Sura', serif;
        position: relative;
    }

    li {
        font-family: 'Quicksand', sans-serif;
        font-size: 18px;
    }
    
    @media screen and (max-width: 900px) {
        h3 {
            text-align: center;
        }
    }
`;

const About = styled.section`
    padding: 75px 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: ${props => props.theme.colors.blue};

    h2 {
        font-family: 'Inria Sans', sans-serif;
        text-align: center;
        width: 100%;
        font-size: 40px;
        color: ${props => props.theme.colors.white};
        position: relative;
    }

    h2::after {
        content: "";
        height: 3px;
        background-color: ${props => props.theme.colors.light_blue};
        width: 25%;
        position: absolute;
        bottom: 0;
        left: 0;
        animation-name: ${GoReturn};
        animation-duration: 10s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`;

export { About, List };
