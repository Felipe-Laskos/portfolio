import styled, { keyframes, css } from "styled-components";

const underlined = keyframes`
    0%, 5%{
        transform: translateX(-100%);
    }

    33%, 66% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(100%);
    }
`;

export const StyledCall = styled.section`
    ${(props) => {
        if(props.margin.screenPosition > 200) {
            return css`
                margin-top: 60px;
            `;
        }
    }}
    height: calc(100vh - 60px);
    display: flex;
    background-color: ${props => props.theme.colors.blue};

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const CallImage = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        border-radius: 50%;
        width: 65%;
    }

    @media (max-width: 700px) {
        width: 100%;
        height: 50vh;

        img {
            width: 50%;
        }
    }
`;

export const CallText = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
        padding: 0 5px;
        text-align: center;
        font-size: 50px;
        font-family: 'Inria Sans', sans-serif;
        color: ${props => props.theme.colors.white};
        position: relative;
        overflow: hidden;
    }

    h2.nome {
        margin-bottom: 50px;
    }

    h2.underlined::after {
        content: "";
        height: 5px;
        background-color: ${props => props.theme.colors.light_blue};
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        animation-name: ${underlined};
        animation-duration: 3s;
        animation-iteration-count: infinite;
    }

    @media (max-width: 700px) {
        width: 100%;
        height: 50vh;

        h2 {
            font-size: 40px;
        }
    }
`;

export const CallAlign = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: baseline;
`;