import styled, { css } from "styled-components";

const FloatingButton = styled.button`
    color: ${props => props.theme.colors.white};
    cursor: pointer;
    background-color: ${props => props.theme.colors.dark_blue};
    border-radius: 10px;
    padding: 5px;
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
    transition: color 0.25s, border-color 0.25s, bottom 0.5s, transform 0.25s;

    &:hover{
        color: ${props => props.theme.colors.orange};
        transform: translateY(-3px);
    }

    .icon {
        width: 25px;
        font-size: 25px;
    }
`;


export default FloatingButton;