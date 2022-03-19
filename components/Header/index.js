import styled, { css } from "styled-components";

const Header = styled.header`
    z-index: 3;
    ${(props) => {
        /*
        if(props.fixed) {
            return css`
                top: -60px !important;
                transform: translateY(100%);
                position: fixed;
                background-color: ${props => props.theme.colors.dark_blue};
            `;
        }else {
            return css`
                top: 0 !important;
                transform: translateY(0);
                position: static;
                background-color: ${props => props.theme.colors.blue};
            `;
        }
        */
        if(props.fixed.screenPosition > props.fixed.screenHeight) {
            return css`
                top: -60px !important;
                transform: translateY(100%);
                position: fixed;
                background-color: ${props => props.theme.colors.dark_blue};
            `;
        }else if(props.fixed.screenPosition > 200) {
            return css`
                top: -60px !important;
                transform: translateY(0);
                position: fixed;
                background-color: ${props => props.theme.colors.dark_blue};
            `;
        }else {
            return css`
                top: 0 !important;
                transform: translateY(0);
                position: static;
                background-color: ${props => props.theme.colors.blue};
            `;
        }
    }}
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    color: ${props => props.theme.colors.white};
    font-family: 'Niconne', cursive;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.5s, background-color 0.5s;

    h2 {
        font-size: 40px;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

export default Header;
