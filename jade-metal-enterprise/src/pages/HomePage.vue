<template>
  <div class="Home">
    <section>
      <header>
        <div class="container">
          <a href="" class="logo-container">
            <img
              src="./images/JME-logo.png"
              alt="logo"
              class="logo-image q-my-sm"
            />
          </a>
          <div class="navbtn-container">
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
      <div class="sec-1">
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
      <div class="sec-2"></div>
    </section>
  </div>
</template>
<style>
@import "./styles/HomePage.scss";
</style>
<script src="./scripts/HomePage"></script>
