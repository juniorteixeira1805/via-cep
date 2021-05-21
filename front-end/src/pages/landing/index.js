import React, { useState } from 'react';

import { Wrapper, Content, Cabecalho, Info } from './styles'

import { toast } from 'react-toastify';
import { Form, Input } from '@rocketseat/unform'
import api from '../../services/api'

export default function Landing(){
    const [address, setAddress] = useState(undefined)

    async function handlesubmit(data){
        try {
            data.cep = data.cep.replace(/\D/g,'')

            const response = await api.post('register', {
                cep: data.cep
            })
            setAddress(response.data)

            toast.success('Endereço encontrado.')

        } catch (error) {
            let erro = JSON.parse(error.request.response)
            toast.error(erro.error)
        }
    }

    function handleClick(){
        setAddress(undefined)
    }


    return (
        <Wrapper>
            {
                address ?
                <Content>
                    <Cabecalho>
                        <h1>Informações sobre o cep:</h1>
                    </Cabecalho>
                    <Info>
                        {address.cep ? <p>CEP: {address.cep}</p> : undefined}
                        { address.logradouro ? <p>Logradouro: {address.logradouro}</p> : undefined}
                        { address.complemento ? <p>Complemento: {address.complemento}</p> : undefined}
                        { address.bairro ? <p>Bairro: {address.bairro}</p> : undefined}
                        { address.localidade ? <p>Localidade: {address.localidade}</p> : undefined}
                        { address.uf ? <p>UF: {address.uf}</p> : undefined}
                        { address.ibge ? <p>IBGE: {address.ibge}</p> : undefined}
                        { address.gia ? <p>GIA: {address.gia}</p> : undefined}
                        { address.ddd ? <p>DDD: {address.ddd}</p> : undefined}
                        { address.siafi ? <p>SIAFI: {address.siafi}</p> : undefined}
                    </Info>
                    <button type="button" onClick={handleClick}>Voltar</button>
                </Content>
                :
                <Content>
                    <Cabecalho>
                        <h1>Bem vindo!</h1>
                        <p>Para buscar por informações sobre um CEP, informe o cep e click em buscar.</p>
                    </Cabecalho>
                    <Form onSubmit={handlesubmit} >
                        <Input name="cep" type="text" placeholder="Informe o cep"/>
                        <button type="submit">Buscar</button>
                    </Form>
                </Content>
            }
        </Wrapper>
    )
}