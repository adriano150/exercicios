import Image from "next/image"
import frontEnd from "../css/img/"

export default function imagens() {
    return (
        <>
            <Image src={frontEnd} />
        </>
    )
}