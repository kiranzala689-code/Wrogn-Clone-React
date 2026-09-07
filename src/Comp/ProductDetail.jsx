import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { myAction } from "./redux/Action";
import "../Comp/ProductDetail.css"
function ProductDetail() {
  const [state, setState] = useState({});
  const [, setSelectedImage] = useState("");
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { category, id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, id]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);

        const response = await axios.get(
          `https://wrogn-clone-react-1.onrender.com/${category}/${id}`
        );

        setState(response.data);
        setSelectedImage(response.data.img || "");
      } catch (error) {
        console.log("Product Error:", error);
        setState({});
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [category, id]);

  useEffect(() => {
    async function fetchSimilarProducts() {
      try {
        const response = await axios.get(
          `https://wrogn-clone-react-1.onrender.com/${category}`
        );

        const products = Array.isArray(response.data)
          ? response.data
          : [];

        const similar = products.filter(
          (item) => String(item.id) !== String(id)
        );

        setSimilarProducts(similar);
      } catch (error) {
        console.log("Similar Product Error:", error);
        setSimilarProducts([]);
      }
    }

    fetchSimilarProducts();
  }, [category, id]);

  function addtocart() {
    dispatch(myAction(state));
    navigate("/cart");
  }

  function buyNow() {
    navigate("/delivery", {
      state: {
        product: state
      }
    });
  }

  const images = [
    state.img,
    state.img1,
    state.img2,
    state.img3
  ].filter(Boolean);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  if (!state.id) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold">
          Product Not Found
        </h2>

        <button
          className="btn btn-dark mt-3"
          onClick={() => navigate(`/${category}`)}
        >
          BACK TO CATEGORY
        </button>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-white py-5">

      <div className="container">

        <div className="row g-4">

          <div className="col-lg-7">

            <div className="row g-3 desktop-images">
              {images.map((image, index) => (
                <div
                  className="col-6"
                  key={index}
                >
                  <div className="overflow-hidden">

                    <img
                      src={image}
                      alt={state.name || "WROGN Product"}
                      className="img-fluid w-100"
                      style={{
                        height: "500px",
                        objectFit: "cover",
                        cursor: "pointer"
                      }}
                    />

                  </div>
                </div>
              ))}
            </div>

            <div className="mobile-image-slider">

              <div
                className="mobile-image-track"
                onScroll={(e) => {
                  const width = e.currentTarget.clientWidth;
                  const index = Math.round(
                    e.currentTarget.scrollLeft / width
                  );

                  if (images[index]) {
                    setSelectedImage(images[index]);
                  }
                }}
              >

                {images.map((image, index) => (
                  <div
                    className="mobile-slide"
                    key={index}
                  >
                    <img
                      src={image}
                      alt={state.name || "WROGN Product"}
                    />
                  </div>
                ))}

              </div>

              <div className="mobile-slider-dots">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className="slider-dot"
                  ></span>
                ))}
              </div>

            </div>

          </div>

          <div className="col-lg-5">

            <div
              className="sticky-top"
              style={{ top: "100px" }}
            >

              <p className="fw-bold mb-2">
                WROGN
              </p>

              <h4 className="fw-bold text-secondary text-uppercase mb-3">
                {state.name}
              </h4>

              <div className="d-flex align-items-center mb-3">

                {state.rating && (
                  <span className="badge bg-dark me-2">
                    {state.rating} ★
                  </span>
                )}

                <small className="text-secondary">
                  120+ Ratings
                </small>

              </div>

              <hr />

              <div className="mb-3">

                <h3 className="fw-bold mb-1">
                  ₹{state.price}
                </h3>

                <span className="text-secondary">
                  MRP incl. of all taxes
                </span>

              </div>

              <div className="border rounded p-3 mb-4">

                <h6 className="fw-bold text-success">
                  BEST PRICE
                </h6>

                <p className="mb-0 small">
                  Get extra discount on selected products.
                </p>

              </div>

              <div className="mb-4">

                <h6 className="fw-bold">
                  CATEGORY
                </h6>

                <span className="badge bg-light text-dark border text-uppercase">
                  {category}
                </span>

              </div>

              <div className="mb-4">

                <div className="d-flex justify-content-between">

                  <h6 className="fw-bold">
                    SELECT SIZE
                  </h6>

                  <small className="text-decoration-underline">
                    Size Guide
                  </small>

                </div>

                <div className="d-flex gap-2 mt-2 flex-wrap">

                  <button className="btn btn-outline-dark px-4">
                    S
                  </button>

                  <button className="btn btn-outline-dark px-4">
                    M
                  </button>

                  <button className="btn btn-outline-dark px-4">
                    L
                  </button>

                  <button className="btn btn-outline-dark px-4">
                    XL
                  </button>

                  <button className="btn btn-outline-dark px-4">
                    XXL
                  </button>

                </div>

              </div>

              <button
                className="btn btn-dark w-100 py-3 fw-bold"
                onClick={addtocart}
              >
                ADD TO BAG
              </button>

              <button
                className="btn btn-outline-dark w-100 py-3 fw-bold mt-2"
                onClick={buyNow}
              >
                BUY NOW
              </button>

              <div className="border-top mt-4 pt-4">

                <h6 className="fw-bold">
                  DELIVERY & SERVICES
                </h6>

                <div className="input-group mt-3">

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Pincode"
                  />

                  <button className="btn btn-dark">
                    CHECK
                  </button>

                </div>

                <small className="text-secondary d-block mt-2">
                  Enter pincode to check delivery availability.
                </small>

              </div>

              <div className="border-top mt-4 pt-4">

                <h6 className="fw-bold">
                  PRODUCT DETAILS
                </h6>

                <p className="text-secondary">
                  {state.description ||
                    "Premium quality product designed for everyday comfort and style."}
                </p>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-5 pt-5 border-top">

          <h2 className="fw-bold text-uppercase mb-4">
            Similar Products
          </h2>

          <div className="row">

            {similarProducts.slice(0, 4).map((item) => (

              <div
                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                key={item.id}
              >

                <div className="card h-100 border-0 shadow-sm">

                  <img
                    src={item.img}
                    alt={item.name}
                    className="card-img-top"
                    style={{
                      height: "350px",
                      objectFit: "cover",
                      cursor: "pointer"
                    }}
                    onClick={() =>
                      navigate(`/${category}/${item.id}`)
                    }
                  />

                  <div className="card-body">

                    <h6 className="fw-bold">
                      {item.name}
                    </h6>

                    <h5 className="fw-bold">
                      ₹{item.price}
                    </h5>

                    <small className="text-success fw-semibold">
                      Best Price
                    </small>

                    <button
                      className="btn btn-dark w-100 mt-3"
                      onClick={() =>
                        navigate(`/${category}/${item.id}`)
                      }
                    >
                      VIEW PRODUCT
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetail;