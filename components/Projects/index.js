import styled, { keyframes } from "styled-components";

const GoReturn = keyframes`
    2% {
        left: 75%;
    }

    50% {
        left: 0;
    }

    52% {
        left: 0;
    }

    100% {
        left: 75%;
    }
`;

const Video = styled.video`
    max-width: 50%;
    border-radius: 5px;

    @media (max-width: 700px) {
        margin: 50px 0;
        max-width: 90%;
    }
`;

const Project = styled.div`
    width: 90%;
    padding: 60px 0;
    margin: 0 auto;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    h3 {
        font-size: 30px;
        font-family: 'Sura', serif;
        text-align: center;
    }

    h4 {
        font-weight: 500;
        font-size: 25px;
        font-family: 'Sura', serif;
        text-align: center;
        display: block;
        margin-bottom: 15px;
    }

    p {
        font-family: 'Quicksand', sans-serif;
        font-size: 20px;
        text-align: center;
        margin-bottom: 15px;
    }

    ul {
        margin-left: 50px;
        max-width: 50%;
    }

    li {
        font-family: 'Quicksand', sans-serif;
        font-size: 18px;
        margin-bottom: 5px;
    }

    a {
        color: ${props => props.theme.colors.orange};
        cursor: pointer;
        text-decoration: underline;
    }

    @media (max-width: 700px) {
        div {
            flex-direction: column;
        }

        ul {
            margin: 0;
            max-width: 90%;
        }
    }
`;

const Projects = styled.section`
    width: 100%;
    background-color: ${props => props.theme.colors.blue};

    h2 {
        font-family: 'Inria Sans', sans-serif;
        text-align: center;
        width: 100%;
        font-size: 40px;
        color: ${props => props.theme.colors.white};
        position: relative;
        overflow: hidden;
    }

    h2::after {
        content: "";
        height: 3px;
        background-color: ${props => props.theme.colors.light_blue};
        width: 25%;
        position: absolute;
        bottom: 0;
        left: 75%;
        animation-name: ${GoReturn};
        animation-duration: 10s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
`;

export { Projects, Project, Video };
