import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div class="container" style={{ marginTop: "12%" }}>
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-8">
            <div class="mil-banner-text mil-text-center">
              <div class="mil-text-m mil-mb-20" style={{ fontSize: "3rem" }}>
                About us
              </div>
              <h1 class="mil-mb-60">
                More than a Platform, a Financial Revolution
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
