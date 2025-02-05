const Footer = () => {
  return (
    <footer className="mil-footer-dark-2 mil-p-160-0">
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <a href="#." className="mil-footer-logo mil-mb-60">
              <img src="img/logo-2.png" alt="Plax" width="28" height="32" />
            </a>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60 mil-soft">Usefull Links</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-pale mil-mb-15">
                <a href="/">Home</a>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <a href="/about">About Us</a>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <a href="/contactus">Contact Us</a>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <a href="services.html">Services</a>
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                <a href="price.html">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-60">
            <h6 className="mil-mb-60 mil-soft">Help</h6>
            <ul className="mil-footer-list">
              <li className="mil-text-m mil-pale mil-mb-15">
                999 Rue du Cherche-Midi, 7755500666 Paris, <br />
                France
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                +001 (808) 555-0111
              </li>
              <li className="mil-text-m mil-pale mil-mb-15">
                support@plax.network
              </li>
            </ul>
          </div>
          <div className="col-xl-3 mil-mb-80">
            <h6 className="mil-mb-60 mil-soft">Newsletter</h6>
            <p className="mil-text-xs mil-pale mil-mb-15">
              Subscribe to get the latest news form us
            </p>
            <form className="mil-subscripe-form-footer">
              <input className="mil-input" type="email" placeholder="Email" />
              <button type="submit">
                <i className="far fa-envelope-open mil-dark"></i>
              </button>
              <div className="mil-checkbox-frame mil-mt-15">
                <div className="mil-checkbox">
                  <input type="checkbox" id="checkbox" checked />
                  <label for="checkbox"></label>
                </div>
                <p className="mil-text-xs mil-pale">
                  Subscribe to get the latest news
                </p>
              </div>
            </form>
          </div>
        </div>
        <div className="mil-footer-bottom">
          <div className="row">
            <div className="col-xl-6">
              <p className="mil-text-s mil-pale">
                © 2025 Kipit Technologies
              </p>
            </div>
            <div className="col-xl-6">
              <p className="mil-text-s mil-text-right mil-sm-text-left mil-pale">
                Developed by{" "}
                <a href="https://bslthemes.com/" target="blank">
                  Kipit
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
