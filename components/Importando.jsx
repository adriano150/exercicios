import listaProdutos from "@/data/listaProdutos";

export default function Importando(props) {
    return (
        <>
            <section>{props.section}</section>
            <strong>{props.negrito}</strong>

        </>
    )
}
export default function repeticao2() {

    function renderizarLinhas() {
        return listaProdutos.map((produto) => {
            return (
                <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                </tr>
            )
        }

        )

    }


    return (
        <>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Preco</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderizarLinhas()}
                    </tbody>
                </table>
            </div>
        </>
    )
}
