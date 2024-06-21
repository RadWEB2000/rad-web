import {tReguralBlogCard} from "c-blog/ReguralBlogCard/ReguralBlogCard.models";

export type tCategorySection = {
    title:string;
    card_button:string;
    button:{
        label:string;
        uri:string;
    };
    cards : tReguralBlogCard[]
} 