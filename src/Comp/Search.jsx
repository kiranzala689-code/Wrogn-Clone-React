import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

function Search() {

  const [products, setProducts] = useState([]);

  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const search = searchParams.get("search") || "";

  useEffect(() => {

    const categories = [
      "shoes",
      "watch",
      "shirt",
      "perfume",
      "tshirt",
      "polo-shirt",
      "jackets",
      "hoodies",
      "footwear",
      "slider",
      "pent",
      "cargo-pent",
      "backpack"
    ];

    const fetchProducts = async () => {

      try {

        const requests = categories.map((category) =>
          axios.get(`https://wrogn-clone-react-1.onrender.com/${category}`)
        );

        const responses = await Promise.all(requests);

        let allProducts = [];

        responses.forEach((response) => {

          if (Array.isArray(response.data)) {

            allProducts = [
              ...allProducts,
              ...response.data
            ];

          }

        });

        const text = search.toLowerCase().trim();

        const result = allProducts.filter((item) => {

          return (
            item.name?.toLowerCase().includes(text) ||
            item.category?.toLowerCase().includes(text) ||
            item.price?.toString().includes(text)
          );

        });

        setProducts(result);

      } catch (error) {

        console.log("Search Error:", error);

      }

    };

    fetchProducts();

  }, [search]);


  return (

    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h2 className="fw-bold text-uppercase">
          Search Result
        </h2>

        <span className="text-secondary">
          {products.length} Products
        </span>

      </div>


      <p className="mb-4">

        Search:

        <strong className="ms-2">
          {search}
        </strong>

      </p>


      {products.length === 0 ? (

        <div className="text-center py-5">

          <h3 className="fw-bold">
            No Product Found
          </h3>

          <p className="text-secondary">
            "{search}" ke naam ka koi product nahi mila.
          </p>

        </div>

      ) : (

        <div className="row">

          {products.map((item, index) => (

            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={`${item.category}-${item.id}-${index}`}
            >

              <div className="card h-100 border-0 shadow-sm">

                <img
                  src={item.img}
                  alt={item.name}
                  className="card-img-top"
                  style={{
                    height: "320px",
                    objectFit: "cover",
                    cursor: "pointer"
                  }}
                  onClick={() =>
                    navigate(`/${item.category}/${item.id}`)
                  }
                />

                <div className="card-body">

                  <h6 className="fw-bold">
                    {item.name}
                  </h6>

                  <p className="text-secondary text-uppercase small mb-2">
                    {item.category}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">

                    <h5 className="fw-bold mb-0">
                      ₹{item.price}
                    </h5>

                    {item.rating && (

                      <span className="badge bg-dark">
                        {item.rating} ★
                      </span>

                    )}

                  </div>

                  <button
                    className="btn btn-dark w-100 mt-3"
                    onClick={() =>
                      navigate(`/${item.category}/${item.id}`)
                    }
                  >
                    VIEW PRODUCT
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}

export default Search;