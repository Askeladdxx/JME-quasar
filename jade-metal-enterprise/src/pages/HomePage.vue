<template>
  <div class="Home">
    <section>
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
      <div class="sec-1 q-pa-md">
        <div class="landing-container row reverse">
          <div class="column justify-center">
            <div class="company-intro q-pa-md">
              <label class="company-name text-center text-bold"
                >JADE METAL ENTERPRISE</label
              >
              <h4 class="text-content text-center">
                Forging Seamless Connectivity: <br />
                Jade Metal Enterprise - Empowering Telecom Infrastructure
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="sec-2 q-pa-md">
        <div class="about-us q-pa-md">
          <h1 class="q-pa-md q-mt-md text-bold h-title text-center">
            About us
          </h1>
          <div class="text-center">
            <h4 class="text-bold w-title text-white">
              Welcome to Jade Metal Enterprise - Your Trusted Partner in Telecom
              Metalworks!
            </h4>
          </div>

          <div class="about-container text-justify">
            <div class="flex-container">
              <img
                src="https://images.pexels.com/photos/73833/weld-hot-soldering-radio-welder-73833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="fImage"
              />
              <p>
                Founded in 2019, Jade Metal Enterprise is a dynamic family-owned
                business that supplies quality metalworks and essential tools
                for the telecom industry. Our passion and commitment to
                excellence have allowed us to quickly establish ourselves as a
                reliable player in the telecom supply market. At Jade Metal
                Enterprise, we understand the critical role that telecom
                infrastructure plays in connecting communities and driving
                progress. Our mission is to provide telecom companies, including
                industry giants like PLDT, Globe, and Fibr, with the high-grade
                materials they need to build and maintain robust networks.
              </p>
            </div>
            <div class="flex-container">
              <p>
                Customer satisfaction lies at the heart of our business
                philosophy. We believe in fostering strong relationships with
                our clients and working closely with them to understand their
                unique requirements. This collaborative approach allows us to
                tailor solutions that precisely fit their project needs,
                ensuring successful and efficient outcomes.
              </p>
              <img
                src="https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="fImage"
              />
            </div>
            <div class="flex-container">
              <img
                src="https://images.pexels.com/photos/210158/pexels-photo-210158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="fImage"
              />
              <p>
                We look forward to serving our clients with the same passion and
                dedication that defines Jade Metal Enterprise.
                <br />
                Thank you for choosing Jade Metal Enterprise as your telecom
                supply partner. Let's build a connected and prosperous future
                together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="sec-3 q-pa-md">
        <div class="mission-vision">
          <div class="mission q-pa-md">
            <h1 class="q-pa-md text-green-8 text-bold">Mission</h1>
            <p class="q-pa-md">
              Our mission at Jade Metal Enterprise is to empower the telecom
              industry with top-quality metalworks and essential supplies,
              facilitating seamless connectivity and fostering progress. Through
              our dedication to innovation, craftsmanship, and
              customer-centricity, we aim to be the trusted partner that drives
              the expansion of robust and reliable telecom infrastructure,
              connecting communities and empowering the world.
            </p>
          </div>

          <div class="vision q-pa-md">
            <h1 class="text-red-8 q-pa-md text-bold">Vision</h1>
            <p class="q-pa-md">
              At Jade Metal Enterprise, our vision is to be the leading provider
              of telecom metalworks and supplies, setting new industry
              benchmarks for quality and service. We aspire to continuously
              innovate and adapt, leveraging cutting-edge technologies to meet
              the evolving needs of the telecom sector. With unwavering
              commitment to sustainability and excellence, we envision a future
              where Jade Metal Enterprise plays a pivotal role in building a
              connected and inclusive world, where communication knows no
              bounds.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="sec-4 q-pa-md">
        <div class="products">
          <h1 class="text-bold text-center">Products</h1>

          <div
            class="product-container flex flex-center justify-evenly q-ma-md q-pa-md"
          >
            <q-card
              v-for="card in productCards"
              :key="card.id"
              flat
              class="product-card q-mb-lg text-center"
            >
              <q-card-section>
                <q-img class="card-image" :src="card.image" />
              </q-card-section>
              <q-card-title class="card-name text-white q-pa-md">
                <h4 class="q-py-none text-bold">
                  {{ card.name }}
                </h4>
              </q-card-title>
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
  </div>
</template>
<style>
@import "./styles/HomePage.scss";
</style>
<script src="./scripts/HomePage"></script>
