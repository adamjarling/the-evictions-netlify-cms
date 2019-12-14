import React from "react";
import Layout from "../../components/Layout";

const Music = () => {
  return (
    <Layout>
      <div className="fullpage bg">
        <div className="bodywrap">
          <h1 className="colwhite center subtit">Music</h1>
          <div className="row hide-phone">
            <div className="grid6">
              <iframe
                style={{ border: "0", width: "100%", height: "585px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=2262618402/size=large/bgcol=ffffff/linkcol=de270f/transparent=true/"
                seamless
              >
                <a href="http://theevictions.bandcamp.com/album/ep">
                  EP by the Evictions
                </a>
              </iframe>
            </div>
            <div className="grid6">
              <iframe
                style={{ border: "0", width: "100%", height: "585px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1477881789/size=large/bgcol=ffffff/linkcol=de270f/transparent=true/"
                seamless
              >
                <a href="http://theevictions.bandcamp.com/album/evictions">
                  Evictions by the Evictions
                </a>
              </iframe>
            </div>
          </div>
          <div className="row hide-desktop">
            <div className="grid6">
              <iframe
                style={{ border: "0", width: "100%", height: "390px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=2262618402/size=large/bgcol=ffffff/linkcol=de270f/transparent=true/"
                seamless
              >
                <a href="http://theevictions.bandcamp.com/album/ep">
                  EP by the Evictions
                </a>
              </iframe>
            </div>
            <div className="grid6">
              <iframe
                style={{ border: "0", width: "100%", height: "390px" }}
                src="https://bandcamp.com/EmbeddedPlayer/album=1477881789/size=large/bgcol=ffffff/linkcol=de270f/transparent=true/"
                seamless
              >
                <a href="http://theevictions.bandcamp.com/album/evictions">
                  Evictions by the Evictions
                </a>
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Music;
