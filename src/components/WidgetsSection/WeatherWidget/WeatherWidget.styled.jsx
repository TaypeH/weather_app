import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const WeatherWidgetStyled = styled.section`
    
    margin: 2rem 0 0 0;
    background: ${props => {
        if (props.theme.label === "light") {
            return darken(0.1, props.theme.background);
        }
        return lighten(0.1, props.theme.background);
    }};
    border-radius: 11px;
    
    > .weather-header {
        // text
        text-align: center;
        color: ${props => darken(0, props.theme.foreground)};

        // content
        border: 0;
        border-bottom: 1px solid ${props => {
            if (props.theme.label === "light") {
                return darken(0.2, props.theme.background);
            }
            return lighten(0.2, props.theme.background)
        }};
        border-radius: 11px 11px 0 0;
        padding: 1rem;
        position: relative;
        top: 11px;
        margin: 11px 11px 0 11px;

        > h4 {
            margin: auto;
            font-size: 1.5rem;
            font-weight: bold;
        }

        > h5 {
            margin: auto;
            font-size: 1.1rem;
            font-weight: normal;
        }
    }

    > .weather-info {
        // text
        color: ${props => darken(0, props.theme.foreground)};

        // border and content
        border-radius: 0 0 10px 10px;
        padding: 1rem;

        > .weather-info__temperature {
            // text
            font-size: 3rem;
            text-align: center;

            // Celsius suffix
            > span:after {
                content: "\u2103";
            }
        }

        > .weather-info__icon {
            margin: 2rem;
            text-align: center;
            font-size: 30vw;
            color: ${props => darken(0, props.theme.foreground)};

            @media only screen and (min-width: 730px) {
                font-size: calc(10rem);
            }
        }

        > .weather-info__description {
            // text
            text-align: center;
            font-size: 1.6rem;
        }

        > .weather-info__maxmin-temperature {
            // text
            text-align: center;
            font-size: 1.4rem;

            // content
            margin-top: 1rem;

            // Celsius suffix
            > span:not(.separator):after {
                content: "\u2103";
            }
        }
    }

    > .wind-info {
        // text
        color: ${props => darken(0, props.theme.foreground)};

        // border and content
        margin-top: 1rem;
        padding-bottom: 1.6rem;

        border: 0;
        border-top: 1px solid ${props => {
            if (props.theme.label === "light") {
                return darken(0.2, props.theme.background);
            }
            return lighten(0.2, props.theme.background)
        }};

        > .wind-info__direction {
            text-align: center;
            font-size: 5rem;
        }

        > .wind-info__speed {
            text-align: center;
            font-size: 1.4rem;
        }
    }
`;
