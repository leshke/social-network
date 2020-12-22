import React, { useState } from 'react';
import s from './Users.module.css';
import Pagination from "react-js-pagination";

const PaginationContainer = (props) => {
    const [activePage, setActivePage] = useState(props.currentPage)

    const handlePageChange = (pageNumber) => {
        props.onPageChange(pageNumber)
        setActivePage(pageNumber);
    }

    const pagesCount = Math.ceil(props.totalUsers ? props.totalUsers : props.totalFriends / props.pageSize);

    return (
        <div className={s.paginationContainer}>
            <Pagination
                hideNavigation
                activePage={activePage}
                itemsCountPerPage={props.pageSize}
                totalItemsCount={pagesCount}
                pageRangeDisplayed={10}
                onChange={handlePageChange}
            />
        </div>
    );
}

// My pagination without library
/* const Pagination1 = React.memo((props, { portionSize = 10 }) => {
    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortion] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={s.pagination}>
        {portionNumber > 1 && <button onClick={() => setPortion(portionNumber - 1)}>prev</button>}

        {
            pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => {
                    return <span key={i} onClick={(e) => props.onPageChange(p)} className={props.currentPage === p ? s.active : ""}>{p}</span>
                })

        }
        {portionCount > portionNumber && <button onClick={() => setPortion(portionNumber + 1)}>prev</button>}
    </div>
}) */

export default PaginationContainer;