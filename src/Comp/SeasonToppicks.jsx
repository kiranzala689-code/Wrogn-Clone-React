import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ShirtSlider from "./ShirtsSlider";

function SeasonTopPicks() {

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

    axios
      .get("http://localhost:8015/pent")
      .then((res) => {
        setProducts(res.data.slice(0, 4));
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const openProduct = (id) => {
    navigate(`/pent/${id}`);
    window.scrollTo(0, 0);
  };

  return (

    <div className="container-fluid py-5">

      <div className="container-fluid">

        <div className="d-flex justify-content-between align-items-center mb-4">

          <h2 className="fw-bold mb-0  text-uppercase">
            SEASON TOP PICKS
          </h2>

          <button
            className="btn btn-outline-dark"
            onClick={() => navigate("/pent")}
          >
            VIEW ALL
          </button>

        </div>

        <div className="row g-3">

          {products.map((item) => (

            <div
              className="col-6 col-md-3"
              key={item.id}
            >

              <div
                className="position-relative"
                style={{ cursor: "pointer" }}
              >

                <div
                  className="position-relative overflow-hidden"
                  onClick={() => openProduct(item.id)}
                >

                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-100 d-block"
                    style={{
                      height: "450px",
                      objectFit: "cover"
                    }}
                  />

                  <span
                    className="position-absolute top-0 mt-3  start-0 bg-dark text-white px-3 py-2 small fw-bold"
                  >
                    NEW DROP
                  </span>

                </div>

                <div className="pt-3">

                  <p className="mb-2 product-name text-secondary fw-semibold">
                    {item.name}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">

                    <span className="fw-bold">
                    BestPrice  ₹{item.price} <span className="text-success">(50% off)</span>
                    </span>

                    <button
                      type="button"
                      className="btn  d-flex align-items-center justify-content-center"
                      style={{
                        width: "38px",
                        height: "38px"
                      }}
                      onClick={() => openProduct(item.id)}
                    >
                      <i className="bi bi-plus-lg"></i>
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
       <ShirtSlider/>
<div className="container-fluid mt-4 px-0">

  <div className="row g-1 mt-5">

    <div
      className="col-6 col-md-3"
      onClick={() => navigate("/shirt")}
      style={{ cursor: "pointer" }}
    >
      <div className="position-relative">
        <img
          src="https://wrogn.com/cdn/shop/files/DESK-CHECKED.jpg?v=1776348679&width=720"
          alt="Shirt"
          className="w-100 d-block"
          style={{
            height: "450px",
            objectFit: "cover"
          }}
        />
       
      </div>
    </div>

    <div
      className="col-6 col-md-3"
      onClick={() => navigate("/tshirt")}
      style={{ cursor: "pointer" }}
    >
      <div className="position-relative">
        <img
          src="https://wrogn.com/cdn/shop/files/DESK-PRINTED.jpg?v=1776348771&width=720"
          alt="T-Shirt"
          className="w-100 d-block"
          style={{
            height: "450px",
            objectFit: "cover"
          }}
        />
       
      </div>
    </div>

    <div
      className="col-6 col-md-3"
      onClick={() => navigate("/cargo-pent")}
      style={{ cursor: "pointer" }}
    >
      <div className="position-relative">
        <img
          src="https://wrogn.com/cdn/shop/files/DESK-CARGO.jpg?v=1776348800&width=720"
          alt="Cargo"
          className="w-100 d-block"
          style={{
            height: "450px",
            objectFit: "cover"
          }}
        />
      
      </div>
    </div>

    <div
      className="col-6 col-md-3"
      onClick={() => navigate("/pent")}
      style={{ cursor: "pointer" }}
    >
      <div className="position-relative">
        <img
          src="https://wrogn.com/cdn/shop/files/DESK-ANTI-FIT.jpg?v=1776348890&width=720"
          alt="Jeans"
          className="w-100 d-block"
          style={{
            height: "450px",
            objectFit: "cover"
          }}
        />
        
      </div>
    </div>

  </div>

</div>
    </div>

  );
}

export default SeasonTopPicks;