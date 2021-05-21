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
    animation: ${DeCimaParaBaixo} 1.7s;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

export const Content = styled.div`
    animation: ${DeCimaParaBaixo} 1.7s;
    height: 100%;
    width: 450px;
    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    form {
        animation: ${DeCimaParaBaixo} 1.7s;
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        width: 100%;
    }

    input {
        animation: ${DeCimaParaBaixo} 1.7s;
        background: rgba(0, 0, 0, 0.1);
        border: 0;
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        color: black;
        margin: 0 0 10px;

        &::placeholder {
            color: black;
        }
    }
    button {
        animation: ${DeCimaParaBaixo} 1.7s;
        width: 100%;
        padding: 0 10px;
        margin: 5px 0 0;
        height: 36px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: 0.3s;
        &:hover {
            background: ${darken(0.05, '#0885ff')}
        }
    }
`
export const Cabecalho = styled.div`
    animation: ${DeCimaParaBaixo} 1.7s;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        padding: 20px 0px;
    }

    p {
        line-height: 25px;
    }
`
export const Info = styled.div`
    animation: ${DeCimaParaBaixo} 1.7s;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    p {
        width: 100%;
        line-height: 30px;
    }
`
