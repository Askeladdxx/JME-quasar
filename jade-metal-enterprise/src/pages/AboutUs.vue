<template>
  <div class="about-us">
    <section>
      <header>
        <div class="container">
          <a href="" class="logo-container">
            <img
              src="./images/JME-logo.png"
              alt="logo"
              class="logo-image q-mr-md"
            />
            <label class="logo-name text-bold">Jade Metal Enterprise</label>
          </a>
          <div class="navbtn-containers">
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
        </div>
      </header>
      <div class="sec-2">
        <div class="landing-container row reverse">
          <div class="column justify-center">
            <div class="company-intro q-pa-md q-ma-xl text-center">
              <label class="company-name q-ma-sm text-bold"
                >JADE METAL ENTERPRISE</label
              >
              <h4 class="text-content q-ma-none q-pa-none text-bold">
                Forging Seamless Connectivity: <br />
                Jade Metal Enterprise - Empowering Telecom Infrastructure
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h1>company</h1>
    </section>
  </div>
</template>
<style>
@import "./styles/HomePage.scss";
</style>
<script src="./scripts/HomePage"></script>
