import { StaticImageData } from "next/image";

export type tIndustries = {
    title:string;
    slogan:string;
    buttonCard:string;
    cards : {
        icon: {
            alt:string;
            src:string|StaticImageData;
            title:string;
        };
        uri:string;
        content:string;
        title:string;
    }[];
}