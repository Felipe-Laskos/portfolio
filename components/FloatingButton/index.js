import styled, { css } from "styled-components";

const FloatingButton = styled.button`
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 50%;
    padding: 5px 8px;
    border: none;
    position: fixed;
    ${(props) => {
        if(props.show.screenPosition > props.show.screenHeight) {
            return css`
                bottom: 10px;
            `;
        }else {
            return css`
                bottom: -50px;
            `;
        }
    }}
    right: 10px;
    transition: color 0.25s, border-color 0.25s, bottom 0.5s;

    &:hover{
        color: ${props => props.theme.colors.orange};
    }

    .icon {
        width: 20px;
    }
`;


export default FloatingButton;