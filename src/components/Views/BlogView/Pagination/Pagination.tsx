"use client"
import { GrFormPrevious as Prev, GrFormNext as Next } from "react-icons/gr";
import css from "v-blog/Pagination/Pagination.module.scss"
import ReactPaginate from "react-paginate";

export default function Pagination(){
    return (
        <ReactPaginate
            pageCount={Math.ceil(56 / 9)}
            previousLabel={<Prev/>}
            onPageActive={() => {}}
            nextLabel={<Next/>}
            disabledClassName={css.disabled}
            className={css.pagination}
            nextClassName={css.nextButton}
            previousClassName={css.prevButton}
            pageClassName={css.page}
            breakLabel="..."
            pageRangeDisplayed={1}
            initialPage={1}
            renderOnZeroPageCount={null}
            marginPagesDisplayed={1}
        />
    )
}