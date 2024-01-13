import styled from 'styled-components';

export const AlertStyled = styled.div`
    background-color: ${props =>props.theme.background};
    color: ${props => props.theme.foreground};
    padding: 5px;
    border: 1px solid #000;
`;
