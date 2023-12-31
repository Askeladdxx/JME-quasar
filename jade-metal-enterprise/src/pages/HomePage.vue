<template>
  <q-layout
    view="hHr LpR fFr"
    container
    style="min-height: 100vh"
    class="shadow-2"
  >
    <q-page-container>
      <q-page>
        <div class="Home">
          <section id="sec-1">
            <div class="sec-1">
              <video
                src="./videos/background.mp4"
                type="video/mp4"
                autoplay
                muted
                loop
                class="background-video"
              />
              <q-header reveal elevated class="header">
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
                        class="btn-navbar q-pa-xs text-bold q-mx-md text-white"
                        size="20px"
                        :to="button.route"
                      >
                        {{ button.label }}
                      </q-btn>
                    </div>
                  </div>
                  <div class="btn-group-visibility">
                    <div>
                      <q-toolbar>
                        <q-btn
                          flat
                          @click="drawerRight = !drawerRight"
                          round
                          dense
                          icon="menu"
                          size="25px"
                        />
                      </q-toolbar>
                      <q-drawer
                        side="right"
                        v-model="drawerRight"
                        bordered
                        :width="200"
                        :breakpoint="500"
                        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
                        ><q-scroll-area class="fit">
                          <div class="q-pa-sm">
                            <q-btn
                              v-for="button in navbuttons"
                              :key="button.label"
                              dense
                              no-caps
                              flat
                              class="btn-navbar q-pa-xs text-bold q-mx-md text-dark"
                              size="20px"
                              :to="button.route"
                            >
                              {{ button.label }}
                            </q-btn>
                          </div>
                        </q-scroll-area>
                      </q-drawer>
                    </div>
                  </div>
                </div>
              </q-header>

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
          <section id="sec-2">
            <div class="sec-2">
              <div class="about-us">
                <div class="about-container">
                  <div class="flex-container-one">
                    <div class="about-text-container q-pa-lg">
                      <div class="background"></div>
                      <div class="text">
                        <h1 class="text-bold h-title q-my-none text-justify">
                          About us
                        </h1>
                        <label
                          class="text-bold w-title text-white text-center q-my-sm"
                        >
                          Welcome to Jade Metal Enterprise - Your Trusted
                          Partner in Telecom Metalworks!
                        </label>
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
          <section id="sec-3">
            <div class="sec-3">
              <div class="mission-vision q-pa-md">
                <div class="mission flex flex-center q-pa-lg q-ma-md">
                  <div class="text-content q-ma-md">
                    <h1 class="text-bold">Mission</h1>
                    <img src="./images/mission.png" class="m-image-sm" />
                    <p>
                      Our mission at Jade Metal Enterprise is to empower the
                      telecom industry with top-quality metalworks and essential
                      supplies, facilitating seamless connectivity and fostering
                      progress. Through our dedication to innovation,
                      craftsmanship, and customer-centricity, we aim to be the
                      trusted partner that drives the expansion of robust and
                      reliable telecom infrastructure, connecting communities
                      and empowering the world.
                    </p>
                  </div>

                  <img
                    src="./images/mission.png"
                    spinner-color="primary"
                    spinner-size="82px"
                    class="m-image"
                  />
                </div>

                <div class="vision flex flex-center q-pa-lg q-ma-md">
                  <img
                    src="./images/vision.png"
                    spinner-color="primary"
                    spinner-size="82px"
                    class="v-image"
                  />

                  <div class="text-content q-ma-md">
                    <h1 class="text-bold">Vision</h1>
                    <img
                      src="./images/vision.png"
                      spinner-color="primary"
                      spinner-size="82px"
                      class="v-image-sm"
                    />
                    <p>
                      At Jade Metal Enterprise, our vision is to be the leading
                      provider of telecom metalworks and supplies, setting new
                      industry benchmarks for quality and service. We aspire to
                      continuously innovate and adapt, leveraging cutting-edge
                      technologies to meet the evolving needs of the telecom
                      sector. With unwavering commitment to sustainability and
                      excellence, we envision a future where Jade Metal
                      Enterprise plays a pivotal role in building a connected
                      and inclusive world, where communication knows no bounds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div class="view-more">
              <div class="text-container text-center">
                <h5 class="text-red-10 text-bold">
                  Telecommunication forms the vital network that binds our local
                  communities together.
                </h5>
              </div>

              <div class="card-container flex flex-around justify-around">
                <div class="product-container q-ma-lg">
                  <div class="text-content">
                    <label class="text-h6 text-bold"
                      >Explore Metal Mastery</label
                    >
                    <div class="text-subtitle1">
                      Discover our exceptional metal products. Click below to
                      explore the full catalog.
                    </div>
                    <q-btn
                      color="white"
                      rounded
                      outline
                      no-caps
                      label="See more"
                      to="/products"
                      size="25px"
                      class="q-ma-md"
                    />
                  </div>
                </div>
                <div class="company-container q-ma-lg">
                  <div class="text-content">
                    <label class="text-h6 text-bold"
                      >Our Trusted Partners</label
                    >
                    <div class="text-subtitle1">
                      Powering Progress Together. Click below to see the valued
                      company partners.
                    </div>
                    <q-btn
                      color="white"
                      rounded
                      outline
                      no-caps
                      label="See more"
                      to="/partners"
                      size="25px"
                      class="q-ma-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <footer class="bg-dark">
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
            <div class="footer-text">
              <div class="text-center">
                <label class="text-bold">Contact Us:</label>
                <h6 class="q-my-sm"><q-icon name="call" />09159017838</h6>
                <h6 class="q-my-sm"><q-icon name="call" />09382325267</h6>
              </div>
              <div class="text-center">
                <label class="text-bold">Email us:</label>
                <h6 class="q-my-sm">
                  <q-icon name="mail" />jademetal17@gmail.com
                </h6>
              </div>
            </div>
            <q-separator inset color="grey" />

            <div class="final flex flex-center q-pa-lg">
              <label class="text-center text-white"
                >© 2023 Jade Metal Enterprise. All rights reserved.</label
              >
            </div>
          </footer>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
@import "./styles/HomePage.scss";
</style>
<script defer src="./scripts/HomePage"></script>
