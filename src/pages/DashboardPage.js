import React from "react";
import DashBoard from "../Component/DashBoard/DashBoard";
import Layout from "../Component/Layout";

const DashboardPage = () => {
  return (
    <div className=" w-full overflow-hidden ">
      <Layout>
        <DashBoard />
      </Layout>
    </div>
  );
};

export default DashboardPage;
