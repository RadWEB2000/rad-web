
export type tTileImage = { 
    alt:string;
    src:string;
    title:string;
}
export type tTilePlain = {
label:string;
    value:string;
}

type tCard = tTilePlain & {
    type:"plain"
} | tTileImage & {
    type:"image"
}

export type tStatistics = {
    cards: tCard[];
}