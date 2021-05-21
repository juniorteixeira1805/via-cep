import styled, { keyframes } from 'styled-components'

import { darken } from 'polished'

const DeCimaParaBaixo = keyframes`
    from{
        opacity: 0;
        transform: translateY(-70px)
    }
    to {
        opacity: 1;
        transform: translateY(0)
    }
`


export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Content = styled.div`
    animation: ${DeCimaParaBaixo} 1.7s;
    height: 100%;
    width: 315px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    
    form {
        display: flex;
        flex-direction: column;
        margin-top: 30px;
    }

    input {
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color black;
        margin: 0 0 10px;
        @media(max-width: 800px) {
            font-size:16px;
            height: 40px;
        }
        &::placeholder {
            color: black;
        }
    }
    button {
        padding: 0 10px;
        margin: 5px 0 0;
        height: 36px;
        background: #3b9eff;
        font-weight: bold;
        color #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.3s;
        @media(max-width: 800px) {
            font-size:14px;
            height: 40px;
        }
        &:hover {
            background: ${darken(0.05, '#0885ff')}
        }
    }
`
