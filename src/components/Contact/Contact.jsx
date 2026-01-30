import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgContact from "../../assets/about-banner.jpg";

const Contact = () => {
  return (
    <div>
      <div>
        <CategoryPage
          title="Contact Us"
          bgImage={BgContact}
          // categories={["Dairy"]}
        />
      </div>
    </div>
  );
};

export default Contact;
