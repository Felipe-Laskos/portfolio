import styled from 'styled-components';

export const SwitcherContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left: 30px;
    font-family: sans-serif;
    font-size: 14px;
    color: ${props => props.theme.colors.white};

    span {
        margin: 0 5px;
        opacity: 0.7;
    }
`;

export const LangButton = styled.button`
    background: none;
    border: none;
    color: ${props => props.active ? props.theme.colors.orange : props.theme.colors.white};
    font-weight: ${props => props.active ? 'bold' : 'normal'};
    font-size: 14px;
    cursor: pointer;
    padding: 5px 8px;
    border-radius: 4px;
    transition: color 0.25s, background-color 0.25s;

    &:hover {
        color: ${props => props.theme.colors.orange};
        background-color: rgba(255, 255, 255, 0.1);
    }
`;
