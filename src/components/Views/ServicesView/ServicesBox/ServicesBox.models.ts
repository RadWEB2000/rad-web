export type tServicesBox = {
    title:string;
    content:string;
    button: {
        label:string;
        uri:string;
    };
    cardButton:string;
    cards: {
        uri:string;
        content:string;
        title:string;
    }[];
}