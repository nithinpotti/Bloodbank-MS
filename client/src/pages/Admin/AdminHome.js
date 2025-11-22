import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            Blood donation and transfusion service is an indispensable part of contemporary medcine and health care. Blood management has been recognized as a challenging task because of life threatening nature of blood products entails the administration due to its perishable nature & required timely processing and it also saves the life. Such great challenges has been considerably alleviated with the development of information and computer technology. Blood bank management system is an integrated blood bank automation system. This web based mechanism inter connects all the Blood banks into a single network. Integrated Blood Bank management system refers the aquisition, validation, storage and circulation of various live data and information electronically regarding blood donation and transfusion service. These electronic processes will help te public for easya ccess to the blood availability status of blood banks on finger tips, so that he can place a requisition of a particular blood group in nearby blood bank and save a valuable life.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
