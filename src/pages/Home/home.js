import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import VideoPlayer from "../../components/VideoJs/videojs";
const Home = () => {
  const video1JsOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "http://localhost:8080/stream/sub_stream_192/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const video2JsOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "http://localhost:8080/stream/sub_stream_190/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  const video3JsOptions = {
    autoplay: true,
    controls: true,
    sources: [
      {
        src: "http://localhost:8080/stream/sub_stream_191/index.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };
  useEffect(() => {
    document.title = "Dashboard-Home | KAU";
  }, []);
  return (
    <>
      <div className="content-page">
        <div className="content">
          <div className="container-fluid">
            <div className="col-xl-12 text-center">
              <div className="card-box bg-dark">
                <h4 className="header-title mt-0 mb-0 text-white">Live View</h4>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-md-6">
                <div className="card-box">
                  {/* <Link to={{ pathname: "/route", state: { camera: "feed1" } }}>
                    My route
                  </Link> */}

                  <Link to="/campage/example-1">
                    <h4 className="header-title mt-0 mb-0">
                      Gate Name/No: Gate-1
                    </h4>
                    {/* <video
                      id="example-1"
                      className="video-js vjs-default-skin"
                      width="470"
                      height="340"
                      controls="true"
                      loop=""
                      muted=""
                      autoplay=""
                      onclick="textJs()"
                    >
                      <source
                        id="source-1"
                        src="https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8"
                        type="application/x-mpegURL"
                      />
                    </video> */}
                    <VideoPlayer {...video1JsOptions} />
                  </Link>
                </div>
              </div>

              <div className="col-xl-6 col-md-6">
                <div className="card-box">
                  <Link to="/campage/example-2">
                    <h4 className="header-title mt-0 mb-0">
                      Gate Name/No: Gate-2
                    </h4>
                    {/* <video
                      id="example-2"
                      className="video-js vjs-default-skin"
                      width="470"
                      height="340"
                      controls="true"
                      loop=""
                      muted=""
                      autoplay=""
                    >
                      <source
                        src="http://192.168.1.3:8080/stream/sub_stream/index.m3u8"
                        type="application/x-mpegURL"
                      />
                    </video> */}
                    <VideoPlayer {...video2JsOptions} />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-md-6">
                <div className="card-box">
                  <Link to="/campage/example-3">
                    <h4 className="header-title mt-0 mb-0">
                      Gate Name/No: Gate-3
                    </h4>
                    {/* <video
                      id="example-3"
                      className="video-js vjs-default-skin"
                      width="470"
                      height="340"
                      controls="true"
                      loop=""
                      muted=""
                      autoplay=""
                    >
                      <source
                        id="source-3"
                        src="http://192.168.1.3:8080/stream/sub_stream/index.m3u8"
                        type="application/x-mpegURL"
                      />
                    </video> */}
                    <VideoPlayer {...video3JsOptions} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
