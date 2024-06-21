export type tReguralBlogCard = {
    uri:string;
    image:{
        alt:string;
        src:string;
        title:string;
    };
    title:string;
    excerpt:string;
    author:{
        firstname:string;
        lastname:string;
    };
    release:string;
}