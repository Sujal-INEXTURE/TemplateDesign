import LocPrice from "./LocPrice";
import LogoSearch from "./LogoSearch";

const Header = () => {
  return (
    <>
      <div className="border">
        <div className="container mx-auto py-5 px-32 ">
          <div className="flex xs:flex-wrap sm:flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap  items-center justify-between w-full   ">
            <LogoSearch />
            <LocPrice />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
