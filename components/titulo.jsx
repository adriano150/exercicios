export default function titulo(props) {
    return (
        <>
            <h1>{props.titulo}</h1>
            <h2>{props.subtitulo}</h2>
            <p>{props.paragrafo}</p>
            <section>{props.anuncio}</section>
        </>
    )
}