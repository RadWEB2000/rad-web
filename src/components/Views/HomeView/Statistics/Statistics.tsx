import Image from "next/image";
import {tStatistics, tTileImage, tTilePlain} from "v-home/Statistics/Statistics.models";
import css from "v-home/Statistics/Statistics.module.scss";

function TilePlain({label,value}:tTilePlain){
    return (
        <li className={`${css.tile} ${css.tile__plain}`} >
            <span className={css.tile__plain__value} >{value}</span>
            <p className={css.tile__plain__label} >{label}</p>
        </li>
    )
}

function TileImage({alt,src,title}:tTileImage){
    return (
        <li  className={`${css.tile} ${css.tile__image}`}>
            <picture className={css.tile__image__picture} >
                <Image 
                    alt={alt}
                    className={css.tile__image__img} 
                    fill
                    src={src}
                    title={title}
                />
            </picture>
        </li>
    )
}

export default function Statistics({cards}:tStatistics){
    return(
        <ul className={css.wrapper} >
            {cards.map((item,index) => {
                if(item.type === "plain"){
                    return(
                        <TilePlain
                            {...item}
                            key={index}
                        />
                    )
                }else{
                    return(
                        <TileImage
                            {...item}
                            key={index}
                        />
                    )
                }
            })}
        </ul>
    )
}