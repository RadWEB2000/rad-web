export type tBigMenu = {
    menu :{ 
        label:string;
        uri:string;
        submenu?: {
            label:string;
            uri:string;
        }[]
    }[];
    blog: {
        label:string;
        uri:string; 
    }[];
}