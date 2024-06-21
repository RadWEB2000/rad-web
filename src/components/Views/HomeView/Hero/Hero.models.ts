export type tHero = {
    title:string;
    slogan:string;
    callToAction:string;
    buttons: {
        label:string;
        uri:string;
    }[];
    socials:{
        label:string;
        url:string;
    }[];
}