import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    incrementQuantity,
    decrementQuantity,
    removeProduct
} from "./redux/Action";
import { useNavigate } from "react-router-dom";

function Cart() {

    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let total = 0;

    cart.forEach((item) => {
        total += item.price * item.quantity;
    });

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    function buyNow() {
        navigate("/delivery", {
            state: {
                products: cart,
                total: total
            }
        });
    }

    return (
        <div className="bg-light min-vh-100">
            <div className="container py-5">

                <div className="d-flex justify-content-between align-items-center border-bottom border-dark border-2 pb-3 mb-4">
                    <div>
                        <h1 className="fw-bold mb-1">
                            MY BAG
                        </h1>
                        <small className="text-secondary">
                            {totalItems} ITEMS
                        </small>
                    </div>

                    <span className="fw-bold">
                        SHOPPING BAG
                    </span>
                </div>

                {cart.length === 0 ? (

                    <div className="bg-white text-center py-5 shadow-sm">
                        <div className="display-3 mb-3">
                            🛍️
                        </div>

                        <h3 className="fw-bold">
                            YOUR BAG IS EMPTY
                        </h3>

                        <p className="text-secondary">
                            Looks like you haven't added anything yet.
                        </p>

                        <button
                            className="btn btn-dark px-4 py-3 fw-bold"
                            onClick={() => navigate("/")}
                        >
                            CONTINUE SHOPPING
                        </button>
                    </div>

                ) : (

                    <div className="row g-4">

                        <div className="col-lg-8">

                            {cart.map((item) => (

                                <div
                                    className="card border-0 shadow-sm mb-3"
                                    key={item.id}
                                >

                                    <div className="row g-0">

                                        <div className="col-md-4">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="img-fluid w-100 h-100"
                                                style={{
                                                    minHeight: "260px",
                                                    objectFit: "cover"
                                                }}
                                            />
                                        </div>

                     <div className="col-md-8">

                                 <div className="card-body h-100 d-flex flex-column justify-content-between p-4">

                                                <div>

                                                    <div className="d-flex justify-content-between">

                                                        <h4 className="fw-bold text-secondary text-uppercase">
                                                            {item.name}
                                                        </h4>

                                                        <button
                                                            className="btn btn-sm btn-outline-danger"
                                                            onClick={() =>
                                                                dispatch(
                                                                    removeProduct(item.id)
                                                                )
                                                            }
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </button>

                                                    </div>

                                                    <p className="text-secondary text-uppercase small mb-2">
                                                        {item.category}
                                                    </p>

                                                    <h5 className="fw-bold">
                                                        ₹{item.price}
                                                    </h5>

                                                </div>

                                                <div>

                                                    <div className="d-flex align-items-center mt-4">

                                                        <span className="fw-bold me-3">
                                                            QTY
                                                        </span>

                                                        <div className="btn-group">

                                                            <button
                                                                className="btn btn-dark"
                                                                onClick={() =>
                                                                    dispatch(
                                                                        decrementQuantity(item.id)
                                                                    )
                                                                }
                                                            >
                                                                −
                                                            </button>

                                                            <span className="btn btn-outline-dark disabled px-3">
                                                                {item.quantity}
                                                            </span>

                                                            <button
                                                                className="btn btn-dark"
                                                                onClick={() =>
                                                                    dispatch(
                                                                        incrementQuantity(item.id)
                                                                    )
                                                                }
                                                            >
                                                                +
                                                            </button>

                                                        </div>

                                                    </div>

                                                    <div className="d-flex justify-content-between align-items-center border-top mt-4 pt-3">

                                                        <span className="text-secondary">
                                                            PRODUCT TOTAL
                                                        </span>

                                                        <h5 className="fw-bold mb-0">
                                                            ₹{item.price * item.quantity}
                                                        </h5>

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                        <div className="col-lg-4">

                            <div
                                className="card border-0 shadow-sm sticky-top"
                                style={{ top: "20px" }}
                            >

                                <div className="card-body p-4">

                                    <h4 className="fw-bold mb-4">
                                        ORDER SUMMARY
                                    </h4>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span>TOTAL ITEMS</span>
                                        <strong>{totalItems}</strong>
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span>SUBTOTAL</span>
                                        <strong>₹{total}</strong>
                                    </div>

                                    <div className="d-flex justify-content-between mb-3">
                                        <span>DELIVERY</span>
                                        <strong className="text-success">
                                            FREE
                                        </strong>
                                    </div>

                                    <hr />

                                    <div className="d-flex justify-content-between mb-4">
                                        <h4 className="fw-bold">
                                            TOTAL
                                        </h4>

                                        <h4 className="fw-bold">
                                            ₹{total}
                                        </h4>
                                    </div>

                                    <button
                                        className="btn btn-dark w-100 py-3 fw-bold"
                                        onClick={buyNow}
                                    >
                                        BUY NOW
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </button>

                                    <div className="text-center mt-3">
                                        <small className="text-secondary">
                                            <i className="bi bi-shield-check me-1"></i>
                                            Secure & Safe Checkout
                                        </small>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                )}

            </div>
        </div>
    );
}

export default Cart;