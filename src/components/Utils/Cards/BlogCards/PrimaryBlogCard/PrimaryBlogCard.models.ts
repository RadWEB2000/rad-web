export type tPrimaryBlogCard = {
    image: {
        alt:string;
        src:string;
        title:string;
    };
    title:string;
    excerpt:string;
    button: {
        label:string;
        uri:string;
    };
    button_card?:string;
    release:string;
    author:string;
    cards ?: {
        author:string;
        excerpt:string;
        image: {
            alt:string;
            src:string;
            title:string;
        };
        release:string;
        title:string;
    }[];
}