export default function repeticao1() {
    const listaAprovados = [
        'Carlos',
        'Maria',
        'Paulo',
        'Ricardo',
        'Andréia',
        'Fernando'
    ]

    function renderizarLista() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }
    return (
        <>
            {renderizarLista()}
        </>
    )
}