
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SeasonTopPicks from "./SeasonToppicks";

const API_URL = "https://wrogn-clone-react-1.onrender.com";

const images = [
  "https://wrogn.com/cdn/shop/files/WEBSITE-BANNER_c80a47d2-f499-423c-b65f-4edc8127e43b.jpg?v=1778529168",
  "https://wrogn.com/cdn/shop/files/WEBSITE-_BANNER-2BANNER-WROGN-ACTIVE.jpg?v=1777556912",
  "https://wrogn.com/cdn/shop/files/WEBSITE-BANNER-SS26.jpg?v=1781178696",
  "https://wrogn.com/cdn/shop/files/WEBISTE-BANNER-2000X782_1.jpg?v=1782198223",
  "https://wrogn.com/cdn/shop/files/WEBSITE-BANNER-shirts_fe897867-25f1-4fae-9cc4-224fd000b2e9.jpg?v=1781179123"
];

const categories = [
  {
    title: "SHIRTS",
    api: "shirt"
  },
  {
    title: "T-SHIRTS",
    api: "tshirt"
  },
  {
    title: "SHOES",
    api: "shoes"
  },
  {
    title: "POLO SHIRTS",
    api: "polo-shirt"
  },
  {
    title: "PANTS",
    api: "pent"
  },
  {
    title: "CARGO",
    api: "cargo"
  },
  {
    title: "WATCHES",
    api: "watch"
  },
  {
    title: "JACKETS",
    api: "jacket"
  }
];

const trendingCategories = [
  {
    title: "T-SHIRTS",
    category: "tshirt",
    image:
      "https://wrogn.com/cdn/shop/files/T-SHIRTS_copy._e2be4c54-1cd1-421d-bdbe-60ffbd6deefd.jpg?v=1774011417&width=720"
  },
  {
    title: "SHIRTS",
    category: "shirt",
    image:
      "https://wrogn.com/cdn/shop/files/SHIRTS_copy..jpg?v=1774015803&width=720"
  },
  {
    title: "SHOES",
    category: "shoes",
    image:
      "https://wrogn.com/cdn/shop/files/FOOTWEAR_1_copy..jpg?v=1774016005&width=720"
  },
  {
    title: "POLO",
    category: "polo-shirt",
    image:
      "https://wrogn.com/cdn/shop/files/POLO_00cc7cbf-b0f7-4d1b-ac2e-0f3c897cd728.jpg?v=1774015943&width=720"
  },
  {
    title: "PANTS",
    category: "pent",
    image:
      "https://wrogn.com/cdn/shop/files/JEANS_copy..jpg?v=1774016034&width=720"
  }
];

function Home() {
  const [categoryProducts, setCategoryProducts] = useState({});
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        setLoading(true);

        const results = await Promise.all(
          categories.map(async (category) => {
            try {
              const response = await axios.get(
                `${API_URL}/${category.api}`
              );

              return {
                api: category.api,
                products: Array.isArray(response.data)
                  ? response.data
                  : []
              };
            } catch (error) {
              console.log(
                `${category.api} API error`,
                error
              );

              return {
                api: category.api,
                products: []
              };
            }
          })
        );

        const productData = {};

        results.forEach((result) => {
          productData[result.api] = result.products;
        });

        setCategoryProducts(productData);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % images.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(
      (prev) => (prev + 1) % images.length
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0
        ? images.length - 1
        : prev - 1
    );
  };

  const goToCategory = (category) => {
    navigate(`/${category}`);
  };

  const goToProduct = (category, id) => {
    navigate(`/${category}/${id}`);
  };

  return (
    <main className="home-page">

      <section className="home-banner">

        <img
          src={images[current]}
          alt="WROGN Banner"
          className="home-banner-image"
        />

        <button
          type="button"
          className="banner-arrow banner-arrow-left"
          onClick={prevSlide}
        >
          ❮
        </button>

        <button
          type="button"
          className="banner-arrow banner-arrow-right"
          onClick={nextSlide}
        >
          ❯
        </button>

        <div className="banner-dots">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              className={
                current === index
                  ? "banner-dot active"
                  : "banner-dot"
              }
              onClick={() =>
                setCurrent(index)
              }
            />
          ))}
        </div>

      </section>


      <section className="shop-category-section">

        <div className="section-heading">
          <h2>SHOP BY CATEGORY</h2>
        </div>

        {loading ? (
          <div className="home-loading">
            <div className="home-spinner"></div>
            <p>Loading products...</p>
          </div>
        ) : (

          categories.map((category) => {

            const products =
              categoryProducts[category.api] || [];

            if (products.length === 0) {
              return null;
            }

            return (
              <div
                className="home-category-block"
                key={category.api}
              >

                <div className="category-heading">

                  <h3>
                    {category.title}
                  </h3>

                  <button
                    type="button"
                    onClick={() =>
                      goToCategory(category.api)
                    }
                  >
                    VIEW ALL
                  </button>

                </div>


                <div className="home-product-grid">

                  {products.slice(0, 4).map(
                    (item, index) => (

                      <article
                        className="home-product-card"
                        key={`${category.api}-${item.id}-${index}`}
                        onClick={() =>
                          goToProduct(
                            category.api,
                            item.id
                          )
                        }
                      >

                        <div className="home-product-image-wrap">

                          <img
                            src={item.img}
                            alt={
                              item.name ||
                              category.title
                            }
                            className="home-product-image"
                            loading="lazy"
                          />

                          {item.rating && (
                            <span className="home-rating">
                              {item.rating} ★
                            </span>
                          )}

                        </div>


                        <div className="home-product-info">

                          <h4>
                            {item.name}
                          </h4>

                          <p>
                            {category.title}
                          </p>


                          <div className="home-product-price-row">

                            <strong>
                              ₹{item.price}
                            </strong>

                            {item.rating && (
                              <span>
                                {item.rating} ★
                              </span>
                            )}

                          </div>


                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();

                              goToProduct(
                                category.api,
                                item.id
                              );
                            }}
                          >
                            SHOP NOW
                          </button>

                        </div>

                      </article>

                    )
                  )}

                </div>

              </div>
            );
          })

        )}

      </section>


      <section className="home-video-section">

        <video
          className="home-video"
          autoPlay
          muted
          loop
          playsInline
          controls
        >

          <source
            src="https://wrogn.com/cdn/shop/videos/c/vp/1aec96c21003479e8820ba118f08b7be/1aec96c21003479e8820ba118f08b7be.HD-720p-3.0Mbps-57504336.mp4?v=0"
            type="video/mp4"
          />

        </video>

      </section>


      <section className="trending-section">

        <div className="trending-heading">
          <h2>TRENDING CATEGORIES</h2>
        </div>


        <div className="trending-grid">

          {trendingCategories.map(
            (item, index) => (

              <div
                className={
                  index < 2
                    ? "trending-card trending-wide"
                    : "trending-card"
                }
                key={item.category}
                onClick={() =>
                  goToCategory(
                    item.category
                  )
                }
              >

                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="trending-overlay">

                  <h3>
                    {item.title}
                  </h3>

                  <span>
                    SHOP NOW →
                  </span>

                </div>

              </div>

            )
          )}

        </div>

      </section>


      <section className="season-section">
        <SeasonTopPicks />
      </section>

    </main>
  );
}

export default Home;

