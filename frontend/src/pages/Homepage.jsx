import React from 'react'

const Homepage = () => {
  return (
    <>
    {/* navbar  */}
     <nav className="navbar navbar-expand-lg sticky-top border-bottom" id="nav_bar">
      <div className="container-fluid px-md-5">
        <a className="navbar-brand" href="#"
          ><img src="assets/logo.png" alt="" height="65px" id="nav_img"
        /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler"><i className="fa-solid fa-bars"></i></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end text-center pe-3"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item" id="nav_a1">
              <a className="nav-link active" href="home.html">Home</a>
            </li>
            <li className="nav-item" id="nav_a2">
              <a className="nav-link" href="services.html">Facility</a>
            </li>
            <li className="nav-item" id="nav_a3">
              <a className="nav-link" href="animal-care.html">Animal Care</a>
            </li>
            <li className="nav-item" id="nav_a4">
              <a className="nav-link" href="about.html">About Us</a>
            </li>
            <li className="nav-item" id="nav_a5">
              <a className="nav-link" href="contact.html">Contact Us</a>
            </li>
            <li className="nav-item" id="nav_a1">
              <a className="nav-link " href="/register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

     {/* carasoul  */}
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade top_carousel"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div
          className="carousel-item active container-fluid py-md-5"
          data-bs-interval="4000"
        >
          <div className="row g-0">
            <img src="assets/carousel-1.png" alt="" className="img-fluid w-50" />
            <div
              className="col-6 d-flex justify-content-center align-items-center anime-2"
            >
              <div className="ps-md-5">
                <h5 className="">
                  Let's, do some work for
                  <img
                    src="assets/love-icon.png"
                    alt=""
                    className="m-0"
                    width="10px"
                  />
                </h5>
                <h1>
                  all the people of God, We lived enough for ourselves, live a
                  little for the needy.
                </h1>
              </div>
            </div>
            <div className="col-6 anime-3">
              <img src="assets/carousel-2.png" alt="" className="img-fluid w-100" />
            </div>
          </div>
        </div>
        <div
          className="carousel-item container-fluid py-md-5"
          data-bs-interval="4000"
        >
          <div className="row">
            <img src="assets/carousel-1.png" alt="" className="img-fluid w-50" />
            <div className="col-6 anime-2">
              <img src="assets/carousel-4.png" alt="" className="img-fluid w-100" />
            </div>
            <div
              className="col-6 d-flex justify-content-center align-items-center anime-3"
            >
              <div>
                <h5 className="">
                  Let's, do some work for
                  <img
                    src="assets/love-icon.png"
                    alt=""
                    className="m-0"
                    width="10px"
                  />
                </h5>
                <h1>
                  all the people of God, We lived enough for ourselves, live a
                  little for the needy.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div
          className="carousel-item container-fluid py-md-5"
          data-bs-interval="4000"
        >
          <div className="row">
            <img src="assets/carousel-1.png" alt="" className="img-fluid w-50" />
            <div
              className="col-6 d-flex justify-content-center align-items-center anime-2"
            >
              <div className="ps-md-5">
                <h5 className="">
                  Let's, do some work for
                  <img
                    src="assets/love-icon.png"
                    alt=""
                    className="m-0"
                    width="10px"
                  />
                </h5>
                <h1>
                  all the people of God, We lived enough for ourselves, live a
                  little for the needy.
                </h1>
              </div>
            </div>
            <div className="col-6 anime-3">
              <img src="assets/carousel-3.png" alt="" className="img-fluid w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>

     {/* welcome  */}
     <section
      className="container"
      data-aos="fade-up"
      data-aos-offset="-100"
      data-aos-delay="40"
      data-aos-duration="600"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      data-aos-anchor-placement="top-center"
    >
      <div className="row text-center" id="welcome">
        <div className="col-12">
          <img src="assets/love-icon.png" alt="" width="30px" />
          <h1>WELCOME TO <span>PANAH</span></h1>
        </div>
        <div className="col-md-8 offset-md-2 my-md-5">
          <p>
            God has obligated Himself only to the extent of our needs.
            <br className="d-none d-md-block" />
            That would include food, clothing, shelter, companionship,
            <br className="d-none d-md-block" />
            love, and salvation through Jesus Christ....
          </p>
          <img src="assets/sketch-1.png" alt="" width="250px" />
          <center>
            <img
              src="assets/quote-1.png"
              alt=""
              width="50px"
              className="d-block d-md-none"
            />
          </center>
        </div>
      </div>
    </section>
      
 {/* what we do  */}

<section id="t-cards" className="mt-5">
  <div className="container pb-md-5 mb-md-4 mb-3">
    <div className="row">
      <div className="col-12 text-center mb-5">
        <h1>
          What We Do <img src="assets/love-icon.png" alt="" width="15px" />
        </h1>
      </div>
      <div
        className="col-sm-6 col-md-3"
        data-aos="zoom-in"
        data-aos-delay="10"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="panel panel-default panel-card">
          <div className="panel-heading">
            <img src="assets/img-1.jpg" alt="" />
          </div>
          <div className="panel-figure">
            <i className="fa-solid fa-book-open fa-bounce"></i>
          </div>
          <div className="panel-body text-center">
            <h4 className="panel-header">Education</h4>
            <p className="m-0">
              <small>Education for children</small>
            </p>
          </div>
          <div className="panel-thumbnails">
            <div className="row">
              <div className="col-12 text-center">
                <p className="m-0">
                  Lorem ipsum dolor sit, ame elit. Saepe, nam.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-sm-6 col-md-3"
        data-aos="zoom-in"
        data-aos-delay="10"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="panel panel-default panel-card">
          <div className="panel-heading">
            <img src="assets/img-2.jpeg" alt="" />
          </div>
          <div className="panel-figure">
            <i className="fa-solid fa-stethoscope fa-bounce"></i>
          </div>
          <div className="panel-body text-center">
            <h4 className="panel-header">Health</h4>
            <p className="m-0">
              <small>Medicine for needed people</small>
            </p>
          </div>
          <div className="panel-thumbnails">
            <div className="row">
              <div className="col-12 text-center">
                <p className="m-0">
                  Lorem ipsum dolor sit, ame elit. Saepe, nam.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-sm-6 col-md-3"
        data-aos="zoom-in"
        data-aos-delay="10"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="panel panel-default panel-card">
          <div className="panel-heading">
            <img src="assets/img-3.jpg" alt="" />
          </div>
          <div className="panel-figure">
            <i className="fa-solid fa-house-circle-check fa-bounce"></i>
          </div>
          <div className="panel-body text-center">
            <h4 className="panel-header">Shelter</h4>
            <p className="m-0">
              <small>Shelter for homeless people</small>
            </p>
          </div>
          <div className="panel-thumbnails">
            <div className="row">
              <div className="col-12 text-center">
                <p className="m-0">
                  Lorem ipsum dolor sit, ame elit. Saepe, nam.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-sm-6 col-md-3"
        data-aos="zoom-in"
        data-aos-delay="10"
        data-aos-duration="600"
        data-aos-easing="ease-in-out"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="panel panel-default panel-card">
          <div className="panel-heading">
            <img src="assets/img-4.jpg" alt="" />
          </div>
          <div className="panel-figure">
            <i className="fa-solid fa-dog fa-bounce"></i>
          </div>
          <div className="panel-body text-center">
            <h4 className="panel-header">Animal Care</h4>
            <p className="m-0">
              <small>Shelter and adoption for animals</small>
            </p>
          </div>
          <div className="panel-thumbnails">
            <div className="row">
              <div className="col-12 text-center">
                <p className="m-0">
                  Lorem ipsum dolor sit, ame elit. Saepe, nam.
                </p>
                <a href="">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

 {/* vision  */}

<div className="container mb-3 mb-md-5">
  <div className="row text-center" id="vision">
    <div className="col-12 text-center">
      <h1>
        <img src="assets/love-icon.png" alt="" className="m-0" width="15px" />
        <br />
        Causes and positive change <br className="d-none d-md-block" />
        all over the world.
        <br />
        <img src="assets/sketch-2.png" alt="" width="250px" />
      </h1>
    </div>
    <div className="col-md-4">
      <section>
        <img
          src="assets/mission.png"
          alt=""
          className="img-fluid"
          width="60px"
        />
      </section>
      <h4>Our Mission</h4>
      <p className="m-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        atque libero eaque sit debitis perspiciatis eius quam amet earum?
      </p>
    </div>
    <div className="col-md-4">
      <section>
        <img
          src="assets/vision.png"
          alt=""
          className="img-fluid"
          width="60px"
        />
      </section>
      <h4>Our Vision</h4>
      <p className="m-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        atque libero eaque sit debitis perspiciatis eius quam amet earum?
      </p>
    </div>
    <div className="col-md-4">
      <section>
        <img src="assets/value.png" alt="" className="img-fluid" width="60px" />
      </section>
      <h4>Our Values</h4>
      <p className="m-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        atque libero eaque sit debitis perspiciatis eius quam amet earum?
      </p>
    </div>
  </div>
</div>



{/* achieve  */}

<section className="container-fluid mb-5" id="achieve">
  <div className="row py-md-5 py-5">
    <div className="col-12 text-center">
      <img src="assets/we-use-icon.png" alt="" width="60px" />
      <h1>
        This is the impact you helped <br className="d-none d-md-block" />
        us achieve in 2020-21
      </h1>
    </div>
    <div className="row text-center count_div">
      <section className="col-sm-6 col-md-3">
        <img src="" alt="" />
        <p className="pt-2"><span id="number1">0</span>+</p>
        <h5 className="">
          Gave Education To The <br />
          Uneducated Children
        </h5>
      </section>
      <section className="col-sm-6 col-md-3">
        <img src="" alt="" />
        <p className="pt-2"><span id="number2">0</span>+</p>
        <h5 className="g-0">
          Gave Food To The <br />
          Needed People
        </h5>
      </section>
      <section className="col-sm-6 col-md-3">
        <img src="" alt="" />
        <p className="pt-2"><span id="number3">0</span>+</p>
        <h5 className="">
          Gave Shelter To The <br />
          Needed People
        </h5>
      </section>
      <section className="col-sm-6 col-md-3">
        <img src="" alt="" />
        <p className="pt-2"><span id="number4">0</span>+</p>
        <h5 className="">
          Provided Shelter And <br />
          Adoption For Animals
        </h5>
      </section>
    </div>
  </div>
</section>


{/* Upcoming Events  */}

    <div className="container mb-5">
      <div className="row my-3">
        <div className="col text-center">
          <img src="assets/love-icon.png" alt="" width="20px" />
          <p className="m-0">READY TO HELP THEM</p>
          <h1>Upcoming Events</h1>
        </div>
      </div>
      <div className="row text-center" id="event">
        <div
          className="col-md-6 col-lg-4"
          data-aos="flip-left"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <div className="card">
            <span> 25 Mar </span>
            <img src="assets/img-5.jpg" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5>Provide Free Tuition Session</h5>
              <p className="text-muted">
                <small
                  >Some quick example text to build
                  <br className="d-none d-md-block" />
                  on the card title</small
                >
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4"
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <div className="card">
            <span> 1 Apr </span>
            <img src="assets/img-6.jpeg" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5>Opening New Shelter Home</h5>
              <p className="text-muted">
                <small
                  >Some quick example text to build
                  <br className="d-none d-md-block" />
                  on the card title</small
                >
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4"
          data-aos="flip-right"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-anchor-placement="top-center"
        >
          <div className="card">
            <span> 2 Aug </span>
            <img src="assets/img-7.jpeg" className="card-img-top" alt="..." />
            <div className="card-body text-center">
              <h5>Opening New Free Clinics</h5>
              <p className="text-muted">
                <small
                  >Some quick example text to build
                  <br className="d-none d-md-block" />
                  on the card title</small
                >
              </p>
              <a href="">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

     {/* team & testimonials  */}

    <section className="container-fluid mb-5">
      <div className="row py-md-5" id="team">
        <section className="col-md-6 text-center mb-3 mb-md-0">
          <h1 className="m-4 pb-md-5">Meet Our Team</h1>
          <div className="d-md-flex pt-4 pt-md-3">
            <div className="d-flex justify-content-center align-items-center">
              <h5>
                Sapna Sharma <br />
                <span>Feature Page Developer</span>
              </h5>
              <img src="assets/testimonial (2).jpeg" alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src="assets/testimonial (2).jpeg" alt="" />
              <h5>
                Sarin Suseel <br />
                <span>About Page Developer</span>
              </h5>
            </div>
          </div>

          <div className="">
            <img src="assets/testimonial (2).jpeg" alt="" />
            <h5>
              Vinay Singh <br />
              <span>Home Page Developer</span>
            </h5>
          </div>

          <div className="d-md-flex pt-3">
            <div className="d-flex justify-content-center align-items-center">
              <h5>
                Nitin Kumar <br />
                <span> Animal Care Page Developer </span>
              </h5>
              <img src="assets/testimonial (2).jpeg" alt="" />
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src="assets/testimonial (2).jpeg" alt="" />
              <h5>
                Mirtunjay Kumar<br />
                <span>Contact Page Developer</span>
              </h5>
            </div>
          </div>
        </section>
        <div className="col-md-6 text-center px-md-5 mb-5 mb-md-0">
          <h1 className="m-4 pb-md-5">What People Says</h1>
          <div
            id="review_carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
             {/* Wrapper for carousel items  */}
            <div className="carousel-inner mt-md-5 mt-3">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-12">
                    <div className="testimonial-wrapper">
                      <div>
                        <img src="assets/quote-1.png" alt="" /> <br />
                        <p className="m-2 m-md-4">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Laboriosam magniLorem ipsum dolor sit, amet
                          consectetur adipisicing elit. Laboriosam magni
                        </p>
                        <h5>
                          Vinay Singh
                          <img src="assets/love-icon.png" alt="" width="15px" />
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12">
                    <div className="testimonial-wrapper">
                      <div>
                        <img src="assets/quote-1.png" alt="" /> <br />
                        <p className="m-2 m-md-4">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Laboriosam magniLorem ipsum dolor sit, amet
                          consectetur adipisicing elit. Laboriosam magni
                        </p>
                        <h5>
                          Vinay Singh
                          <img src="assets/love-icon.png" alt="" width="15px" />
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12">
                    <div className="testimonial-wrapper">
                      <div>
                        <img src="assets/quote-1.png" alt="" /> <br />
                        <p className="m-2 m-md-4">
                          Lorem ipsum dolor sit, amet consectetur adipisicing
                          elit. Laboriosam magniLorem ipsum dolor sit, amet
                          consectetur adipisicing elit. Laboriosam magni
                        </p>
                        <h5>
                          Vinay Singh
                          <img src="assets/love-icon.png" alt="" width="15px" />
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

     {/* helping hand */}
    <section className="container-fluid border" id="helping_hand">
      <div className="row px-md-5 d-flex align-items-center">
        <div className="col-md-6 p-3 ps-md-5 text-center text-md-start">
          <img src="assets/love-icon.png" alt="" width="15px" /> <br />
          <small>HELPING HANDS</small>
          <h1 className="my-3">
            We're Here to Help <br />
            People in Need
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia,
            nihil magnam! Molestias dolorem magnam ad placeat! Provident,
            possimus. Dignissimos, sit?
          </p>
          <div className="text-end d-none d-md-block">
            <img src="assets/arrow.png" alt="" id="hh_img1" />
          </div>
        </div>
        <div className="col-md-6 text-center" id="hh_img2">
          <img src="assets/img-8.jpg" alt="" />
        </div>
      </div>
    </section>

    {/* become helper  */}

    <section className="container pb-4" id="help">
      <div className="row" id="volunteer">
        <div className="col-12 text-center">
          <img src="assets/sketch-3.png" alt="" width="250px" />
          <h1 className="">
            Help People Change Lives <br className="d-none d-md-block" />
            Locally and Around <br className="d-none d-md-block" />
            The World
          </h1>
        </div>
        <div className="my-3 my-md-5 text-center">
          <a href="">Become a Volunteer</a>
        </div>
      </div>
    </section>

     {/* footer  */}
    <section className="container-fluid text-center text-md-start" id="footer">
      <div className="row py-5">
        <div className="col-md-4 ps-md-5">
          <img src="assets/logo-white.png" alt="" className="img-fluid ps-md-5" />
          <p className="pt-3 ps-md-5 pe-md-4 text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odit.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, odit.
            amet consectetur.
          </p>
        </div>
        <div className="col-md-2 link d-none d-md-block">
          <h4>Pages</h4>
          <a href="">Home</a>
          <a href="">Facility</a>
          <a href="">Animal Care</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </div>
        <div className="col-md-2 link d-none d-md-block">
          <h4>Links</h4>
          <a href="">Home</a>
          <a href="">Facility</a>
          <a href="">Animal Care</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
        </div>
        <div className="col-md-4 f_contact">
          <h4>Contact</h4>
          <a href="">
            <i className="fa-solid fa-paper-plane"></i> panah.ngo@gmail.com
          </a>
          <a href=""> <i className="fa-solid fa-phone"></i> +9192939495 </a>
          <a href=""> <i className="fa-solid fa-house"></i> Address </a>
          <a href="">
            ABC Block Society, <br />
            Dwarka Sector - 54 <br />
            New Delhi 110020
          </a>
        </div>
      </div>
    </section>


    </>
  )
}

export default Homepage
