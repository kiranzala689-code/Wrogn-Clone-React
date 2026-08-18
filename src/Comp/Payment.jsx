import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Payment() {

  const location = useLocation();
  const navigate = useNavigate();

  const products = location.state?.products || [];
  const delivery = location.state?.delivery || {};

  const [method, setMethod] = useState("upi");

  const [upi, setUpi] = useState("");

  const [card, setCard] = useState({
    number: "",
    name: "",
    expiry: "",
    cvv: ""
  });

  const total = products.reduce(
    (sum, item) =>
      sum + Number(item.price) * Number(item.quantity || 1),
    0
  );

  const handleCardChange = (e) => {
    setCard({
      ...card,
      [e.target.name]: e.target.value
    });
  };

  const handlePayment = (e) => {

    e.preventDefault();

    if (method === "upi" && upi.trim() === "") {
      alert("Please enter UPI ID");
      return;
    }

    if (method === "card") {

      if (
        card.number === "" ||
        card.name === "" ||
        card.expiry === "" ||
        card.cvv === ""
      ) {
        alert("Please fill all card details");
        return;
      }

    }

    navigate("/success", {
      state: {
        products: products,
        total: total,
        delivery: delivery,
        paymentMethod: method
      }
    });

  };

  if (products.length === 0) {

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

          <h2 className="fw-bold mb-2">
            PAYMENT
          </h2>

          <p className="text-secondary mb-4">
            Choose your preferred payment method
          </p>

          <div className="card border-0 shadow-sm">

            <div className="card-body p-4">

              <h5 className="fw-bold mb-3">
                SELECT PAYMENT METHOD
              </h5>

              <div className="row g-2 mb-4">

                <div className="col-md-4">

                  <button
                    type="button"
                    className={`btn w-100 py-3 ${
                      method === "upi"
                        ? "btn-dark"
                        : "btn-outline-dark"
                    }`}
                    onClick={() => setMethod("upi")}
                  >
                    <i className="bi bi-phone me-2"></i>
                    UPI
                  </button>

                </div>

                <div className="col-md-4">

                  <button
                    type="button"
                    className={`btn w-100 py-3 ${
                      method === "card"
                        ? "btn-dark"
                        : "btn-outline-dark"
                    }`}
                    onClick={() => setMethod("card")}
                  >
                    <i className="bi bi-credit-card me-2"></i>
                    CARD
                  </button>

                </div>

                <div className="col-md-4">

                  <button
                    type="button"
                    className={`btn w-100 py-3 ${
                      method === "cod"
                        ? "btn-dark"
                        : "btn-outline-dark"
                    }`}
                    onClick={() => setMethod("cod")}
                  >
                    <i className="bi bi-cash me-2"></i>
                    COD
                  </button>

                </div>

              </div>

              {method === "upi" && (

                <div className="border rounded p-4">

                  <h5 className="fw-bold">
                    UPI PAYMENT
                  </h5>

                  <p className="text-secondary small">
                    Enter your UPI ID to continue
                  </p>

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="example@upi"
                    value={upi}
                    onChange={(e) => setUpi(e.target.value)}
                  />

                </div>

              )}

              {method === "card" && (

                <div className="border rounded p-4">

                  <h5 className="fw-bold mb-3">
                    CARD DETAILS
                  </h5>

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Card Number"
                    name="number"
                    value={card.number}
                    onChange={handleCardChange}
                  />

                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Card Holder Name"
                    name="name"
                    value={card.name}
                    onChange={handleCardChange}
                  />

                  <div className="row">

                    <div className="col-6">

                      <input
                        type="text"
                        className="form-control"
                        placeholder="MM/YY"
                        name="expiry"
                        value={card.expiry}
                        onChange={handleCardChange}
                      />

                    </div>

                    <div className="col-6">

                      <input
                        type="password"
                        className="form-control"
                        placeholder="CVV"
                        name="cvv"
                        value={card.cvv}
                        onChange={handleCardChange}
                      />

                    </div>

                  </div>

                </div>

              )}

              {method === "cod" && (

                <div className="border rounded p-4">

                  <h5 className="fw-bold">
                    CASH ON DELIVERY
                  </h5>

                  <p className="text-secondary mb-0">
                    Pay when your order is delivered to you.
                  </p>

                </div>

              )}

              <div className="border-top mt-4 pt-4">

                <div className="d-flex justify-content-between mb-2">

                  <span>
                    Product Total
                  </span>

                  <span>
                    ₹{total}
                  </span>

                </div>

                <div className="d-flex justify-content-between mb-2">

                  <span>
                    Delivery
                  </span>

                  <span className="text-success">
                    FREE
                  </span>

                </div>

                <hr />

                <div className="d-flex justify-content-between">

                  <h5 className="fw-bold">
                    TOTAL
                  </h5>

                  <h5 className="fw-bold">
                    ₹{total}
                  </h5>

                </div>

              </div>

              <button
                className="btn btn-dark w-100 py-3 mt-4 fw-bold"
                onClick={handlePayment}
              >
                {method === "cod"
                  ? "PLACE ORDER"
                  : `PAY ₹${total}`}
              </button>

              <button
                className="btn btn-outline-dark w-100 py-3 mt-2"
                onClick={() => navigate(-1)}
              >
                BACK
              </button>

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

              {products.map((item, index) => (

                <div
                  className="d-flex gap-3 mb-4"
                  key={index}
                >

                  <img
                    src={item.img}
                    alt={item.name}
                    className="rounded"
                    style={{
                      width: "100px",
                      height: "130px",
                      objectFit: "cover"
                    }}
                  />

                  <div>

                    <h6 className="fw-bold">
                      {item.name}
                    </h6>

                    <p className="text-secondary text-uppercase small mb-1">
                      {item.category}
                    </p>

                    <p className="mb-1">
                      Quantity: {item.quantity || 1}
                    </p>

                    <h5 className="fw-bold">
                      ₹{item.price}
                    </h5>

                  </div>

                </div>

              ))}

              <hr />

              <h6 className="fw-bold mb-3">
                DELIVERY ADDRESS
              </h6>

              <p className="mb-1">
                <strong>
                  {delivery.name}
                </strong>
              </p>

              <p className="text-secondary mb-1">
                {delivery.mobile}
              </p>

              <p className="text-secondary mb-1">
                {delivery.address}
              </p>

              <p className="text-secondary mb-1">
                {delivery.city}, {delivery.state}
              </p>

              <p className="text-secondary">
                {delivery.pincode}
              </p>

              <hr />

              <div className="d-flex justify-content-between">

                <span>
                  Total Amount
                </span>

                <strong>
                  ₹{total}
                </strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Payment;