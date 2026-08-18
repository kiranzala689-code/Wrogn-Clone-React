import React from "react";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer
      className="text-white"
      style={{
        backgroundColor: "#111300",
        padding: "70px 5% 20px"
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-12 mb-5">
            <div
              className="fw-bold mb-3"
              style={{
                fontSize: "55px",
                color: "#ffff00",
                lineHeight: "1"
              }}
            >
              W
            </div>

            <h2
              className="mb-4"
              style={{
                color: "#999999",
                fontSize: "42px",
                fontWeight: "400",
                letterSpacing: "8px",
                lineHeight: "1.35"
              }}
            >
              FOR THE RIGHT
              <br />
              KIND OF MAN.
            </h2>

            <p
              className="mb-5"
              style={{
                color: "#999999",
                letterSpacing: "2px"
              }}
            >
              © 2024, Wrogn Powered by TMRW
            </p>

            <div className="d-flex gap-4">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className="bi bi-twitter-x"></i>
              </a>

              <a
                href="https://www.pinterest.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className="bi bi-pinterest"></i>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="footer-heading">
              HELP
            </h6>

            <ul className="list-unstyled footer-list">
              <li>My Account</li>
              <li>Privacy Policy</li>
              <li>Anti Corruption Policy</li>
              <li>Whistle Blower Policy</li>
              <li>Terms & Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <h6 className="footer-heading">
              ORDER SUPPORT
            </h6>

            <ul className="list-unstyled footer-list">
              <li>Track Return And Exchange</li>
              <li>Return & Refund Policy</li>
              <li>FAQ</li>
              <li>Shipping Policy</li>
              <li>Cancellation</li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 mb-4">
            <h6 className="footer-heading">
              ABOUT US
            </h6>

            <ul className="list-unstyled footer-list">
              <li>About Us</li>
              <li>Find a Store</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
      </div>

      <button
        onClick={scrollTop}
        className="btn btn-light position-fixed bottom-0 end-0 m-4 rounded-0"
        style={{
          width: "35px",
          height: "35px"
        }}
      >
        <i className="bi bi-chevron-up"></i>
      </button>
    </footer>
  );
}

export default Footer;