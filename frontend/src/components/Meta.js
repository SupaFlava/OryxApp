import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};
Meta.defaultProps = {
  title: "Welcome To Oryx",
  description: "Your Local Streetware Spot",
  keywords: "t-shirt",
};
export default Meta;
