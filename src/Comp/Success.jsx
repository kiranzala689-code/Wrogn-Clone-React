import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Success() {

  const location = useLocation();
  const navigate = useNavigate();

  const total = location.state?.total || 0;

  return (

    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card border-0 shadow text-center">

            <div className="card-body p-5">

              <div
                className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                style={{
                  width: "80px",
                  height: "80px",
                  fontSize: "40px"
                }}
              >
                ✓
              </div>

              <h2 className="fw-bold">
                ORDER PLACED
              </h2>

              <p className="text-secondary">
                Your order has been placed successfully.
              </p>

              <h4 className="fw-bold">
                ₹{total}
              </h4>

              <p className="small text-secondary">
                Thank you for shopping with us.
              </p>

              <button
                className="btn btn-dark px-5 py-3 mt-3"
                onClick={() => navigate("/")}
              >
                CONTINUE SHOPPING
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Success;