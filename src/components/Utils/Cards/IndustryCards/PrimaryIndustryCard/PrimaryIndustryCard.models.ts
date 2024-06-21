import { StaticImageData } from "next/image";

export type tPrimaryIndustryCard = {
    icon: {
        alt:string;
        src:string|StaticImageData;
        title:string;
    };
    button: {
        label:string;
        uri:string;
    }
    title:string;
    content:string;
}