import React from "react";
import Header from "../../components/Header";
import Image from "../../img/hand.png";
import ftPhone from "../../img/ftPhone.jpg";
import ft2Phone from "../../img/ft2Phone.jpg";
import phone from "../../img/phone.png";
import Footer from "../../components/Footer";

export const Home = () => {
  return (
    <div>
      <Header />
      <div
        className="mil-banner mil-dark-2"
        style={{ backgroundColor: "#FFD700" }}
      >
        {/* <div className="mil-radial-g-2"></div>
        <div className="mil-radial-g-3"></div> */}
        <div className="container">
          <div className="row align-items-center mil-mb-80">
            <div className="col-xl-5">
              <div className="mil-banner-text">
                <div className="mil-text-l mil-light mil-mb-20">
                  Explore the Financial Future: Welcome to
                </div>
                <h1 className="mil-display mil-light mil-mb-60">
                  Our Online Banking
                </h1>
                <div className="mil-buttons-frame">
                  <a
                    href="/login"
                    className="mil-btn mil-md mil-add-arrow"
                  >
                    Check balances
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=gRhoYxy9Oss"
                    className="mil-btn mil-md mil-transp mil-add-play has-popup-video"
                  >
                    Watch tutorial
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-7" style={{ marginTop: "20%" }}>
              <div className="mil-banner-img mil-banner-img-out">
                <img src={Image} alt="banner" style={{ maxWidth: "150%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="icon-boxes mil-p-160-130">
        <div className="container">
          <div className="mil-text-center">
            <h2
              className="mil-light mil-mb-30 mil-up"
              style={{ color: "#101c4e" }}
            >
              Discover the Reasons <br />
              to choose us
            </h2>
            <p className="mil-text-l mil-pale-2 mil-mb-60 mil-up">
              Discover why choosing us makes a difference <br />
              in your relationship with money.
            </p>
          </div>
          <div className="row align-items-center">
            <div className="col-xl-4 mil-mb-30">
              <div
                className="mil-icon-box mil-with-bg mil-dark-2 mil-center mil-up"
                style={{ backgroundColor: "#FFD700" }}
              >
                <img
                  src="img/home-5/icons/1.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-light mil-up">
                  Innovative technology
                </h5>
                <p className="mil-text-s mil-soft mil-up">
                  Immerse yourself in the forefront of digital banking with our
                  cutting-edge technological solutions.
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div
                className="mil-icon-box mil-with-bg mil-dark-2 mil-center mil-up"
                style={{ backgroundColor: "#FFD700" }}
              >
                <img
                  src="img/home-5/icons/2.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-light mil-up">
                  Guaranteed Security
                </h5>
                <p className="mil-text-s mil-soft mil-up">
                  Your peace of mind is our priority. We employ the most
                  advanced security measures to protect every transaction.
                </p>
              </div>
            </div>
            <div className="col-xl-4 mil-mb-30">
              <div
                className="mil-icon-box mil-with-bg mil-dark-2 mil-center mil-up"
                style={{ backgroundColor: "#FFD700" }}
              >
                <img
                  src="img/home-5/icons/3.svg"
                  alt="icon"
                  className="mil-mb-30 mil-up"
                />
                <h5 className="mil-mb-20 mil-light mil-up">
                  Zero Hidden Commissions
                </h5>
                <p className="mil-text-s mil-soft mil-up">
                  At Plax, we believe in transparency. Enjoy making transfers
                  and payments without worrying about additional costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mil-p-0-80">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-5 mil-mb-80">
              <h2
                className="mil-light mil-mb-30 mil-up"
                style={{ color: "#101c4e" }}
              >
                Discover the Facts: Kipit in Figures
              </h2>
              <p className="mil-text-l mil-pale-2 mil-mb-60 mil-up">
                Dive into the facts that make Kipit the smart choice for your
                financial needs
              </p>
              <ul className="mil-list-2 mil-type-2 mil-accent mil-mb-60">
                <li>
                  <div className="mil-up">
                    <h5
                      className="mil-light mil-mb-15"
                      style={{ color: "#101c4e" }}
                    >
                      Operations in a Cities
                    </h5>
                    <p className="mil-text-m mil-pale-2">
                      We extend our digital network across 22 cities to reach
                      you, wherever you are.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <h5
                      className="mil-light mil-mb-15"
                      style={{ color: "#101c4e" }}
                    >
                      Commitment to Innovation
                    </h5>
                    <p className="mil-text-m mil-pale-2">
                      At Kipit, we don't just embrace innovation, we lead it. We
                      are constantly evolving to offer you the latest in
                      financial technology.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mil-up">
                <a href="about.html" className="mil-btn mil-m mil-add-arrow">
                  Learn more
                </a>
              </div>
            </div>
            <div className="col-xl-6 mil-mb-80">
              <div className="row">
                <div className="col-xl-6 mil-mb-30">
                  <p className="h1 mil-display mil-mb-15">
                    <span className="mil-accent mil-counter" data-number="2.1">
                      2,1
                    </span>
                    <span className="mil-accent">M</span>
                  </p>
                  <h5 className="mil-light">Satisfied Customers:</h5>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <p className="h1 mil-display mil-mb-15">
                    <span className="mil-accent">+</span>
                    <span className="mil-accent mil-counter" data-number="800">
                      800
                    </span>
                  </p>
                  <h5 className="mil-light">Corporate Clients:</h5>
                </div>
                <div className="col-xl-6 mil-mb-30">
                  <p className="h1 mil-display mil-mb-15">
                    <span className="mil-accent">+</span>
                    <span className="mil-accent mil-counter" data-number="8.8">
                      8,8
                    </span>
                    <span className="mil-accent">K</span>
                  </p>
                  <h5 className="mil-light">Dedicated Employees:</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mil-features mil-p-0-80"
        style={{ backgroundColor: "#101c4e", width: "100%" }}
      >
        <div className="container">
          <div className="row justify-content-between align-items-center pt-12">
            <div className="col-xl-6 mil-mb-80">
              <h2 className="mil-mb-30 mil-light mil-up">
                Simplicity in Every Payment
              </h2>
              <p className="mil-text-l mil-pale-2 mil-mb-60 mil-up">
                From utilities to credit cards, we simplify the process so you
                can focus on what really matters.
              </p>
              <ul className="mil-list-1 mil-accent">
                <li>
                  <div className="mil-up">
                    <a href="#." className="mil-up">
                      <h5 className="mil-mb-15 mil-light mil-up">
                        Payment for Services
                      </h5>
                      <p className="mil-text-m mil-pale-2 mil-up">
                        Make utility payments, bills and more with just a few{" "}
                        <br />
                        clicks, without hassle or delays.
                      </p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <a href="#." className="mil-up">
                      <h5 className="mil-mb-15 mil-light mil-up">
                        Efficient Credit Card Management
                      </h5>
                      <p className="mil-text-m mil-pale-2 mil-up">
                        Control your credit cards, make minimum or full <br />
                        payments, and keep track of your transactions
                        efficiently.
                      </p>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="mil-up">
                    <a href="#." className="mil-up">
                      <h5 className="mil-mb-15 mil-light mil-up">
                        Automatic Payments Program:
                      </h5>
                      <p className="mil-text-m mil-pale-2 mil-up">
                        Forget about deadlines. Set up automatic payments <br />
                        so your bills are paid on time, without worry.
                      </p>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-xl-5 mil-mb-80">
              <div className="mil-image-frame mil-up">
                <img
                  src={ftPhone}
                  alt="image"
                  className="mil-scale-img"
                  data-value-1="1"
                  data-value-2="1.2"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mil-features mil-p-0-80" style={{ marginTop: "10%" }}>
          <div className="container">
            <div className="row flex-sm-row-reverse justify-content-between align-items-center">
              <div className="col-xl-6 mil-mb-80">
                <h2 className="mil-mb-30 mil-light mil-up">
                  Ease and Security in Every Transaction
                </h2>
                <p className="mil-text-l mil-pale-2 mil-mb-60 mil-up">
                  With Plax, transferring funds has never been so simple and
                  secure. From local transfers to international payments, our
                  platform gives you peace of mind knowing your transactions are
                  protected. Discover a new era in bank transfers.
                </p>
                <div className="mil-up">
                  <a href="about.html" className="mil-btn mil-m mil-add-arrow">
                    Learn more
                  </a>
                </div>
              </div>
              <div className="col-xl-5 mil-mb-80">
                <div className="mil-image-frame mil-up">
                  <img src={ft2Phone} alt="image" className="h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black h-[1000px]">
        <div className="container bg-black">
          {/* <div className="mil-out-frame mil-image-2 mil-bg-2"> */}
          <div className="row justify-content-center align-items-center mil-p-160-0">
            <div className="col-xl-7 mil-text-center -mt-10">
              <h2 className="mil-light mil-mb-30 mil-up font-bold" style={{ fontSize: "3rem" }}>
                Experience Banking on the <br />
                Move with Kipit APP
              </h2>
              <p className="mil-text-l mil-light mil-mb-60 mil-up">
                Discover the convenience of banking from the palm of your hand
                and experience banking on the go quickly and securely.
              </p>
              <div className="mil-buttons-frame mil-center mil-mb-60 mil-up">
                <a href="#." className="mil-btn mil-md">
                  Download on App Store
                </a>
                <a href="#." className="mil-btn mil-border mil-md">
                  on Google Play
                </a>
              </div>
              <div className="" style={{ marginTop: "-40%", height: "100px" }}>
                <img src={phone} alt="phone" />
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
};
