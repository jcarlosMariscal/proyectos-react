import ReactPaginate from "react-paginate";
import { PropTypes } from "prop-types";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const Pagination = ({ itemsPerPage }) => {
  const { pokeOffSet, allItems } = useContext(PokemonContext);
  const { offset, setOffset } = pokeOffSet;

  useEffect(() => {
    setOffset(0);
  }, []);
  // Calcula la página actual basándose en el offset de la petición a pokeapi y los items por página.
  const currentPage = offset / itemsPerPage;
  const pageCount = Math.ceil(allItems / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allItems;
    // Actualiza offset para traer los pokemos que corresponden
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
          className="flex"
          pageLinkClassName="btn-pagination text-gray-900 hover:bg-gray-500 hover:text-white"
          previousClassName="btn-pagination"
          nextClassName="btn-pagination bg-gray-700 text-white"
          breakClassName="btn-pagination text-cyan-900"
          activeLinkClassName="!bg-gray-900 !text-white"
          disabledClassName="!bg-gray-300 text-gray-500 disabled:opacity-90"
          initialPage={currentPage}
        />
      </div>
    </>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
};
