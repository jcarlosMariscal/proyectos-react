import PropTypes from "prop-types";
export const DisplayCalculator = ({ input }) => {
  return (
    <div className="w-full">
      <form className="w-full">
        <input
          type="text"
          className="outline-none bg-transparent w-full h-14 text-2xl text-right"
          value={input}
          autoFocus
        />
      </form>
    </div>
  );
};

DisplayCalculator.propTypes = {
  input: PropTypes.string.isRequired,
};
