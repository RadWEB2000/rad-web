import { StaticImageData } from "next/image";

export type tHero = {
    slogan:string;
    title:string;
    image:{
        alt:string;
        src:string | StaticImageData;
        title:string;
    };
    content:string;
}