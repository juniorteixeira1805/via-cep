import {createGlobalStyle} from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export default createGlobalStyle`
    *{
        font-family: Helvetica;
        margin: 0;
        padding:0;
        outline: 0;
        box-sizing: border-box;
    }
    *:focus {
        outline: 0;
    }
    html, body, #root {
        height: 100%;
    }
    body {
        -webkit-font-smoothing: antialiased;
        background: #ecf4e8;
    }
    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
    }
`