import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function Category() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const [data, setData] = useState([]);
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const search = searchParams.get("search") || "";

  useEffect(() => {
    setLoading(true);

    if (category === "search") {
      const categories = [
        "shirt",
        "tshirt",
        "shoes",
        "polo-shirt",
        "pent",
        "cargo-pent",
        "jackets",
        "hoodies",
        "watch",
        "perfume",
        "footwear",
        "backpack"
      ];

      Promise.all(
        categories.map((item) =>
          axios
            .get(`https://wrogn-clone-react-1.onrender.com/${item}`)
            .then((res) =>
              res.data.map((product) => ({
                ...product,
                category: product.category || item
              }))
            )
            .catch(() => [])
        )
      )
        .then((results) => {
          setData(results.flat());
        })
        .finally(() => {
          setLoading(false);
        });

      return;
    }

    axios
      .get(`https://wrogn-clone-react-1.onrender.com/${category}`)
      .then((res) => {
        const products = Array.isArray(res.data)
          ? res.data.map((item) => ({
              ...item,
              category: item.category || category
            }))
          : [];

        setData(products);
      })
      .catch((err) => {
        console.log(err);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  const filteredData = data.filter((item) => {
    if (!search) {
      return true;
    }

    const text = search.toLowerCase();

    return (
      item.name?.toLowerCase().includes(text) ||
      item.category?.toLowerCase().includes(text)
    );
  });

  const sortedData = [...filteredData].sort((a, b) => {
    if (sort === "low") {
      return Number(a.price) - Number(b.price);
    }

    if (sort === "high") {
      return Number(b.price) - Number(a.price);
    }

    if (sort === "nameAZ") {
      return (a.name || "").localeCompare(b.name || "");
    }

    if (sort === "nameZA") {
      return (b.name || "").localeCompare(a.name || "");
    }

    return 0;
  });

  const handleProductClick = (item) => {
    const productCategory = item.category || category;
    navigate(`/${productCategory}/${item.id}`);
  };

  return (
    <div className="container mt-5 mb-5">

      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">

        <h2 className="text-uppercase mb-0">
          {search ? `Search Result: ${search}` : category}
        </h2>

        <select
          className="form-select"
          style={{ width: "220px" }}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="nameAZ">Name: A to Z</option>
          <option value="nameZA">Name: Z to A</option>
        </select>

      </div>

      {loading ? (
        <div className="text-center py-5">
          <div
            className="spinner-border"
            role="status"
          >
            <span className="visually-hidden">
              Loading...
            </span>
          </div>
        </div>
      ) : sortedData.length === 0 ? (

        <div className="text-center py-5">
          <h3>No Product Found</h3>

          {search && (
            <p className="text-secondary">
              "{search}" no product found.
            </p>
          )}
        </div>

      ) : (

        <div className="row">

          {sortedData.map((item, index) => (

            <div
              className="col-lg-3 col-md-4 col-sm-6 mb-4"
              key={`${item.category}-${item.id}-${index}`}
            >

              <div className="card h-100 shadow-sm border-0">

                <img
                  src={item.img}
                  className="card-img-top"
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    cursor: "pointer"
                  }}
                  alt={item.name || item.category}
                  onClick={() => handleProductClick(item)}
                />

                <div className="card-body">

                  <p className="product-name fw-bold text-secondary mb-2">
                    {item.name}
                  </p>

                  <p className="text-secondary text-uppercase mb-2">
                    {item.category}
                  </p>

                  <div className="d-flex justify-content-between align-items-center">

                    <h6 className="fw-bold mb-0">
                      ₹{item.price}{" "}
                      <span className="text-success">
                        (50% off)
                      </span>
                    </h6>

                    {item.rating && (
                      <span className="badge bg-dark">
                        {item.rating} ★
                      </span>
                    )}

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Category;