interface EntradaProps {
    tipo?: "text" | "number"
    texto: string
    valor: any
    readOnly?: boolean
    className?: string
    valorMudou?: (valor: any) => void
}

export default function Entrada(props: EntradaProps) {
    return(
        <div className="flex flex-col">
            <label className="mb-2">
                {props.texto}
            </label>
            <input 
                className={`
                    border border-purple-500 rounded-lg
                    focus:outline-none bg-gray-100
                    px-4 py-2 
                    ${props.readOnly ? '' : 'focus:bg-white'}
                `}
                type={props.tipo}
                value={props.valor}
                readOnly={props.readOnly}
                onChange={e => props.valorMudou?.(e.target.value)}

            />
        </div>
    )
}