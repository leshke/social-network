import React from 'react';
import s from './Users.module.css';
import Pagination from "react-js-pagination";

class PaginationContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            activePage: this.props.currentPage
        };
    }

    handlePageChange(pageNumber) {
        this.props.onPageChange(pageNumber)
        this.setState({ activePage: pageNumber });
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsers ? this.props.totalUsers : this.props.totalFriends / this.props.pageSize);

        return (
            <div className={s.paginationContainer}>
                <Pagination
                    hideNavigation
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.props.pageSize}
                    totalItemsCount={pagesCount}
                    pageRangeDisplayed={10}
                    onChange={this.handlePageChange.bind(this)}
                />
            </div>
        );
    }
}

// pagination without library
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