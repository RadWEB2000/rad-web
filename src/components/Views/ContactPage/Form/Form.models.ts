export type tForm = {
    title:string;
    button:string;
    statute:string;
    fields: {
        label:string;
        name:string;
        id:string;
        placeholder:string;
        min?:number;
        max?:number;
        isRequired?:boolean;
        type:"tel"|"mail"|"text"|"url"
    }[];
   
}