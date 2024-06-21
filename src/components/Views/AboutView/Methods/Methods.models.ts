export type tCard = {
    image:{
        alt:string;
        src:string;
        title:string;
    };
    title:string;
    content:string;
}

export type tMethods = {
    title:string;
    cards:tCard[];
}