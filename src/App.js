import "./App.css";
import Navbar from "./Component/Navbar";
import Prenavbar from "./Component/Prenavbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./Component/Slider";
import data from "./data/data.json";
import Offers from "./Component/Offers";
import Heading from "./Component/Heading";
import StarProduct from "./Component/StarProduct";
import HotAccessoriesMenu from "./Component/HotAccessoriesMenu";
import HotAccessories from "./Component/HotAccessories";
import ProductReviews from "./Component/ProductReviews";

import Videos from "./Component/Videos.js";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import NavOptios from "./Component/NavOptios";


function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      <Slider banner={data.banner} />
      <Offers offer={data.offer} />
      <Heading text={"STAR PRODUCTS"} />
      <StarProduct starProduct={data.starProduct} />
      <Heading text={"HOT ACCESSORIES"} />
      <HotAccessoriesMenu />

      <Routes>
        <Route path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />
      </Routes>
      <Routes>
        <Route path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />
      </Routes>
      <Routes>
        <Route path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
      </Routes>
      <Routes>
        <Route path="/lifestyle" element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} />
      </Routes>
      <Routes>
        <Route path="/mobileAccessories" element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} />
      </Routes>

      <Heading text="PRODUCT REVIEWS" />

      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" />

      <Videos videos={data.videos}/>

      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
