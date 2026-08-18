import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ShirtSlider() {

  const [products, setProducts] = useState([]);
  const [start, setStart] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://wrogn-clone-react-1.onrender.com/shirt")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const nextSlide = () => {
    if (start < products.length - 3) {
      setStart(start + 1);
    }
  };

  const prevSlide = () => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  return (
    <div
      className="container-fluid mt-5 py-5"
      style={{
        backgroundImage:
          "url('https://wrogn.com/cdn/shop/files/DESKTOP-BANNER-1.webp?v=1741677539')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        
      }}
    >

      <div className="row align-items-center">

        <div className="col-lg-5 text-white px-5 mb-4 mb-lg-0">

        </div>

        <div className="col-lg-7  position-relative">

          <button
            className="btn btn-light rounded-circle position-absolute top-50 start-0 translate-middle-y shadow"
            onClick={prevSlide}
            disabled={start === 0}
            style={{
              width: "45px",
              height: "45px",
              zIndex: 5
            }}
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <div className="row  g-3">

            {products
              .slice(start, start + 3)
              .map((item) => (

                <div
                  className="col-4 "
                  key={item.id}
                >

                  <div
                    className="card border-0 h-100 shadow"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/shirt/${item.id}`)
                    }
                  >

                    <img
                      src={item.img}
                      alt="Shirt"
                      className="card-img-top"
                      style={{
                        height: "300px",
                        objectFit: "cover"
                      }}
                    />

                    <div className="bg-transparent  d-flex  gap-3 ">
                   <p className="fw-bold mb-0">
                        ₹{item.price}
                      </p>
                      <p className="fw-semibold product-name mb-2">
                        {item.name}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

          </div>

          <button
            className="btn btn-light rounded-circle position-absolute top-50 end-0 translate-middle-y shadow"
            onClick={nextSlide}
            disabled={start >= products.length - 3}
            style={{
              width: "45px",
              height: "45px",
              zIndex: 5
            }}
          >
            <i className="bi bi-chevron-right"></i>
          </button>

        </div>

      </div>

    </div>
  );
}

export default ShirtSlider;