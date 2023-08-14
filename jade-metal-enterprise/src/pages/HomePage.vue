<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="Home">
          <section>
            <div class="sec-1 bg-dark">
              <video
                src="./videos/background.mp4"
                type="video/mp4"
                autoplay
                muted
                loop
                class="background-video"
              ></video>
              <header>
                <div class="navbar-container">
                  <a href="" class="logo-container">
                    <img
                      src="./images/JME-logo.png"
                      alt="logo"
                      class="logo-image q-my-sm"
                    />
                  </a>
                  <div class="navbtn-container">
                    <div class="navbtn-visibility">
                      <q-btn
                        v-for="button in navbuttons"
                        :key="button.label"
                        dense
                        no-caps
                        flat
                        class="btn-navbar q-pa-xs text-bold q-mx-md"
                        size="20px"
                        :to="button.route"
                      >
                        {{ button.label }}
                      </q-btn>
                    </div>
                    <div class="btn-group-visibility">
                      <q-btn-dropdown class="nav-btn-group">
                        <q-list>
                          <q-item
                            v-for="button in navbuttons"
                            :key="button.label"
                            dense
                            no-caps
                            flat
                            class="btn-navbar q-pa-xs text-bold q-mx-md"
                            :to="button.route"
                          >
                            <q-item-section>
                              <q-item-label class="btn-label text-h5">{{
                                button.label
                              }}</q-item-label>
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </q-btn-dropdown>
                    </div>
                  </div>
                </div>
              </header>
              <div
                class="landing-container"
                style="text-align: center; display: inline block"
              >
                <div class="company-intro q-col">
                  <label class="company-name text-center text-bold"
                    ><span class="text-green">JADE </span
                    ><span class="text-white">METAL </span>
                    <span class="text-red">ENTERPRISE</span></label
                  >
                  <h4 class="text-content text-bold text-center text-white">
                    Forging Seamless Connectivity: <br />
                    Jade Metal Enterprise - Empowering Telecom Infrastructure
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="sec-2">
              <div class="about-us">
                <div class="about-container">
                  <div class="flex-container-one">
                    <div class="about-text-container q-pa-lg">
                      <div class="background"></div>
                      <div class="text">
                        <h1
                          class="text-bold h-title text-center q-my-none text-justify q-mx-xl"
                        >
                          About us
                        </h1>
                        <h5
                          class="text-bold w-title text-white text-justify q-mx-xl q-my-xm"
                        >
                          Welcome to Jade Metal Enterprise - Your Trusted
                          Partner in Telecom Metalworks!
                        </h5>
                        <p class="text-justify q-pa-md q-mx-xl">
                          Founded in 2019, Jade Metal Enterprise is a dynamic
                          family-owned business that supplies quality metalworks
                          and essential tools for the telecom industry. Our
                          passion and commitment to excellence have allowed us
                          to quickly establish ourselves as a reliable player in
                          the telecom supply market. At Jade Metal Enterprise,
                          we understand the critical role that telecom
                          infrastructure plays in connecting communities and
                          driving progress. Our mission is to provide telecom
                          companies, including industry giants like PLDT, Globe,
                          and Fibr, with the high-grade materials they need to
                          build and maintain robust networks.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="flex-container-two text-justify">
                    <div class="background"></div>
                    <div class="text">
                      <p class="q-pa-md text-justify q-mx-xl">
                        Customer satisfaction lies at the heart of our business
                        philosophy. We believe in fostering strong relationships
                        with our clients and working closely with them to
                        understand their unique requirements. This collaborative
                        approach allows us to tailor solutions that precisely
                        fit their project needs, ensuring successful and
                        efficient outcomes. We look forward to serving our
                        clients with the same passion and dedication that
                        defines Jade Metal Enterprise. Thank you for choosing
                        Jade Metal Enterprise as your telecom supply partner.
                        Let's build a connected and prosperous future together!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="sec-3">
              <div class="mission-vision q-pa-md">
                <div class="mission q-ma-md q-pa-md">
                  <h1 class="text-bold">Mission</h1>
                  <p>
                    Our mission at Jade Metal Enterprise is to empower the
                    telecom industry with top-quality metalworks and essential
                    supplies, facilitating seamless connectivity and fostering
                    progress. Through our dedication to innovation,
                    craftsmanship, and customer-centricity, we aim to be the
                    trusted partner that drives the expansion of robust and
                    reliable telecom infrastructure, connecting communities and
                    empowering the world.
                  </p>
                </div>

                <div class="vision q-ma-md q-pa-md">
                  <h1 class="text-bold">Vision</h1>
                  <p>
                    At Jade Metal Enterprise, our vision is to be the leading
                    provider of telecom metalworks and supplies, setting new
                    industry benchmarks for quality and service. We aspire to
                    continuously innovate and adapt, leveraging cutting-edge
                    technologies to meet the evolving needs of the telecom
                    sector. With unwavering commitment to sustainability and
                    excellence, we envision a future where Jade Metal Enterprise
                    plays a pivotal role in building a connected and inclusive
                    world, where communication knows no bounds.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="sec-4">
              <div class="products q-pa-md">
                <h2 class="text-bold text-center text-red-10">Products</h2>
                <div class="product-container flex flex-center justify-evenly">
                  <q-card
                    v-for="card in productCards"
                    :key="card.id"
                    flat
                    class="product-card q-mb-lg text-center q-ma-none"
                  >
                    <q-card-section>
                      <q-img class="card-image" :src="card.image" />
                    </q-card-section>
                    <q-card-section class="card-name">
                      <h5
                        class="text-bold q-py-none q-my-md text-center text-white"
                      >
                        {{ card.name }}
                      </h5>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <div class="footer-container">
              <div class="text-white footer-title">
                <img
                  src="./images/JME-logo.png"
                  alt="logo"
                  class="footer-logo q-my-sm"
                />
                <h4>Jade Metal Enterprise</h4>
              </div>
            </div>
          </footer>
        </div> </q-page
      >/* google font */ @import
      url("https://fonts.googleapis.com/css2?family=Lora&family=Newsreader:opsz,wght@6..72,300&family=Poppins:wght@200;500&family=Signika+Negative:wght@700&display=swap");
      /* layout */ section { min-height: 100vh; } :root { --primary: #1aac83;
      --error: #e7195a; } body { background: #f1f1f1; font-family: "Lora"; }
      header .navbar-container { margin: 0 auto; padding: 10px 20px; max-width:
      1440px; display: flex; align-items: center; justify-content:
      space-between; color: #fff; } header .navbar-container .logo-container {
      position: relative; display: flex; align-items: center; } header
      .navbar-container .logo-image { height: 70px; width: 110px; } header
      .navbar-container .logo-name { font-size: 30px; } header a { color: #333;
      text-decoration: none; } section { min-height: 100vh; } .landing-container
      { .company-name { position: relative; font-size: 70px; align-items:
      center; } .text-content { position: relative; margin: 15px; } } footer {
      position: relative; min-height: 40vh; background-color: #010101;
      .footer-container { background-color: #010101; margin: 0 auto; padding:
      10px 20px; max-width: 1440px; display: flex; align-items: center;
      justify-content: space-between; .footer-title { display: flex;
      justify-content: center; } .footer-title h4 { margin-block: 10px;
      margin-inline: 10px; } .footer-title .footer-logo { height: 40px; width:
      70px; } } } .title { font-size: 40px; } /* homepage */ .sec-1 {
      min-height: 100vh; top: 0; left: 0; width: 100%; height: 100%;
      .background-video { position: fixed; right: 0; bottom: 0; min-height:
      100vh; min-width: 200vh; } .company-intro { height: 80vh; position:
      relative; display: flex; flex-direction: column; align-items: center;
      justify-content: center; } } .sec-2 { min-height: 100vh; .about-us {
      border-radius: 15px; .h-title { color: #fff; } .w-title { color: #a4b494;
      } .about-container { .flex-container-one { position: relative; /* Set the
      container as a positioning context */ background-image:
      url(https://images.pexels.com/photos/6426230/pexels-photo-6426230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
      background-repeat: no-repeat; background-size: cover; background-position:
      center center; height: 100vh; } .flex-container-two { position: relative;
      background-image:
      url(https://images.pexels.com/photos/14356121/pexels-photo-14356121.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1);
      background-repeat: no-repeat; background-size: cover; background-position:
      center center; height: 100vh; } .about-text-container p,
      .flex-container-two p { font-size: 27px; color: #fff; } } }
      .about-container { color: #fff; font-size: 30px; .about-text-container h1
      { margin-top: 5%; } .about-text-container { .background { background:
      #000000; position: absolute; opacity: 35%; top: 0; left: 0; height: 100%;
      width: 100%; } .text { position: absolute; top: 0; left: 0; width: 100%;
      height: 100%; } } .flex-container-one .about-text-container h5, h1, p {
      display: flex; justify-content: center; align-items: center; max-width:
      1000px; margin-left: auto; margin-right: 2%; } .flex-container-two {
      display: flex; align-items: center; .background { background: #000000;
      position: absolute; opacity: 35%; top: 0; left: 0; height: 100%; width:
      100%; } .text { margin-left: 2%; position: absolute; } } .fImage-lg {
      border-radius: 20px; max-width: 50%; /* Adjust the width of the image as
      needed */ margin: 20px; /* Add some spacing between image and text */ }
      .flex-container-one p { flex: 1 1 auto; } } } .nav-btn-group {
      background-color: green; color: #fff; border-radius: 100%; } .btn-label {
      color: black; } .btn-group-visibility { display: none; } .sec-3 {
      position: relative; min-height: 100vh; background-color: #0e3115;
      .mission-vision { color: #fff; display: flex; align-items: center; /*
      Vertically center align items */ .mission p, .vision p { color: #4ab660;
      font-size: 15px; } } .mission-vision .mission h1, .mission-vision .vision
      h1 { margin-block: 30px; color: #6ce676; } .mission-vision .mission h1 {
      color: #6ce676; } .mission-vision .mission p, .mission-vision .vision p {
      font-size: 30px; text-align: justify; } } .sec-4 { position: relative;
      min-height: 100vh; .products { .product-container { border-radius: 20px;
      flex-direction: row; margin: 20px; border-radius: 15px; margin: 0 auto;
      .product-card { background-color: #aa0000; border-radius: 15px; }
      .card-image { border-radius: 15px; width: 300px; height: 300px; } } } }
      @media screen and (max-width: 1400px) { } @media screen and (max-width:
      1200px) { .sec-1 .landing-container .company-intro { .company-name {
      font-size: 55px; display: block; } } .sec-2 { .about-us { .about-container
      { font-size: 15px; .about-text-container p, .flex-container-two p {
      font-size: 20px; } .h-title { font-size: 40px; } .w-title { font-size:
      20px; } } } } } @media screen and (max-width: 1024px) { .sec-1
      .landing-container .company-intro { .company-name { font-size: 55px;
      display: block; } } .sec-2 { .about-us { .about-container { font-size:
      15px; .about-text-container p, .flex-container-two p { font-size: 20px; }
      .h-title { font-size: 40px; } .w-title { font-size: 20px; } } } } } @media
      screen and (max-width: 768px) { header .navbar-container .navbtn-container
      .navbtn-visibility { display: none; } header .navbar-container
      .navbtn-container .btn-group-visibility { display: block; .nav-btn-group {
      margin: 10px auto; width: 80px; height: 80px; } } .sec-2 { .about-us {
      .about-container { font-size: 15px; .about-text-container p,
      .flex-container-two p { font-size: 18px; } .h-title { font-size: 40px; }
      .w-title { font-size: 20px; } .flex-container-one { display: flex;
      flex-direction: column; .fImage-lg { display: none; }
      .about-text-container { margin-top: 10%; } } } } } .sec-3 {
      .mission-vision { display: flex; flex-direction: column; .mission h1,
      .vision h1 { font-size: 60px; } .mission p, .vision p { font-size: 22px; }
      .mission .m-image, .vision .v-image { border-radius: 20px; max-width: 50%;
      /* Adjust the width of the image as needed */ margin: 20px; /* Add some
      spacing between image and text */ .flex-container-one p { flex: 1 1 auto;
      } } } } .sec-4 { .products h2 { font-size: 60px; } .products {
      .product-container { .product-card { .card-image { height: 130px; width:
      130px; } .card-name h5 { font-size: 12px; margin-top: none; } } } } } }
      @media screen and (max-width: 480px) { .sec-1 .landing-container
      .company-intro { .company-name { font-size: 30px; display: block; }
      .text-content { font-size: 15px; margin: 0px; } } header .navbar-container
      .navbtn-container .navbtn-visibility { display: none; } header
      .navbar-container .navbtn-container .btn-group-visibility { display:
      block; .nav-btn-group { margin: 10px auto; width: 60px; height: 60px; } }
      .sec-2 { .about-us { .about-container { font-size: 15px;
      .about-text-container p, .flex-container-two p { font-size: 15px; }
      .h-title { font-size: 30x; } .w-title { font-size: 15px; }
      .flex-container-one { display: flex; flex-direction: column; .fImage-lg {
      display: none; } .about-text-container { margin-top: 10%; } } } } } .sec-3
      { .mission-vision { display: flex; flex-direction: column; .mission h1,
      .vision h1 { font-size: 60px; } .mission p, .vision p { font-size: 15px; }
      .mission .m-image, .vision .v-image { border-radius: 20px; max-width: 50%;
      /* Adjust the width of the image as needed */ margin: 20px; /* Add some
      spacing between image and text */ .flex-container-one p { flex: 1 1 auto;
      } } } } .sec-4 { .products h2 { font-size: 50px; } .products {
      .product-container { .product-card { .card-image { height: 120px; width:
      120px; } .card-name h5 { font-size: 12px; margin-top: none; } } } } } }
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
@import "./styles/HomePage.scss";
</style>
<script src="./scripts/HomePage"></script>
