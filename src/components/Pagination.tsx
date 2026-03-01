import React, { useState, useMemo } from "react";

interface PaginationProps<T> {
    data: T[];
    RenderComponent: React.FC<{ data: T }>;
    title?: string;
    pageLimit: number;
    dataLimit: number;
}

const Pagination = <T,>({
    data,
    RenderComponent,
    pageLimit,
    dataLimit
}: PaginationProps<T>) => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate total pages using useMemo for performance
    const pages = useMemo(() => {
        return Math.ceil(data.length / dataLimit);
    }, [data.length, dataLimit]);

    const goToNextPage = () => {
        setCurrentPage((page) => Math.min(page + 1, pages));
    };

    const goToPreviousPage = () => {
        setCurrentPage((page) => Math.max(page - 1, 1));
    };

    const changePage = (event: React.MouseEvent<HTMLButtonElement>) => {
        const pageNumber = Number(event.currentTarget.textContent);
        if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= pages) {
            setCurrentPage(pageNumber);
        }
    };

    const getPaginatedData = (): T[] => {
        const startIndex = (currentPage - 1) * dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = (): number[] => {
        const start = Math.ceil((currentPage - 1) / pageLimit) * pageLimit;
        const group = [];
        for (let i = 1; i <= pageLimit; i++) {
            const pageNum = start + i;
            if (pageNum <= pages) {
                group.push(pageNum);
            }
        }
        return group;
    };

    // Handle edge case where data is empty
    if (data.length === 0) {
        return <div>No data available</div>;
    }

    return (
        <>
            <div className="pagination">
                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? "disabled" : ""}`}
                    disabled={currentPage === 1}
                >
                    prev
                </button>
                
                {getPaginationGroup().map((item) => (
                    <button
                        key={item}
                        onClick={changePage}
                        className={`paginationItem ${
                            currentPage === item ? "active" : ""
                        }`}
                        disabled={currentPage === item}
                    >
                        <span>{item}</span>
                    </button>
                ))}
                
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? "disabled" : ""}`}
                    disabled={currentPage === pages}
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
