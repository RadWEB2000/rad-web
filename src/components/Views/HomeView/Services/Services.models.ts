import { tPrimaryButton } from "buttons/PrimaryButton/PrimaryButton.models"
import { tHomeServiceCard } from 'c-service/HomeServiceCard/HomeServiceCard.models';

export type tServices = {
    button: tPrimaryButton;
    cards:tHomeServiceCard[];
    content:string;
    title:string;
}