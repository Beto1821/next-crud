import { useState } from 'react'
import Botao from "../components/Botao"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"
import Formulario from "../components/Formulario"

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Pedro', 23, '3'),
    new Cliente('Joao', 54, '4'),
  ]

  function clienteSelecionado(cliente: Cliente){

  }

  function clienteExcluido(cliente: Cliente) {

  }

  function salvarCliente(cliente: Cliente) {

  }

  const [visivel, setVisivel] = useState< 'tabela' | 'form'>('tabela')

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500 text-white   
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao 
                cor="green" 
                className="mb-4"
                onClick={() => setVisivel('form')}
                >
                Novo Cliente
              </Botao>
            </div>
              <Tabela clientes={clientes} 
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}
              />
          </>
        ): 
          <Formulario 
            cliente={clientes[1]}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}

          />
        }
      </Layout>
    </div>
  )
}