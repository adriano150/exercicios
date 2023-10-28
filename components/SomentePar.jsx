export default function SomentePar(props) {
    if (props.numero % 2 == 0) {
        return <h1 className="par">Par: {props.numero}</h1>
    } else {
        return <h1 className="impar">Ímpar: {props.numero}</h1>
    }
}