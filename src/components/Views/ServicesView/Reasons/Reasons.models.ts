import { StaticImageData } from "next/image";

export type tReasons = {
    cards: {
        title:string;
        content:string;
    }[];
    title:string;
    image: {
        alt:string;
        src:string|StaticImageData;
        title:string;
    }
}