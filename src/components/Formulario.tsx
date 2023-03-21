import { useState } from 'react'
import Entrada from './Entrada'
import Cliente from '@/core/Cliente'
import Botao from './Botao'

interface FormularioProps {
    cliente: Cliente
}

export default function Formulario(props: FormularioProps) {
    const id = props.cliente?._id
    const [nome, setNome] = useState(props.cliente._nome ?? '')
    const [idade, setIdade] = useState(props.cliente._idade ?? 0 )
    return(
        <div>
            {id ? (
                <Entrada
                    readOnly 
                    texto="Código" 
                    valor={id}
                    className="mb-5"
                 />
            ) : false }
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Entrada 
                texto="Idade" 
                valor={idade} 
                tipo="number"
                valorMudou={setNome}
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao >
                    Cancelar
                </Botao>    
            </div>
        </div>
    )
}