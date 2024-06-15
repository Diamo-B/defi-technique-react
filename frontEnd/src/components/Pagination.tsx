import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  dataLength: number;
  currentPage: number;
  onChangePage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ dataLength, currentPage, onChangePage }: Props) => {
  const [totalPages, setTotalPages] = useState(dataLength !== 0 ? Math.ceil(dataLength / 3) : 3);

  useEffect(() => {
    dataLength > 0 && setTotalPages(Math.ceil(dataLength / 3));
  }, [dataLength]);

  const maxVisiblePages = 4;
  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <div className="join">
      <button className="pagination-item" onClick={() => onChangePage(currentPage - 1)} disabled={currentPage === 1 || dataLength === 0}>
        Prev
      </button>

      {pageNumbers.map(pageNumber => (
        <input
          key={pageNumber}
          className="pagination-item"
          type="radio"
          name="options"
          aria-label={pageNumber.toString()}
          checked={currentPage === pageNumber && dataLength !== 0}
          onChange={() => onChangePage(pageNumber)}
          disabled={dataLength === 0}
        />
      ))}

      <button className="pagination-item" onClick={() => onChangePage(currentPage + 1)} disabled={currentPage === totalPages || dataLength === 0}>
        Next
      </button>
    </div>
  );
};

export default Pagination;