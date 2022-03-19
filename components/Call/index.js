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

const Call = styled.section`
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
`;

const CallImage = styled.div`
    width: 40%;
    background: url("./img/felipe-laskos.png") center / cover no-repeat;
`;

const CallText = styled.div`
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
`;

const CallAlign = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: baseline;
`;

export { Call, CallImage, CallText, CallAlign };
