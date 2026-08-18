import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Delivery() {

  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    city: "",
    state: ""
  });


  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };


  const continueToPayment = (e) => {

    e.preventDefault();

    if (
      form.name === "" ||
      form.mobile === "" ||
      form.pincode === "" ||
      form.address === "" ||
      form.city === "" ||
      form.state === ""
    ) {

      alert("Please fill all delivery details");
      return;

    }


    navigate("/payment", {

      state: {

        products: [
          {
            ...product,
            quantity: 1
          }
        ],

        delivery: form

      }

    });

  };


  if (!product) {

    return (

      <div className="container py-5 text-center">

        <h3 className="fw-bold">
          No Product Selected
        </h3>

        <button
          className="btn btn-dark mt-3"
          onClick={() => navigate("/")}
        >
          GO TO HOME
        </button>

      </div>

    );

  }


  return (

    <div className="container py-5">

      <div className="row g-4">


        <div className="col-lg-7">

          <h2 className="fw-bold mb-4">
            DELIVERY DETAILS
          </h2>


          <div className="card border-0 shadow-sm">

            <div className="card-body p-4">

              <form onSubmit={continueToPayment}>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label className="form-label fw-semibold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={handleChange}
                    />

                  </div>


                  <div className="col-md-6 mb-3">

                    <label className="form-label fw-semibold">
                      Mobile Number
                    </label>

                    <input
                      type="tel"
                      name="mobile"
                      className="form-control"
                      placeholder="Enter mobile number"
                      value={form.mobile}
                      onChange={handleChange}
                    />

                  </div>


                  <div className="col-md-6 mb-3">

                    <label className="form-label fw-semibold">
                      Pincode
                    </label>

                    <input
                      type="text"
                      name="pincode"
                      className="form-control"
                      placeholder="Enter pincode"
                      value={form.pincode}
                      onChange={handleChange}
                    />

                  </div>


                  <div className="col-md-6 mb-3">

                    <label className="form-label fw-semibold">
                      City
                    </label>

                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="Enter city"
                      value={form.city}
                      onChange={handleChange}
                    />

                  </div>


                  <div className="col-12 mb-3">

                    <label className="form-label fw-semibold">
                      State
                    </label>

                    <input
                      type="text"
                      name="state"
                      className="form-control"
                      placeholder="Enter state"
                      value={form.state}
                      onChange={handleChange}
                    />

                  </div>


                  <div className="col-12 mb-4">

                    <label className="form-label fw-semibold">
                      Complete Address
                    </label>

                    <textarea
                      name="address"
                      className="form-control"
                      rows="4"
                      placeholder="House No, Street, Area..."
                      value={form.address}
                      onChange={handleChange}
                    ></textarea>

                  </div>

                </div>


                <button
                  type="submit"
                  className="btn btn-dark w-100 py-3 fw-bold"
                >
                  CONTINUE TO PAYMENT
                </button>


                <button
                  type="button"
                  className="btn btn-outline-dark w-100 py-3 mt-2"
                  onClick={() => navigate(-1)}
                >
                  BACK
                </button>

              </form>

            </div>

          </div>

        </div>


        <div className="col-lg-5">

          <div
            className="card border-0 shadow-sm sticky-top"
            style={{ top: "100px" }}
          >

            <div className="card-body p-4">

              <h4 className="fw-bold mb-4">
                ORDER SUMMARY
              </h4>


              <div className="d-flex gap-3 mb-4">

                <img
                  src={product.img}
                  alt={product.name}
                  style={{
                    width: "120px",
                    height: "150px",
                    objectFit: "cover"
                  }}
                  className="rounded"
                />


                <div>

                  <h6 className="fw-bold">
                    {product.name}
                  </h6>

                  <p className="text-secondary text-uppercase small">
                    {product.category}
                  </p>

                  <h5 className="fw-bold">
                    ₹{product.price}
                  </h5>

                  <p className="mb-0">
                    Quantity: 1
                  </p>

                </div>

              </div>


              <hr />


              <div className="d-flex justify-content-between mb-2">

                <span>
                  Product Price
                </span>

                <span>
                  ₹{product.price}
                </span>

              </div>


              <div className="d-flex justify-content-between mb-2">

                <span>
                  Delivery
                </span>

                <span className="text-success fw-semibold">
                  FREE
                </span>

              </div>


              <hr />


              <div className="d-flex justify-content-between">

                <h5 className="fw-bold">
                  TOTAL
                </h5>

                <h5 className="fw-bold">
                  ₹{product.price}
                </h5>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Delivery;