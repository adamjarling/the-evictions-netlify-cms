import React from "react";
import Layout from "../../components/Layout";

const Music = () => {
  return (
    <Layout>
      <div className="fullpage bg">
        <div className="bodywrap">
          <div className="grid12">
            <h1 className="colwhite center subtit">
              Ride In Your Car - Music Video
            </h1>
            <iframe
              width="100%"
              height="580"
              src="https://www.youtube.com/embed/YBJ_31Qg3gM"
              frameborder="0"
              allowfullscreen
            ></iframe>
            <h1 className="colwhite center subtit">
              Teenage On The TV - Music Video
            </h1>
            <iframe
              width="100%"
              height="580"
              src="https://www.youtube.com/embed/XoIK5J5xdK0"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Music;
