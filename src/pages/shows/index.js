import React from "react";
import Layout from "../../components/Layout";
import rnrmarket from "../../img/shows/rockandrollmarket.jpg";
import raw from "../../img/shows/rawfest.jpg";
import sonics from "../../img/shows/the-sonics.jpg";
import cheetah from "../../img/shows/cheetah-chrome-2.jpg";
import cheetah2 from "../../img/shows/cheetah-chrome-1.jpg";

const Shows = () => {
  return (
    <Layout>
      <div className="fullpage bg">
        <div className="bodywrap">
          <h1 className="colwhite center subtit">Shows</h1>

          <div className="row">
            <div className="grid12">
              <a
                href="http://www.songkick.com/artists/9049979"
                className="songkick-widget"
                data-theme="dark"
                data-detect-style="true"
                data-font-color="#fff"
                data-background-color="transparent"
              >
                The Evictions Shows
              </a>
              <script src="//widget.songkick.com/widget.js"></script>
            </div>
          </div>
          <h1 className="colwhite center subtit">Past Shows</h1>

          <div className="row">
            <div className="grid6">
              <img src={rnrmarket} alt="rockandrollmarket" />
            </div>
            <div className="grid6">
              <img src={raw} alt="rawfest" />
            </div>
          </div>
          <div className="row">
            <div className="grid4">
              <img src={sonics} alt="the-sonics" />
            </div>
            <div className="grid4">
              <img src={cheetah} alt="cheetah-chrome-2" />
            </div>
            <div className="grid4">
              <img src={cheetah2} alt="cheetah-chrome-1" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shows;
