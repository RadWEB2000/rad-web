import { Cards, Hero } from "v-directory/index";

export default function DirectonaryPage(){
    return(
        <>
            <Hero
                title="Słownik"
                slogan="Najważniejsze pojęcia w branży"
                content={`Ipsa voluptatem sit voluptas sed nihil rerum et repellat. Pariatur cum tempora voluptatem. Sunt ducimus quaerat et magnam ex non voluptate corrupti inventore. Numquam et eos fugiat itaque consequuntur doloremque et. Illo eveniet facilis accusantium expedita corrupti.`}
                search={{
                    label:"Szukaj",
                    placeholder:"Znajdź pojęcie"
                }}
            />
            <main>
                <Cards/>
            </main>
        </>
    )
}