import PropTypes from "prop-types";
export const HistoryCalculator = ({ history }) => {
  return (
    <div className="bg-gray-950 opacity-90 w-11/12 absolute left-0 top-[9rem] bottom-0 overflow-y-auto">
      {history.length ? (
        <ul className="p-2">
          {history.map((his, index) => (
            <li key={index} className=" hover:bg-white/20 my-1 p-1 text-right">
              <p className="text-lg">
                {his.operation}
                <span className="text-green-500"> = {his.total}</span>
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">Aún no se realiza ninguna operación</p>
      )}
    </div>
  );
};

HistoryCalculator.propTypes = {
  history: PropTypes.array.isRequired,
};
