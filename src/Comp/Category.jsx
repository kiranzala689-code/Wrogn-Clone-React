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

    axios
      .get("https://wrogn-clone-react-1.onrender.com/data")
      .then((res) => {

        if (category === "search") {

          setData(res.data);

        } else {

          const result = res.data.filter(
            (item) => item.category === category
          );

          setData(result);

        }

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
      return a.name.localeCompare(b.name);
    }

    if (sort === "nameZA") {
      return b.name.localeCompare(a.name);
    }

    return 0;

  });


  return (

    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">

        <h2 className="text-uppercase mb-0">

          {search
            ? `Search Result: ${search}`
            : category}

        </h2>

        <select
          className="form-select"
          style={{ width: "220px" }}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >

          <option value="">Sort By</option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

          <option value="nameAZ">
            Name: A to Z
          </option>

          <option value="nameZA">
            Name: Z to A
          </option>

        </select>

      </div>


      <div className="row">

        {loading ? (

          <div className="text-center py-5">

            <div
              className="spinner-border text-dark"
              style={{
                width: "3rem",
                height: "3rem"
              }}
              role="status"
            >
              <span className="visually-hidden">
                Loading...
              </span>
            </div>

            <p className="mt-3 fw-semibold">
              Loading products...
            </p>

          </div>

        ) : sortedData.length === 0 ? (

          <div className="text-center py-5">

            <h3>
              No Product Found
            </h3>

            <p className="text-secondary">
              "{search}" no product found.
            </p>

          </div>

        ) : (

          sortedData.map((item, index) => (

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
                  onClick={() =>
                    navigate(`/${item.category}/${item.id}`)
                  }
                />

                <div className="card-body">

                  <p className="product-name fw-bold text-secondary">
                    {item.name}
                  </p>

                  <p className="text-secondary text-uppercase">
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

          ))

        )}

      </div>

    </div>

  );

}

export default Category;