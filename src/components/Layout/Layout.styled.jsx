import styled from 'styled-components';
import { darken, lighten } from 'polished';


export const LayoutStyled = styled.div`
    
    .page {
        min-height: 100vh;
        padding-bottom: 2rem;
        background: ${props => props.theme.background};

        .container-fluid {
            
            width: calc(100vw - 2*2rem);
            margin: auto;

            > section {
                box-shadow: inset 0 0 8px ${props => {
                    if (props.theme.label === "light") {
                        return darken(0.5, props.theme.background)
                    }

                    return lighten(0.5, props.theme.background)
                }};
            }
            
            @media only screen and (min-width: 730px) {
                display: block;
                max-width: 60rem;
            }
        }
    }
`;
