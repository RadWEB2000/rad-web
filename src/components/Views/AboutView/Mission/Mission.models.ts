export type tCard = {
    title:string;
    index:number;
    content:string;
}

export type tMission = {
    title:string;
    cards:{
        title:string;
        content:string;
    }[];
}