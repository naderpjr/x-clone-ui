"use client"

import { Image } from "@imagekit/next";

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;


type ImageType = {
    src: string;
    alt: string;
    w?: number;
    h?: number;
    className?: string;
}

const IkImage = ({ src, alt, w, h, className,}: ImageType) => {
    return (
        <Image
            urlEndpoint={urlEndpoint}
            src={src}
            alt={alt}
            width={w}
            height={h}
            className={className} />
    )
}


export default IkImage;