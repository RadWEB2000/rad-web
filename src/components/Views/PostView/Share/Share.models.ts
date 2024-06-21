export type tShare = {
    share:{ 
        url:string;
        tags:string[];
        title:string;
        summary:string;
        separator?:"" | string;
        source?:string | "website" | "RadWEB";
    }
    title:string;
    
}