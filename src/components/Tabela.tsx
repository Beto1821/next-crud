import Cliente from "../core/Cliente"

interface TabelaProps {
    clientes: Cliente[]
}

export default function Tabela(props: TabelaProps) {

    function renderizrCabecalho() {
        return (
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>Idade</th>
            </tr>
        )
    }

    function renderizarDados() {
        return props.clientes.map((cliente, i) => {
            return (
                <tr key={cliente._id}>
                    <td>{cliente._id}</td>
                    <td>{cliente._nome}</td>
                    <td>{cliente._idade}</td>
                </tr>
            )
        })
    }

    return (
        <table>
            <thead>
                {renderizrCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}