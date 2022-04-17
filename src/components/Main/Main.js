import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavPage from "../NavPage/NavPage";
import Review from "../Review/Review";
import Services from "../Services/Services";

const Main = () => {
  return (
    <div>
      <NavPage />
      <Header />
      <Services />
      <Review />
      <Footer />
    </div>
  );
};

export default Main;
