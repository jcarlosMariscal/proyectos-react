import PropTypes from "prop-types";
export const CardHomeComponent = ({ person }) => {
  // console.log(pros);
  return (
    <div className="bg-violet-100 text-black p-3 rounded-lg shadow-lg shadow-violet-400/60 w-[20rem] h-[17rem]">
      <div className="">
        <img
          src="https://img.freepik.com/free-photo/rear-view-programmer-working-all-night-long_1098-18697.jpg"
          alt="Img Random"
          className="w-full h-[8rem] object-cover"
        />
      </div>
      <div className="">
        <h3>{person.name}</h3>
        <p className="flex justify-center align-items-center">
          {person.description}
        </p>
        <div className="flex justify-center mt-5">
          <button className="rounded bg-gray-900 w-[5rem] hover:bg-gray-950 text-white">
            Ver
          </button>
        </div>
      </div>
    </div>
  );
};
CardHomeComponent.propTypes = {
  person: PropTypes.object.isRequired,
};
