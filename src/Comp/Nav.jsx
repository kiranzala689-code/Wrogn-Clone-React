import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Comp/Nav.css";

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

function Nav() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const text = search.toLowerCase().trim();

    if (!text) {
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

    if (value) {
      navigate(`/search?search=${encodeURIComponent(value)}`);
      closeSearch();
    }
  };

  const openCategory = (category) => {
    navigate(`/${category}`);
    closeSearch();
  };

  const toggleSearch = () => {
    setSearchOpen((prev) => !prev);
    setSearch("");
    setSuggestions([]);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearch("");
    setSuggestions([]);
  };

  return (
    <>
      <div className="offer-bar bg-dark text-white">
        <div className="offer-text">
          Upto | 50% Off&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Upto | 50% Off&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Upto | 50% Off&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Upto | 50% Off
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container-fluid px-3 px-lg-4">

          <Link to="/" className="navbar-brand">
            <img
              src="https://wrogn.com/cdn/shop/files/logo_icon_1_bd4a99ba-1c20-43de-81ff-1f5fb0685b8e.svg?v=1736489168&width=50"
              alt="Wrogn Logo"
              width="50"
              height="50"
            />
          </Link>

          <div className="collapse navbar-collapse" id="mainNavbar">

            <ul className="navbar-nav mx-auto">

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-dark fw-semibold border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  BESTSELLER
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/tshirt">
                      T-SHIRTS
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/shirt">
                      SHIRTS
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/jackets">
                      JACKETS
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-dark fw-semibold border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  WINTERWEAR
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/hoodies">
                      HOODIES
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/jackets">
                      JACKETS
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-dark fw-semibold border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  ALL PRODUCTS
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/shoes">
                      SHOES
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/tshirt">
                      T-SHIRTS
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/shirt">
                      SHIRTS
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/watch">
                      WATCH
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/perfume">
                      PERFUME
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-dark fw-semibold border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  FOOTWEAR
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/footwear">
                      FOOTWEAR
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/shoes">
                      SHOES
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/slider">
                      SLIDERS
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle text-dark fw-semibold border-0 bg-transparent"
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  BOTTOMWEAR
                </button>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/pent">
                      PANTS
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/cargo-pent">
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

            <div className="d-none d-lg-flex align-items-center gap-2 ms-lg-3">

              <div className="desktop-search-wrapper">

                <button
                  type="button"
                  className="desktop-search-button btn border-0 p-2"
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

                {searchOpen && (
                  <div className="search-dropdown">

                    <form onSubmit={handleSearch}>
                      <div className="input-group">

                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search category..."
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          autoFocus
                        />

                        <button
                          className="btn btn-dark"
                          type="submit"
                        >
                          <i className="bi bi-search"></i>
                        </button>

                      </div>
                    </form>

                    {suggestions.length > 0 && (
                      <div className="suggestion-list">

                        <div className="suggestion-heading">
                          CATEGORIES
                        </div>

                        {suggestions.map((category) => (
                          <button
                            key={category}
                            type="button"
                            className="suggestion-item"
                            onClick={() => openCategory(category)}
                          >

                            <span className="suggestion-icon">
                              <i className="bi bi-search"></i>
                            </span>

                            <span className="suggestion-content">

                              <strong>
                                {category
                                  .replace("-", " ")
                                  .toUpperCase()}
                              </strong>

                              <small>
                                View products
                              </small>

                            </span>

                            <i className="bi bi-arrow-right suggestion-arrow"></i>

                          </button>
                        ))}

                      </div>
                    )}

                    {search.trim() && suggestions.length === 0 && (
                      <div className="no-suggestion">
                        <i className="bi bi-search"></i>
                        <span>No category found</span>
                      </div>
                    )}

                  </div>
                )}

              </div>

              <Link
                to="/cart"
                className="btn btn-dark d-flex align-items-center gap-2 px-3"
              >
                <i className="bi bi-cart3"></i>
                <span>Cart</span>
              </Link>

            </div>

          </div>

          {/* MOBILE ACTIONS */}

          <div className="mobile-actions d-lg-none">

            <div className="mobile-search-wrapper">

              {!searchOpen && (
                <button
                  type="button"
                  className="mobile-action-button"
                  onClick={toggleSearch}
                  aria-label="Open Search"
                >
                  <i className="bi bi-search"></i>
                </button>
              )}

              {searchOpen && (
                <div className="mobile-search-dropdown">

                  <form onSubmit={handleSearch}>

                    <div className="mobile-search-box">

                      <input
                        type="text"
                        className="mobile-search-input"
                        placeholder="Search category..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        autoFocus
                      />

                      <button
                        type="submit"
                        className="mobile-search-submit"
                        aria-label="Search"
                      >
                        <i className="bi bi-search"></i>
                      </button>

                      <button
                        type="button"
                        className="mobile-search-close"
                        onClick={closeSearch}
                        aria-label="Close Search"
                      >
                        <i className="bi bi-x-lg"></i>
                      </button>

                    </div>

                  </form>

                  {suggestions.length > 0 && (
                    <div className="suggestion-list">

                      <div className="suggestion-heading">
                        CATEGORIES
                      </div>

                      {suggestions.map((category) => (
                        <button
                          key={category}
                          type="button"
                          className="suggestion-item"
                          onClick={() => openCategory(category)}
                        >

                          <span className="suggestion-icon">
                            <i className="bi bi-search"></i>
                          </span>

                          <span className="suggestion-content">

                            <strong>
                              {category
                                .replace("-", " ")
                                .toUpperCase()}
                            </strong>

                            <small>
                              View products
                            </small>

                          </span>

                          <i className="bi bi-arrow-right suggestion-arrow"></i>

                        </button>
                      ))}

                    </div>
                  )}

                  {search.trim() && suggestions.length === 0 && (
                    <div className="no-suggestion">
                      <i className="bi bi-search"></i>
                      <span>No category found</span>
                    </div>
                  )}

                </div>
              )}

            </div>

            <Link
              to="/cart"
              className="mobile-action-button"
              aria-label="Cart"
            >
              <i className="bi bi-cart3"></i>
            </Link>

            <button
              className="mobile-action-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNavbar"
              aria-controls="mainNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="mobile-menu-icon">
                ☰
              </span>
            </button>

          </div>

        </div>
      </nav>
    </>
  );
}

export default Nav;