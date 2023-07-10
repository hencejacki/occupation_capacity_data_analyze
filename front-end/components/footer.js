import Image from "next/image"

export default function Footer() {
    return (
        <>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Image alt='' src="/next.svg" width={100} height={40} />
            </div>
        </>
    )
}