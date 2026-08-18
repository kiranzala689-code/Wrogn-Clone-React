import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { myAction } from "./redux/Action";

function ProductDetail() {

  const [state, setState] = useState({});
  const [, setSelectedImage] = useState("");
  const [similarProducts, setSimilarProducts] = useState([]);

  const { category, id } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
  window.scrollTo(0, 0);
}, [category, id])

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await axios.get(
          `http://localhost:8015/${category}/${id}`
        );

        setState(response.data);
        setSelectedImage(response.data.img);

      } catch (error) {

        console.log("Error:", error);

      }  }

   fetchData();
  }, [category, id]);
  useEffect(() => {
    async function fetchSimilarProducts() {
      try {
        const response = await axios.get(
          `http://localhost:8015/${category}`
        );
        const products = response.data;
        const similar = products.filter(
          item => item.id !== Number(id)
        );
        setSimilarProducts(similar);
      } catch (error) {
        console.log("Similar Product Error:", error);
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
  return (
    <div className="container-fluid bg-white py-5">
      <div className="container">
        <div className="row g-4">

         <div className="col-lg-7">

            <div className="row g-3">

              {images.map((image, index) => (

                <div
                  className="col-6"
                  key={index}   >
        <div className="overflow-hidden">
                  <img
                      src={image}
                      alt={state.name}
                      className="img-fluid w-100"
                      style={{
                        height: "500px",
                        objectFit: "cover",
                        cursor: "pointer"
                      }}
                      onClick={() => setSelectedImage(image)}
                   />
                    </div>
               </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="sticky-top"
              style={{ top: "100px" }}   >
              <p className="fw-bold mb-2">
                WROGN
              </p>
              <h4 className="fw-bold text-secondary text-uppercase mb-3">
                {state.name}
              </h4>
        <div className="d-flex align-items-center mb-3">
    <span className="badge bg-dark me-2">
                {state.rating}</span>
 <small className="text-secondary">
                  120+ Ratings </small> </div>
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


                <div className="d-flex gap-2 mt-2">

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