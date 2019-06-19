import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    *,
    body{
        color:${props => props.theme.color};
        font-family: Helvetica, Arial, sans-serif;
        box-sizing:border-box;
    }

    a{
        text-decoration: none;
    }

    #root{
        width:100%;
        margin:0 auto;
    }

    a[aria-current="page"]{
        color: #fff;
        background: #6088ff;
        border:1px solid #6088ff;
    }
`

GlobalStyle.defaultProps = {
    theme: {
        color: '#333'
    }
};

export default GlobalStyle;