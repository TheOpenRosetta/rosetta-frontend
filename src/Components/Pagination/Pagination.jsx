import React from "react";
// import { Link } from "react-router-dom";
import PaginationMu from "@mui/material/Pagination";

const Pagination = ({
    total_number,
    per_page,
    currentPage,
    setCurrentPage,
}) => {
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };
    return (
        <PaginationMu
            size="small"
            shape="rounded"
            count={Math.ceil(total_number / per_page)}
            page={currentPage}
            color="primary"
            onChange={handleChange}
            className="pagination"
        />
    );
};

export default Pagination;
