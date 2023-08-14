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
                    <q-card-title class="card-name">
                      <h5
                        class="text-bold q-py-none q-my-md text-center text-white"
                      >
                        {{ card.name }}
                      </h5>
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
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
@import "./styles/HomePage.css";
</style>
<script src="./scripts/HomePage"></script>
