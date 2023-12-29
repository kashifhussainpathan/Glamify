import React from "react";
import { useDispatch } from "react-redux";

import { useFiltersState } from "@hooks";
import { getProducts, setCurrentPage } from "@redux";
import { useProductsState, useGetGenderFromPath } from "@hooks";

const Pagination = () => {
  const dispatch = useDispatch();
  const { filters } = useFiltersState();
  const { gender: genderFromPath } = useGetGenderFromPath();
  const { totalProducts, currentPage } = useProductsState();

  const totalPages = Math.ceil(parseInt(totalProducts) / 20) || 20;

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
    dispatch(getProducts({ page, gender: genderFromPath, filters }));
  };

  const getPageNumbers = () => {
    const pageNumbers = [];
    const totalVisiblePages = 5;

    if (totalPages <= totalVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      const halfVisiblePages = Math.floor(totalVisiblePages / 2);
      const startPage = Math.max(1, currentPage - halfVisiblePages);
      const endPage = Math.min(totalPages, startPage + totalVisiblePages - 1);

      if (currentPage - startPage < halfVisiblePages) {
        for (let i = 1; i <= totalVisiblePages - 1; i++) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      } else if (endPage - currentPage < halfVisiblePages) {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (let i = endPage - totalVisiblePages + 2; i <= endPage; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1);
        pageNumbers.push("...");
        for (
          let i = currentPage - halfVisiblePages + 1;
          i <= currentPage + halfVisiblePages - 1;
          i++
        ) {
          pageNumbers.push(i);
        }
        pageNumbers.push("...");
        pageNumbers.push(totalPages);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center my-4">
      {currentPage > 1 && (
        <button
          className="px-2 py-1 mr-2 border rounded hover:bg-gray-200"
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
      )}

      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {page === "..." ? (
            <span className="px-2 py-1">...</span>
          ) : (
            <button
              className={`px-2 py-1 mx-1 border rounded focus:outline-none hover:bg-gray-200 ${
                currentPage === page ? "bg-gray-200" : ""
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          )}
        </React.Fragment>
      ))}

      {currentPage < totalPages && (
        <button
          className="px-2 py-1 ml-2 border rounded hover:bg-gray-200"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

export default Pagination;
