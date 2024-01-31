import ReactPaginate from "react-paginate";
import { PropTypes } from "prop-types";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
// import { useState } from "react";

export const Pagination = ({ itemsPerPage, allItems }) => {
  const { pokeOffSet } = useContext(PokemonContext);
  const { offset, setOffset } = pokeOffSet;
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
          className="flex gap-3"
          pageLinkClassName="flex justify-center items-center bg-gray-900 text-white w-6 rounded-sm px-4 py-1 font-bold"
          previousClassName="flex justify-center items-center bg-gray-900 text-white w-6 rounded-sm px-4 py-1 font-bold"
          nextClassName="flex justify-center items-center bg-gray-900 text-white w-6 rounded-sm px-4 py-1 font-bold"
          activeLinkClassName="bg-blue-800"
          disabledClassName="!bg-gray-300 text-gray-900 disabled:opacity-90"
          initialPage={currentPage}
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
