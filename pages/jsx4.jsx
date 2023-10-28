export default function jsx4() {
    const subtitulo = "Estou no JavaScript!"
    let outroSubtitulo = 'Continuo no JavaScript'

    return (
        <div className="integracao">
            <h1 className="vermelho">Integração JS e JSX</h1>
            <h2 className="azul">{subtitulo}</h2>
            <h2 className="preto">{outroSubtitulo}</h2>
            <h3 className="vermelho">{3 * 3}</h3>
            <h3 className="azul">{Math.max(70, 90)}</h3>
            <h3 className="preto">{Math.min(5, 20)}</h3>
            <h4>{entre(7, 1, 10)}</h4>
        </div>
    )

    function entre(valor, min, max) {
        if (valor >= min && valor <= max) {
            return 'Sim'
        } else {
            return 'Não'
        }
    }
}