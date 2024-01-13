import styled from 'styled-components';
import { lighten } from 'polished';

export const CitySelectorStyled = styled.div`
    


    /* [class^="city-selector__control"], .city-selector__menu { */
    .city-selector__control, .city-selector__menu {
        background-color: ${props => lighten(0.07, props.theme.background)};
        color: ${props =>props.theme.foreground};
        width: 40%;
    }

    .city-selector__option--is-selected {
        background-color: ${props => lighten(0.2, props.theme.background)};
        color: ${props =>props.theme.foreground};
    }
`;
