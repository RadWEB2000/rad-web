export type tRegularPersonCard = {
    category:string;
    fullname: {
        firstname:string;
        lastname:string;
    };
    image:{
        alt:string;
        src:string;
        title:string;
    };
    occupation:string;
    uri:string;
}