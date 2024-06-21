export type tPrimaryServiceCard = {
    cards: {
        all:number;
        current:number;
    };
    title:string;
    content:string;
    button: {
        label:string;
        uri:string;
    }
}