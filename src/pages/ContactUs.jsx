import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ContactUs = () => {
  return (
    <>
      <Header className="" />
      <div className="container" style={{ marginTop: "12%" }}>
        <div className="row justify-content-center">
          <div class="row align-items-center justify-content-center">
            <div class="col-xl-8">
              <Contact>
                <div class="mil-text-m mil-mb-20" style={{textAlign: 'center', fontSize: "2rem"}}>Contact us</div>
                <h1 class="mil-mb-60" style={{ fontSize: '3rem', textAlign: 'center'}}>
                  Connect with Us: We are Here to Help You
                </h1>
                <p style={{ marginBottom: "5%" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente fuga, ad voluptatum aperiam fugit nostrum labore
                  perspiciatis nesciunt totam id ipsum necessitatibus excepturi
                  hic aspernatur voluptas mollitia, vitae consectetur!
                  Perferendis?
                </p>
              </Contact>
            </div>
          </div>
          <div className="col-xl-9">
            <form>
              <div className="row">
                <div className="col-md-6 mil-mb-30">
                  <input
                    className="mil-input mil-up"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="col-md-6 mil-mb-30">
                  <input
                    className="mil-input mil-up"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="col-xl-12 mil-mb-30">
                  <input
                    className="mil-input mil-up"
                    type="tel"
                    placeholder="Telephone number"
                    name="tel"
                  />
                </div>
                <div className="col-xl-12 mil-mb-30 ">
                  <textarea
                    cols="30"
                    rows="10"
                    className="mil-up"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                </div>
              </div>
              {/* <div className="mil-checkbox-frame mil-mb-30 mil-up">
                <div className="mil-checkbox">
                  <input
                    type="checkbox"
                    id="checkbox-1"
                    name="checkmark"
                    checked
                  />
                  <label for="checkbox-1"></label>
                </div>
                <p className="mil-text-xs mil-soft">
                  I agree that the data submitted, collected and stored *
                </p>
              </div> */}
              <div className="mil-up">
                <button type="submit" className="mil-btn mil-m">
                  Send Message
                </button>
              </div>
            </form>
            <div className="mil-p-160-0">
              <h5 className="mil-mb-30 mil-up">
                We are available on the following channels:
              </h5>
              <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                Address: 999 Rue du Cherche-Midi, 7755500666 Paris, France
              </p>
              <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                Telephone: +001 (808) 555-0111
              </p>
              <p className="mil-text-m mil-soft mil-mb-10 mil-up">
                Fax: +001 (808) 555-0112
              </p>
              <p className="mil-text-m mil-soft mil-up">
                Email: support@plax.network
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="mil-out-frame mil-p-160-160"
          style={{ backgroundColor: "black", marginTop: "10%"}}
        >
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-7 mil-sm-text-center">
              <h2 className="mil-light mil-mb-30 mil-up" style={{ color: "white", fontSize: "2rem" }}>
                Discover the freedom <br />
                of Total Financial Control
              </h2>
              <p className="mil-text-m mil-mb-60 mil-dark-soft mil-up">
                Join Plax and take the first step towards a more <br /> balanced
                and hassle-free financial life.
              </p>
              <div className="mil-buttons-frame mil-up">
                <a href="#." className="mil-btn mil-md">
                  App Store
                </a>
                <a href="#." className="mil-btn mil-border mil-md">
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;

const Contact = styled.div`
  text-align: center;

`
