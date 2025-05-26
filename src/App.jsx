import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Banner from "./components/banner/Banner";
import Categories from "./components/categories/Categories";
import RecommendSection from "./components/recommend/RecommendSection";
import PBProduct from "./components/popular-best-product/PopularProduct";
import { bestproductData, popularproductData } from "./components/popular-best-product/pbData";
import SaveDiscount from "./components/save-discount/SaveDiscount";

const App = () => {
  return (
    <>
      <Header />
      <Menu />
      <Banner />
      <div className="container mx-auto py-2 px-32 ">
        <Categories />
        <PBProduct
          title={"FreshCart Popular Products"}
          icon={"lucide:star"}
          cardData={popularproductData}
        />
        <RecommendSection />
        <PBProduct
          title={"Best Selling Products"}
          description = {'Find the bestseller products in your area with discount.'}
          icon={"mdi:shopping-outline"}
          cardData={bestproductData}
        />
        <SaveDiscount />
      </div>
    </>
  );
};

export default App;
