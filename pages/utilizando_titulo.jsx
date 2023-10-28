import Titulo from "../components/titulo"

export default function usandoTitulo() {
    return (
        <>
            <Titulo titulo = "Introdução a POO"
            subtitulo = "Uma jornada inicial"
            paragrafo = "Para aprender POO, é necessário dominar lógica de programação"
            />
            <Titulo paragrafo = "AAAAAAAA"/>
        </>
    )
}