import { tSecondaryBlogCard } from "c-blog/SecondaryBlogCard/SecondaryBlogCard.models";

export type tFullscreenMenu = {
    menu :{ 
        label:string;
        uri:string;
        submenu?: {
            label:string;
            uri:string;
        }[]
    }[];
    blog: {
        label:string;
        uri:string; 
    }[];
    cards:tSecondaryBlogCard[];
}