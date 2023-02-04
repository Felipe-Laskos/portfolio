import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${props => props.theme.colors.blue};
    padding: 50px 0;
    text-align: center;
    font-family: 'Niconne',cursive;

    h3 {
        color: ${props => props.theme.colors.white};
        font-size: 50px;
    }

    h4 {
        color: ${props => props.theme.colors.white};
        font-size: 40px;
    }

    a {
        color: ${props => props.theme.colors.white};
        font-size: 40px;
        text-decoration: underline;
        cursor: pointer;
        transition: color 0.25s;
    }

    a:hover {
        color: ${props => props.theme.colors.orange};
    }

    @media (max-width: 700px) {
        h4, a {
            font-size: 30px;
        }
    }

    @media screen and (max-width: 400px) {
        a {
            font-size: 20px;
        }
    }
`;