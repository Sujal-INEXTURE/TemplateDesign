import LocPrice from "./LocPrice";
import LogoSearch from "./LogoSearch";

const Header = () => {
  return (
    <>
      <div className="border">
        <div className="container mx-auto py-6 px-36 ">
          <div className="flex md:flex-wrap lg:flex-nowrap  items-center justify-between w-full   ">
            <LogoSearch />
            <LocPrice />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
