import styles from "./integracao02.module.css"

export default function integracao02() {
    return (
        <>
            <div>
                <div className={styles.vermelho}>Texto #01</div>
                <div className={styles.amarelo}>Texto #02</div>
                <div className={styles.verde}>Texto #03</div>
            </div>
        </>
    )
}