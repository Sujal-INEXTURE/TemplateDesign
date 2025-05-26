import bannerImage from "../../assets/banner/banner.jpg";
import BCard from "./BCard";

const Banner = () => {
  return (
    <>
      <div className="relative">
        <img src={bannerImage} alt="banner image" />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="container mx-auto py-2 px-32 ">
            <BCard />
            <p className="mt-3 text-white text-sm text-shas">
              Hello, Sign in for the best experience. New to Freshcart? Register
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
