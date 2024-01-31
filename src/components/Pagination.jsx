import ReactPaginate from "react-paginate";
import { PropTypes } from "prop-types";

export const Pagination = ({ itemsPerPage, allItems, setOffset }) => {
  // const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(allItems / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allItems;
    // console.log(newOffset);
    // setItemOffset(newOffset);
    setOffset(newOffset);
  };
  return (
    <>
      <div className="flex flex-col">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="flex gap-3"
          pageLinkClassName="flex justify-center items-center bg-gray-900 text-white w-6 rounded-sm px-4 py-1 font-bold"
          previousClassName="flex justify-center items-center bg-gray-900 text-white w-6 rounded-sm px-4 py-1 font-bold"
          nextClassName="flex justify-center items-center bg-gray-900 text-white w-6 rounded-sm px-4 py-1 font-bold"
          activeLinkClassName="bg-blue-800"
          disabledClassName="!bg-gray-300 text-gray-900 disabled:opacity-90"
        />
      </div>
    </>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  allItems: PropTypes.number.isRequired,
  setOffset: PropTypes.func.isRequired,
};
