import Titulo from "./titulo.jsx"
import Subtitulo from "./subtitulo.jsx"
import styles from "../css/main.module.css"
import imagens from "../css/imagens.jsx"

export default function main() {
    return (
        <>
            <div id={styles.titulo}>
                <Titulo titulo />
            </div>
            <div className={styles.subtitulo}>
                <Subtitulo subtitulo />
            </div>
            <div>

            </div>
        </>
    )
}