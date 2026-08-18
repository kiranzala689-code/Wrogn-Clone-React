import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SeasonTopPicks from "./SeasonToppicks";

const images = [
  "https://wrogn.com/cdn/shop/files/WEBSITE-BANNER_c80a47d2-f499-423c-b65f-4edc8127e43b.jpg?v=1778529168",
  "https://wrogn.com/cdn/shop/files/WEBSITE-_BANNER-2BANNER-WROGN-ACTIVE.jpg?v=1777556912",
  "https://wrogn.com/cdn/shop/files/WEBSITE-BANNER-SS26.jpg?v=1781178696",
  "https://wrogn.com/cdn/shop/files/WEBISTE-BANNER-2000X782_1.jpg?v=1782198223",
  "https://wrogn.com/cdn/shop/files/WEBSITE-BANNER-shirts_fe897867-25f1-4fae-9cc4-224fd000b2e9.jpg?v=1781179123"
];

function Home() {
  const [state, setState] = useState([]);
  const [current, setCurrent] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://wrogn-clone-react-1.onrender.com/data")
      .then((res) => setState(res.data))
      .catch((err) => console.log(err));
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="container-fluid position-relative">
        <img
          src={images[current]}
          alt="Banner"
          className="w-100"
          style={{
            height: "500px",
            objectFit: "cover"
          }}
        />

        <button
          type="button"
          className="btn btn-dark position-absolute top-50 start-0 translate-middle-y ms-3"
          onClick={prevSlide}
        >
          ❮
        </button>

        <button
          type="button"
          className="btn btn-dark position-absolute top-50 end-0 translate-middle-y me-3"
          onClick={nextSlide}
        >
          ❯
        </button>
      </div>

      <div className="container mt-5">
        <h2 className="text-center fw-bold mb-5">
          SHOP BY CATEGORY
        </h2>

        <div className="row g-4">
          {state.map((el) => (
            <div
              className="col-lg-3 col-md-4 col-sm-6"
              key={el.id}
            >
              <Link
                to={`/${el.category}`}
                className="text-decoration-none text-dark"
              >
                <div className="card border-0 shadow category-card">
                  <img
                    src={el.img}
                    className="card-img-top"
                    style={{
                      height: "350px",
                      objectFit: "cover"
                    }}
                    alt={el.category}
                  />

                  <div className="card-body text-center">
                    <h5 className="fw-bold text-uppercase">
                      {el.category}
                    </h5>

                    <button
                      type="button"
                      className="btn btn-dark w-100 mt-2"
                    >
                      SHOP NOW
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}

          <video
            className="w-100 mb-4"
            autoPlay
            muted
            loop
            controls
            playsInline
            style={{
              height: "600px",
              objectFit: "cover"
            }}
          >
            <source
              src="https://wrogn.com/cdn/shop/videos/c/vp/1aec96c21003479e8820ba118f08b7be/1aec96c21003479e8820ba118f08b7be.HD-720p-3.0Mbps-57504336.mp4?v=0"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="container-fluid mt-4">
          <div>
            <h3>TRENDING CATEGORIES</h3>
          </div>

          <div className="row g-1">
            <div
              className="col-md-6"
              onClick={() => navigate("/tshirt")}
              style={{ cursor: "pointer" }}
            >
              <div className="position-relative overflow-hidden">
                <img
                  src="https://wrogn.com/cdn/shop/files/T-SHIRTS_copy._e2be4c54-1cd1-421d-bdbe-60ffbd6deefd.jpg?v=1774011417&width=720"
                  alt="T-Shirt"
                  className="w-100 d-block"
                  style={{
                    height: "350px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>

            <div
              className="col-md-6"
              onClick={() => navigate("/shirt")}
              style={{ cursor: "pointer" }}
            >
              <div className="position-relative overflow-hidden">
                <img
                  src="https://wrogn.com/cdn/shop/files/SHIRTS_copy..jpg?v=1774015803&width=720"
                  alt="Shirt"
                  className="w-100 d-block"
                  style={{
                    height: "350px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          </div>

          <div className="row pt-1 px-1 g-1">
            <div
              className="col-md-4"
              onClick={() => navigate("/shoes")}
              style={{ cursor: "pointer" }}
            >
              <div className="position-relative overflow-hidden">
                <img
                  src="https://wrogn.com/cdn/shop/files/FOOTWEAR_1_copy..jpg?v=1774016005&width=720"
                  alt="Shoes"
                  className="w-100 d-block"
                  style={{
                    height: "500px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>

            <div
              className="col-md-4"
              onClick={() => navigate("/polo-shirt")}
              style={{ cursor: "pointer" }}
            >
              <div className="position-relative overflow-hidden">
                <img
                  src="https://wrogn.com/cdn/shop/files/POLO_00cc7cbf-b0f7-4d1b-ac2e-0f3c897cd728.jpg?v=1774015943&width=720"
                  alt="Polos"
                  className="w-100 d-block"
                  style={{
                    height: "500px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>

            <div
              className="col-md-4"
              onClick={() => navigate("/pent")}
              style={{ cursor: "pointer" }}
            >
              <div className="position-relative overflow-hidden">
                <img
                  src="https://wrogn.com/cdn/shop/files/JEANS_copy..jpg?v=1774016034&width=720"
                  alt="Pants"
                  className="w-100 d-block"
                  style={{
                    height: "500px",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <SeasonTopPicks />
      </div>
    </>
  );
}

export default Home;