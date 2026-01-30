import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";
import BgAbout from "../../assets/about.webp";

const About = () => {
  return (
    <div>
      <div>
        <CategoryPage
          title="About Us"
          bgImage={BgAbout}
          // categories={["Dairy"]}
        />
      </div>
    </div>
  );
};

export default About;
