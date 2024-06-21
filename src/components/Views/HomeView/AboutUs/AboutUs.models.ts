import { tCards } from "v-home/AboutUs/Cards/Cards.models";
import { tRegularPersonCard } from "c-person/RegularPersonCard/RegularPersonCard.models"

export type tAboutUs = tCards & {
    content:string;
    title:string;
}