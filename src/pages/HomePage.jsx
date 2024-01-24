import { HomeCardComponent } from "../components/HomeCardComponent";
export const HomePage = () => {
  return (
    <>
      <div className="bg-gray-200 h-screen relative">
        <HomeCardComponent
          customCSS="bg-slate-300 xl:w-[45rem] xl:h-[25rem] top-[15rem] right-10 sm:w-[30rem] sm:h-auto"
          cardSize="lg"
          image="image1.png"
        />
        <HomeCardComponent
          customCSS="bg-slate-200 w-[50rem] h-[25rem] top-10 left-20"
          cardSize="lg"
          image="image2.png"
        />
        <HomeCardComponent
          customCSS="bg-white w-[35rem] h-[22rem] bottom-20 right-[15rem]"
          cardSize="sm"
          image="image3.png"
        />
      </div>
    </>
  );
};
