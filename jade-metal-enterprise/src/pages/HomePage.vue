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
            <div class="company-intro q-pa-md q-my-xl text-center">
              <label class="company-name q-mx-lg text-bold"
                >JADE METAL ENTERPRISE</label
              >
              <h4 class="text-content q-ma-none q-pa-none">
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
        <div class="about-us q-pa-md q-ma-md">
          <h1 class="q-pa-md q-mt-md text-bold h-title">About us</h1>
          <div class="q-ma-md text-center">
            <h4 class="text-bold">
              Welcome to Jade Metal Enterprise - Your Trusted Partner in Telecom
              Metalworks!
            </h4>
          </div>

          <div class="text-container q-pa-md q-ma-xl">
            <p>
              Founded in 2019, Jade Metal Enterprise is a dynamic family-owned
              business that supplies quality metalworks and essential tools for
              the telecom industry. Our passion and commitment to excellence
              have allowed us to quickly establish ourselves as a reliable
              player in the telecom supply market. At Jade Metal Enterprise, we
              understand the critical role that telecom infrastructure plays in
              connecting communities and driving progress. Our mission is to
              provide telecom companies, including industry giants like PLDT,
              Globe, and Fibr, with the high-grade materials they need to build
              and maintain robust networks.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
@import "./styles/HomePage.scss";
</style>
<script src="./scripts/HomePage"></script>
