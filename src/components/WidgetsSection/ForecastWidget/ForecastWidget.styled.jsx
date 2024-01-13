import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const ForecastWidgetStyled = styled.section`

    margin-top: 2rem;
    padding: 2rem;
    
    background: ${props => {
        if (props.theme.label === "light") {
            return darken(0.1, props.theme.background);
        }
        return lighten(0.1, props.theme.background);
    }};
    color: ${props => {
        if (props.theme.label === "light") {
            return darken(0.1, props.theme.foreground);
        }
        return lighten(0.1, props.theme.foreground);
    }};
    border-radius: 11px;

    > .weather-forecast__header {
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
        padding-bottom: 1rem;

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

    > .weather-forecast__days {
        margin-top: 1rem;


        > .weather-forecast__day {
            padding: .6rem;
            margin-top: 1.8rem;

            border: 3px double ${props => {
                if (props.theme.label === "light") {
                    return darken(0.2, props.theme.background);
                }
                return lighten(0.2, props.theme.background)
            }};
            border-radius: 11px;

            > .weather-forecast__day-date {
                //text
                text-align: center;
                color: ${props => darken(0, props.theme.foreground)};
                font-size: calc(1rem + 0.3vw);

                // content
                padding-bottom: .6rem;
                border: 0;
                border-bottom: 1px solid ${props => {
                    if (props.theme.label === "light") {
                        return darken(0.2, props.theme.background);
                    }
                    return lighten(0.2, props.theme.background)
                }};
            }

            > .weather-forecast__day-timeframes {

                display: flex;
                flex-flow: row wrap;
                justify-content: center;

                > .weather-forecast__day-timeframe {
                    // content layout
                    display: flex;
                    flex-flow: column nowrap;
                    flex-basis: content;

                    margin: 1rem;
                    padding-bottom: 1rem;

                    // text
                    text-align: center;
                    color: ${props => darken(0, props.theme.foreground)};

                    // decorations
                    padding-top: 0.8rem;
                    border: 0;
                    border-bottom: 1px solid ${props => {
                        if (props.theme.label === "light") {
                            return darken(0.2, props.theme.background);
                        }
                        return lighten(0.2, props.theme.background)
                    }};

                    > .day-timeframe__time {
                        text-align: center;
                        color: ${props => darken(0.4, props.theme.foreground)};
                    }

                    > .day-timeframe__temperature {
                        // text
                        font-size: 1.5rem;
                        text-align: center;

                        // Celsius suffix
                        > span:after {
                            content: "\u2103";
                        }
                    }

                    > .day-timeframe__icon {
                        padding: 1rem 0;

                        //text
                        text-align: center;
                        font-size: calc(3rem + 1vw);
                        color: ${props => darken(0, props.theme.foreground)};
                    }

                    > .day-timeframe__description {
                        
                    }
                }
            }
        }
    }
`;
