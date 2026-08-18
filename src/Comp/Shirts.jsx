import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Shirts() {
  const { category } = useParams();

  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8015/${category}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [category]);

  const addToCart = (item) => {
    navigate("/cart", {
      state: {
        product: item
      }
    });
  };

  return (
    <div className="container mt-5">

      <h2 className="mb-4 text-uppercase">
        Men's {category}
      </h2>

      <div className="row">

        {products.map((item) => (

          <div
            className="col-lg-3 col-md-4 col-sm-6 mb-4"
            key={item.id}
          >

            <div className="card h-100 shadow-sm">

              <img
                src={item.img}
                className="card-img-top"
                alt={item.name}
                style={{
                  height: "300px",
                  objectFit: "cover"
                }}
              />

              <div className="card-body">

                <p
                  className="card-title product-name"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"
                  }}
                >
                  {item.name}
                </p>

                <div className="d-flex justify-content-between align-items-end">

                  <div>

                    <h5 className="mb-1 text-dark fw-bold">
                      ₹{item.price}
                    </h5>

                    <small className="text-success fw-semibold">
                      Best Price
                    </small>

                  </div>

                  <button
                    className="btn btn-dark rounded-circle d-flex justify-content-center align-items-center"
                    style={{
                      width: "38px",
                      height: "40px",
                      fontSize: "30px",
                      paddingBottom: "10px"
                    }}
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Shirts;