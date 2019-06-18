import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *,
    body{
        color:${props => props.theme.color};
    }

    a{
        text-decoration: none;
    }

    #root{
        width:100%;
        max-width:640px;
        margin:0 auto;
    }
`

GlobalStyle.defaultProps = {
    theme: {
        color: '#333'
    }
};

export default GlobalStyle;