import React, { useState } from "react";


interface IPaginationProps<T> {
    data: T[];
    RenderComponent: React.FC<{ data: T }>;
    title?: string;
    pageLimit: number;
    dataLimit: number;
}

const Pagination = <T extends unknown>({
    data,
    RenderComponent,
    title,
    pageLimit,
    dataLimit
}: IPaginationProps<T>) => {

    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    const goToNextPage = () => {
        setCurrentPage((page) => page + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage((page) => page - 1);
    };

    const changePage = (event: React.MouseEvent<HTMLButtonElement>) => {
        const pageNumber = Number(event.currentTarget.textContent);
        setCurrentPage(pageNumber);
    };

    const getPaginatedData = (): T[] => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = (): number[] => {
        const start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill(0).map((_, idx) => start + idx + 1);
    };

    return (
        <>
            <div className="pagination">
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? "disabled" : ""}`}>
                    prev
                </button>
                {getPaginationGroup().map((item) => (
                    <button
                        key={item}
                        onClick={changePage}
                        className={`paginationItem ${
                            currentPage === item ? "active" : ""
                        }`}
                        >
                        <span>{ item }</span>
                    </button>
                ))}
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? "disabled" : ""}`}
                >
                    next
                </button>
            </div>
            <div>
                {getPaginatedData().map((d, idx) => (
                    <RenderComponent 
                        key={idx} 
                        data={d} 
                    />
                ))}
            </div>
        </>
    );
};

export default Pagination;
