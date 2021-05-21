import React from 'react';

import { Wrapper, Content } from './styles'

import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform'

export default function Landing(){

    function handlesubmit(data){
        try {
            console.log(data)
        } catch (error) {
            toast.error('Ocorreu um erro. Entre em contato com o suporte.')
        }
    }


    return (
        <Wrapper>
            <Content>
                <div>
                    <h1>Bem vindo!</h1>
                    <p>Para buscar por um endereço, informe o cep e click em buscar.</p>
                </div>
                <Form onSubmit={handlesubmit} >
                    <Input name="cep" type="text" placeholder="Informe o cep"/>
                    <button type="submit">Buscar</button>
                </Form>
            </Content>
        </Wrapper>
    )
}