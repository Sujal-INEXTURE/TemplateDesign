import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Banner from "./components/banner/Banner";
import Categories from "./components/categories/Categories";

const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <div className="container mx-auto py-2 px-32 ">
        <Categories />
      </div>
    </>
  );
};

export default App;
