<template>
  <div class="Home">
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
      <div class="sec-1">
        <div class="landing-container row justify-end">
          <div class="company-intro col-5 q-pa-xl q-ma-xl flex flex-center">
            <img src="./images/JME-logo.png" class="logo-image" alt="" />
            <h3 class="q-ma-sm text-bold">Jade Metal Enterprise</h3>
            <h6 class="text-content q-ma-none q-pa-none text-center text-bold">
              Forging Seamless Connectivity: <br />
              Jade Metal Enterprise - Empowering Telecom Infrastructure
            </h6>
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
