export type tHero = {
    breadcrumbs: {
        label:string;
        uri:string;
    }[];
    title:string;
    readingTime:string|number;
    author:string;
    release:string;
    image:{
        alt:string;
        src:string;
        title:string;
    }
}