import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.color};
        transition: all .5s ease
    }
`

export const LightTheme = {
    body: '#f9f6ef',
    color: '#111'
}

export const DarkTheme = {
    body: '#111',
    color: '#f9f6ef'
}
