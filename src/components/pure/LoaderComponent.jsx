import { TailSpin } from "react-loader-spinner";
export const LoaderComponent = () => {
  // tailspin.register();
  return (
    <TailSpin
      visible={true}
      height="100"
      width="100"
      color="rgb(24 24 27)"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );

  // Default values shown
};
