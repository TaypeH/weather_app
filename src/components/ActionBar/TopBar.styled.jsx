import styled from 'styled-components';

export const TopBarStyled = styled.div`
    .navbar{
        background-color:${props => props.theme.topBar.background}!important;
        color: ${props => props.theme.topBar.foreground};

        .nav-item{
            margin-right: 10px;
        }
    }
`;
