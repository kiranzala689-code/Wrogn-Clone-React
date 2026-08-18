import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

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

  useEffect(() => {

    const text = search.toLowerCase().trim();

    if (text === "") {
      setSuggestions([]);
      return;
    }

    const result = categories.filter((category) =>
      category.toLowerCase().includes(text)
    );

    setSuggestions(result);

  }, [search]);


  const handleSearch = (e) => {

    e.preventDefault();

    const value = search.trim();

    if (value !== "") {

      navigate(
        `/search?search=${encodeURIComponent(value)}`
      );

      setSearch("");
      setSuggestions([]);
      setSearchOpen(false);

    }

  };


  const openCategory = (category) => {

    navigate(`/${category}`);

    setSearch("");
    setSuggestions([]);
    setSearchOpen(false);

  };


  const toggleSearch = () => {

    setSearchOpen(!searchOpen);
    setSearch("");
    setSuggestions([]);

  };


  return (
    <>

      <div className="bg-dark text-white py-2">

        <marquee>
          Upto | 50% Off&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Upto | 50% Off&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Upto | 50% Off&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Upto | 50% Off
        </marquee>

      </div>


      <nav className="navbar navbar-expand-lg bg-white shadow-sm">

        <div className="container-fluid px-3 px-lg-4">

          <Link
            to="/"
            className="navbar-brand"
          >

            <img
              src="https://wrogn.com/cdn/shop/files/logo_icon_1_bd4a99ba-1c20-43de-81ff-1f5fb0685b8e.svg?v=1736489168&width=50"
              alt="Logo"
              width="50"
              height="50"
            />

          </Link>


          <div className="d-flex align-items-center gap-1 d-lg-none">

            <button
              type="button"
              className="btn border-0 p-2"
              onClick={toggleSearch}
            >

              <i
                className={
                  searchOpen
                    ? "bi bi-x-lg fs-5"
                    : "bi bi-search fs-5"
                }
              ></i>

            </button>


            <Link
              to="/cart"
              className="btn border-0 p-2"
            >

              <i className="bi bi-cart3 fs-5"></i>

            </Link>


            <button
              className="btn border-0 p-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
            >

              <span
                style={{
                  fontSize: "28px",
                  lineHeight: "1",
                  display: "block"
                }}
              >
                ☰
              </span>

            </button>

          </div>


          <div
            className="collapse navbar-collapse"
            id="mainNavbar"
          >

            {!searchOpen && (

              <ul className="navbar-nav mx-auto">

                <li className="nav-item dropdown">

                  <a
                    className="nav-link dropdown-toggle text-dark fw-semibold"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    BESTSELLER
                  </a>

                  <ul className="dropdown-menu">

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/tshirt"
                      >
                        T-SHIRTS
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/shirt"
                      >
                        SHIRTS
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/jackets"
                      >
                        JACKETS
                      </Link>
                    </li>

                  </ul>

                </li>


                <li className="nav-item dropdown">

                  <a
                    className="nav-link dropdown-toggle text-dark fw-semibold"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    WINTERWEAR
                  </a>

                  <ul className="dropdown-menu">

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/hoodies"
                      >
                        HOODIES
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/jackets"
                      >
                        JACKETS
                      </Link>
                    </li>

                  </ul>

                </li>


                <li className="nav-item dropdown">

                  <a
                    className="nav-link text-dark dropdown-toggle fw-semibold"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    ALL PRODUCTS
                  </a>

                  <ul className="dropdown-menu">

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/shoes"
                      >
                        SHOES
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/tshirt"
                      >
                        T-SHIRTS
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/shirt"
                      >
                        SHIRTS
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/watch"
                      >
                        WATCH
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/perfume"
                      >
                        PERFUME
                      </Link>
                    </li>

                  </ul>

                </li>


                <li className="nav-item dropdown">

                  <a
                    className="nav-link text-dark dropdown-toggle fw-semibold"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    FOOTWEAR
                  </a>

                  <ul className="dropdown-menu">

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/footwear"
                      >
                        FOOTWEAR
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/shoes"
                      >
                        SHOES
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/slider"
                      >
                        SLIDERS
                      </Link>
                    </li>

                  </ul>

                </li>


                <li className="nav-item dropdown">

                  <a
                    className="nav-link text-dark dropdown-toggle fw-semibold"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    BOTTOMWEAR
                  </a>

                  <ul className="dropdown-menu">

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/pent"
                      >
                        PANTS
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="dropdown-item"
                        to="/cargo-pent"
                      >
                        CARGO PANTS
                      </Link>
                    </li>

                  </ul>

                </li>


                <li className="nav-item">

                  <Link
                    className="nav-link text-dark fw-semibold"
                    to="/backpack"
                  >
                    BACKPACKS
                  </Link>

                </li>


                <li className="nav-item">

                  <Link
                    className="nav-link text-dark fw-semibold"
                    to="/polo-shirt"
                  >
                    POLOS
                  </Link>

                </li>

              </ul>

            )}


            {searchOpen && (

              <div className="position-relative flex-grow-1 mx-lg-4 my-3">

                <form
                  onSubmit={handleSearch}
                  className="d-flex"
                >

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Search category..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    autoFocus
                  />

                  <button
                    type="submit"
                    className="btn btn-dark ms-2 px-4"
                  >

                    <i className="bi bi-search"></i>

                  </button>

                </form>


                {suggestions.length > 0 && (

                  <div
                    className="position-absolute bg-white shadow border rounded w-100 mt-1"
                    style={{
                      zIndex: 1050,
                      maxHeight: "300px",
                      overflowY: "auto"
                    }}
                  >

                    {suggestions.map((category) => (

                      <div
                        key={category}
                        className="px-3 py-3 border-bottom fw-semibold"
                        style={{
                          cursor: "pointer"
                        }}
                        onClick={() =>
                          openCategory(category)
                        }
                      >

                        {category.toUpperCase()}

                      </div>

                    ))}

                  </div>

                )}

              </div>

            )}


            <div className="d-none d-lg-flex align-items-center gap-2 ms-lg-3">

              <button
                type="button"
                className="btn border-0"
                onClick={toggleSearch}
              >

                <i
                  className={
                    searchOpen
                      ? "bi bi-x-lg"
                      : "bi bi-search"
                  }
                ></i>

              </button>


              <Link
                to="/cart"
                className="btn btn-dark d-flex align-items-center gap-2 px-3"
              >

                <i className="bi bi-cart3"></i>

                <span>
                  Cart
                </span>

              </Link>

            </div>

          </div>

        </div>

      </nav>

    </>
  );
}

export default Nav;