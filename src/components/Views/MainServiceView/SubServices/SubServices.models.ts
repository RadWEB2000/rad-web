import { StaticImageData } from "next/image";

export type tSubServices = {
    cards: {
        icon: {
            alt:string;
            src:string|StaticImageData;
            title:string;
        };
        title:string;
    }[];
    content:string;
    title:string;
}