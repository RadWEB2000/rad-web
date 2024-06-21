import { tAuthor } from "footer/Author/Author.models";
import { tBrand } from "footer/Brand/Brand.models"
import { tMenu } from "footer/Menu/Menu.models";

export type tFooter = {
    author:tAuthor;
    brand:tBrand;
    menu:tMenu;
}