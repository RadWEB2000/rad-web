export type tHomeProjectCard = {
    title:string;
    image: {
        alt:string;
        src:string;
        title:string;
    }
    description: {
        label:string;
        content:string;
    }
    author: {
        label:string;
        content:string;
    };
    release: {
        label:string;
        content:string;
    };
    button: {
        label:string;
        uri:string;
    };
}