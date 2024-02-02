import { TailSpin } from "react-loader-spinner";
export const LoaderComponent = () => {
  return (
    <TailSpin
      visible={true}
      height="80"
      width="80"
      color="rgb(24 24 27)"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );

  // Default values shown
};
